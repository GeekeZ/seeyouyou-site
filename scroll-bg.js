/* ScrollVideoBackground — production frame loader
   ------------------------------------------------
   Loads 100 JPGs from /bg-frames/frame-NNNN.jpg, draws the scroll-indexed
   frame to a fixed canvas. Respects prefers-reduced-motion (frame-0050 only).
   Scroll progress maps 0..1 to frame indices 1..100.
*/

(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const TOTAL = 100;
  const frames = new Array(TOTAL);
  const loaded = new Array(TOTAL).fill(false);
  let firstReady = false;

  let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  function resize() {
    W = canvas.clientWidth = window.innerWidth;
    H = canvas.clientHeight = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    schedule();
  }

  function pad(n){ return String(n).padStart(4, '0'); }
  function frameUrl(i){ return `bg-frames/frame-${pad(i)}.jpg`; }

  function preload() {
    // Prioritise frames 1..10 first so we can show something fast,
    // then fill the rest.
    const order = [];
    for (let i = 1; i <= 10; i++) order.push(i);
    for (let i = 11; i <= TOTAL; i++) order.push(i);
    let inflight = 0, MAX = 8, idx = 0;
    function next() {
      while (inflight < MAX && idx < order.length) {
        const i = order[idx++];
        const img = new Image();
        img.decoding = 'async';
        inflight++;
        img.onload = () => {
          frames[i - 1] = img;
          loaded[i - 1] = true;
          inflight--;
          if (!firstReady && loaded.slice(0, 4).every(Boolean)) {
            firstReady = true;
            document.body.classList.remove('loading');
            schedule();
          }
          schedule();
          next();
        };
        img.onerror = () => { inflight--; next(); };
        img.src = frameUrl(i);
      }
    }
    next();
  }

  function findNearestLoaded(idx) {
    if (loaded[idx]) return frames[idx];
    for (let r = 1; r < TOTAL; r++) {
      if (idx - r >= 0 && loaded[idx - r]) return frames[idx - r];
      if (idx + r < TOTAL && loaded[idx + r]) return frames[idx + r];
    }
    return null;
  }

  function drawCover(img) {
    if (!img) return;
    const ir = img.width / img.height;
    const vr = W / H;
    let dw, dh, dx, dy;
    if (vr > ir) {
      // viewport wider — fit width
      dw = W;
      dh = W / ir;
      dx = 0;
      dy = (H - dh) / 2;
    } else {
      dh = H;
      dw = H * ir;
      dy = 0;
      dx = (W - dw) / 2;
    }
    ctx.fillStyle = '#02050f';
    ctx.fillRect(0, 0, W, H);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function render() {
    raf = null;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    let p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (reduced) p = 0.49; // → frame-0050

    // Map p in [0,1] to frame in [0..99]
    const f = Math.min(TOTAL - 1, Math.max(0, Math.round(p * (TOTAL - 1))));
    const img = findNearestLoaded(f);
    drawCover(img);
  }

  let raf = null;
  function schedule() {
    if (raf == null) raf = requestAnimationFrame(render);
  }

  document.body.classList.add('loading');
  resize();
  preload();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', schedule, { passive: true });
})();
