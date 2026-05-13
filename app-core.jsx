/* SeeYouYou homepage — section components
   ---------------------------------------- */

const { useState, useEffect, useRef, useMemo } = React;

// External CTA target — Internal Testing track on Google Play.
// Update here when production listing goes live.
window.TESTING_URL = 'https://play.google.com/apps/internaltest/4701568051855899356';

/* ---------- ScrollFloat hero headline ----------
   Wrap each word in a non-breaking span so words stay intact;
   line wraps only happen between words. Within a word, each char
   is still individually animated. */
function ScrollFloatHeadline({ text, scrollProgress }) {
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const t = Math.min(1, Math.max(0, scrollProgress / 0.10));
  let charIdx = 0;
  const total = text.replace(/\s+/g, '').length;
  return (
    <h1 className="hero-headline" aria-label={text}>
      {words.map((w, wi) => {
        if (/^\s+$/.test(w)) return <span key={wi}>{'\u00A0'}</span>;
        return (
          <span key={wi} className="word">
            {w.split('').map((c, ci) => {
              const i = charIdx++;
              const stagger = i / total;
              const local = Math.min(1, Math.max(0, (t - stagger * 0.4) / 0.6));
              const opacity = 1 - local;
              const ty = local * 60;
              return (
                <span
                  key={ci}
                  className="char"
                  style={{
                    opacity,
                    transform: `translateY(${ty}px)`,
                  }}
                  aria-hidden="true"
                >{c}</span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

/* ---------- SlidePanel ----------
   Slides from y:100% to y:0% as the slot scrolls from
   "top bottom" → "top top". Tilts on mousemove. */
function SlidePanel({ children, className = '', frame = '0/100', tilt = true }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1
  const [tiltState, setTiltState] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setProgress(1); return; }

    let raf = null;
    function update() {
      raf = null;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start when top hits bottom of viewport (rect.top === vh)
      // Finish when top reaches top of viewport (rect.top === 0)
      const p = 1 - Math.min(1, Math.max(0, rect.top / vh));
      setProgress(p);
    }
    function onScroll() {
      if (raf == null) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  function onMouseMove(e) {
    if (!tilt) return;
    const rect = innerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTiltState({
      rx: -dy * 4,    // tilt up/down
      ry: dx * 4,     // tilt left/right
      tx: dx * 6,
      ty: dy * 6,
    });
  }
  function onMouseLeave() {
    setTiltState({ rx: 0, ry: 0, tx: 0, ty: 0 });
  }

  // Slide-up + decelerate easing
  const eased = 1 - Math.pow(1 - progress, 3);
  const slideY = (1 - eased) * 80; // px
  const opacity = eased;

  return (
    <div ref={wrapRef} className={`slide-panel-slot ${className}`}>
      <div className="slide-panel-perspective"
           onMouseMove={onMouseMove}
           onMouseLeave={onMouseLeave}>
        <div
          ref={innerRef}
          className="slide-panel-inner"
          style={{
            transform: `translateY(${slideY}px) rotateX(${tiltState.rx}deg) rotateY(${tiltState.ry}deg) translate3d(${tiltState.tx}px, ${tiltState.ty}px, 0)`,
            opacity,
          }}
        >
          {children}
        </div>
        <span className="frame-tag" aria-hidden="true">f {frame}</span>
      </div>
    </div>
  );
}

/* ---------- PillNav ---------- */
function PillNav() {
  const items = [
    { id: 'problem', label: 'The Problem' },
    { id: 'how', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'faq', label: 'FAQ' },
  ];
  function go(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <nav className="pill-nav" aria-label="Primary">
      <a className="pill-nav-brand" href="#hero" onClick={(e)=>{e.preventDefault();go('hero');}}>
        <Logo />
        <span>SeeYouYou</span>
      </a>
      <ul className="pill-nav-list">
        {items.map(it => (
          <li key={it.id}>
            <button className="pill-item" onClick={() => go(it.id)}>
              <span className="pill-item-fill" aria-hidden="true" />
              <span className="pill-item-label">{it.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <a className="pill-cta"
         href="#download"
         onClick={(e)=>{e.preventDefault();go('download');}}>
        Get the app
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </nav>
  );
}

/* ---------- Brand mark (small SVG) ---------- */
function Logo({ size = 24 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        <defs>
          <linearGradient id="gA" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#A78BFA"/>
          </linearGradient>
          <linearGradient id="gB" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#A78BFA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="8" fill="url(#gA)"/>
        <circle cx="44" cy="18" r="9" fill="url(#gB)"/>
        <circle cx="32" cy="22" r="10" fill="url(#gB)" opacity="0.85"/>
        <path d="M10 46 Q32 28 54 46 Q44 56 32 56 Q20 56 10 46 Z" fill="url(#gA)" opacity="0.9"/>
        <g stroke="#7C3AED" strokeLinecap="round" strokeWidth="2">
          <line x1="26" y1="48" x2="26" y2="52"/>
          <line x1="30" y1="44" x2="30" y2="56"/>
          <line x1="34" y1="46" x2="34" y2="54"/>
          <line x1="38" y1="48" x2="38" y2="52"/>
        </g>
      </svg>
    </span>
  );
}

/* ---------- Hero ---------- */
function Hero({ scrollProgress }) {
  return (
    <section id="hero" className="section section-hero" data-screen-label="01 Hero">
      <div className="hero-content">
        <ScrollFloatHeadline text="Talk to anyone, anywhere." scrollProgress={scrollProgress} />
        <p className="hero-sub" style={{
          opacity: Math.max(0, 1 - scrollProgress / 0.06),
          transform: `translateY(${Math.min(40, scrollProgress * 400)}px)`,
        }}>
          Real-time voice translation for in-person conversation.<br/>
          Free to use, credits refresh daily. No trial subscription needed.
        </p>
        <div className="hero-ctas" style={{
          opacity: Math.max(0, 1 - scrollProgress / 0.06),
        }}>
          <div className="cta-primary-stack">
            <a
              className="cta-primary"
              href={window.TESTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(window.TESTING_URL, '_blank', 'noopener,noreferrer'); }}
            >
              <PlayBadge />
            </a>
            <a className="hero-ios" href="#email" onClick={(e)=>{e.preventDefault(); document.getElementById('email').scrollIntoView({behavior:'smooth'});}}>
              iOS coming soon — notify me →
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll to begin</span>
        <span className="scroll-hint-line" />
      </div>
    </section>
  );
}

/* Google Play badge — text-only, original; no real Google logo */
function PlayBadge() {
  return (
    <span className="play-badge">
      <svg width="22" height="24" viewBox="0 0 24 26" aria-hidden="true">
        <defs>
          <linearGradient id="pg1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#60A5FA"/><stop offset="1" stopColor="#3B82F6"/>
          </linearGradient>
          <linearGradient id="pg2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#A78BFA"/><stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
        <path d="M2 1 L2 25 L14 13 Z" fill="url(#pg1)"/>
        <path d="M2 1 L14 13 L20 7 Z" fill="url(#pg2)" opacity="0.9"/>
        <path d="M2 25 L14 13 L20 19 Z" fill="#A78BFA" opacity="0.9"/>
        <path d="M14 13 L20 7 L22 13 L20 19 Z" fill="#7C3AED"/>
      </svg>
      <span className="play-badge-text">
        <span className="play-badge-pre">GET IT ON</span>
        <span className="play-badge-store">Google Play</span>
      </span>
    </span>
  );
}

Object.assign(window, { ScrollFloatHeadline, SlidePanel, PillNav, Logo, Hero, PlayBadge });
