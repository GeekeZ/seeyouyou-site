/* SeeYouYou — content section components */

const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

/* ---------- Trust strip ---------- */
function TrustStrip() {
  const items = [
    { icon: 'shield', label: 'Privacy-first', sub: 'No audio stored' },
    { icon: 'globe',  label: '86 languages', sub: 'Pick yours, pick theirs' },
    { icon: 'bolt',   label: 'Instant translation', sub: 'Starts the moment you stop talking' },
    { icon: 'lock',   label: 'No data harvesting', sub: "We don't sell anything" },
  ];
  return (
    <SlidePanel className="panel-trust" frame="17 / 25">
      <div className="trust-row">
        {items.map((it, i) => (
          <div className="trust-cell" key={i}>
            <span className="trust-icon"><TrustIcon name={it.icon} /></span>
            <div>
              <div className="trust-label">{it.label}</div>
              <div className="trust-sub">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </SlidePanel>
  );
}

function TrustIcon({ name }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'shield': return <svg {...props}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'globe': return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>;
    case 'bolt': return <svg {...props}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case 'lock': return <svg {...props}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>;
    default: return null;
  }
}

/* ---------- Problem ---------- */
function ProblemSection() {
  return (
    <SlidePanel className="panel-problem" frame="25 / 36">
      <div id="problem" className="two-col" data-screen-label="03 Problem">
        <div>
          <span className="eyebrow">The problem</span>
          <h2 className="section-h">
            Voice translators feel like transactions.<br/>
            <span className="gradient-text">Conversations don't.</span>
          </h2>
          <p className="lede">
            Most translation apps still feel like a robot is in between you. Long pauses. A flat synthetic voice. The same sentence, in different words, but stripped of how you actually said it.
          </p>
          <p className="body">
            SeeYouYou is built for the conversation, not the transaction:
          </p>
          <ul className="problem-list">
            <li>
              <span className="check check-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span><strong>Translation starts the moment you stop talking.</strong> No tap-to-send, no "thinking" pause.</span>
            </li>
            <li>
              <span className="check check-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span><strong>Tone and pitch carry through.</strong> If you sound warm, hesitant, or excited, the translation does too.</span>
            </li>
            <li>
              <span className="check check-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span><strong>Sentences are gently smoothed</strong> so the other person hears what you meant, not every "uh" along the way.</span>
            </li>
            <li>
              <span className="check check-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span><strong>One phone, two languages, both directions.</strong> No passing the device back and forth — set it between you and just talk.</span>
            </li>
          </ul>
        </div>
        <PhoneMockup />
      </div>
    </SlidePanel>
  );
}

/* ---------- Phone mockup ---------- */
function PhoneMockup() {
  return (
    <div className="phone-frame phone-frame-img" aria-label="SeeYouYou Live screen mid-translation between Danish and English">
      <div className="phone-notch" aria-hidden="true"></div>
      <img className="phone-screen-img" src="assets/live-voice.jpg" alt=""/>
    </div>
  );
}
function _PhoneMockupOld() {
  return (
    <div className="phone-frame" aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-half phone-top">
          <div className="phone-half-label">EN · You</div>
          <div className="bubble bubble-user">It's so good to finally meet your mom.</div>
        </div>
        <div className="phone-divider">
          <div className="phone-pill">
            <span className="dot dot-blue"/>
            <span>Live</span>
            <span className="dot dot-violet"/>
          </div>
        </div>
        <div className="phone-half phone-bottom">
          <div className="phone-half-label">FR · Marie</div>
          <div className="bubble bubble-other">C'est si bon de te rencontrer enfin.</div>
          <div className="bubble bubble-other bubble-old">Elle voulait te rencontrer depuis si longtemps.</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    { n: '01', t: 'Open the app', d: 'Sign up and get 60 free credits. +10 added every 24 hours, capped at 60.' },
    { n: '02', t: 'Choose two languages', d: 'One for each speaker. 86 to choose from — each shown in its own script.' },
    { n: '03', t: 'Place the phone flat between you', d: 'The screen splits and rotates so both of you read your translation right-side-up. No passing the phone back.' },
    { n: '04', t: 'Talk in turns. Naturally.', d: 'When you stop, SeeYouYou translates instantly — keeping your tone, pitch, and meaning intact.' },
  ];
  return (
    <SlidePanel className="panel-how" frame="36 / 47">
      <div id="how" className="how-wrap" data-screen-label="04 How it works">
        <div className="how-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-h">Four steps. No setup theatre.</h2>
        </div>
        <div className="how-split">
          <div className="how-phone-col">
            <div className="how-phone-frame">
              <img src="assets/live-setup.jpg" alt="SeeYouYou setup screen showing language selection between Danish and English with a Go Live button"/>
              <div className="how-phone-glow" aria-hidden="true"></div>
            </div>
            <p className="how-phone-cap">The actual setup screen — pick two languages, tap Go Live.</p>
          </div>
          <ol className="how-steps how-steps-stack">
            {steps.map(s => (
              <li className="how-step" key={s.n}>
                <span className="how-n">{s.n}</span>
                <div>
                  <h3 className="how-t">{s.t}</h3>
                  <p className="how-d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlidePanel>
  );
}

/* ---------- Features ---------- */
function FeaturesSection() {
  const cards = [
    { icon: 'mic',    t: 'A real human voice — yours', d: 'Not a flat synthetic readout. SeeYouYou imitates your tone, pitch, and pace so the other person hears how you actually said it.' },
    { icon: 'globe',  t: '86 languages — in your script', d: 'Arabic shows as العربية. Hindi as हिन्दी. Japanese as 日本語. Every user picks their own language, in their own writing.' },
    { icon: 'flip',   t: 'Right-way-up from both sides', d: "Set the phone flat between you. Your half shows what they said; theirs rotates 180° so they read what you said from their seat. No phone passing." },
    { icon: 'bolt',   t: 'Holds up in noisy places', d: 'Aggressive ambient-noise filtering tuned for cafés, markets, busy streets. Built for the real world, not a quiet recording booth.' },
    { icon: 'shield', t: 'Privacy-first', d: 'Audio processed in real time and immediately discarded. Transcripts never appear in our logs — production, debug, or crash reports.' },
    { icon: 'people', t: "Knows who's speaking", d: 'Auto-detects each speaker by language. No buttons, no taps to switch turns.' },
    { icon: 'tag',    t: 'Honest pricing', d: 'Credits explained up front. No hidden tiers, no dark patterns.' },
    { icon: 'pin',    t: 'Smooths your sentences', d: 'The other person hears what you meant — not every "uh" and false start along the way.' },
    { icon: 'heart',  t: 'Independent team', d: 'Small, focused, accountable. Built in Denmark.' },
  ];
  return (
    <SlidePanel className="panel-features" frame="47 / 59">
      <div id="features" className="features-wrap" data-screen-label="05 Features">
        <div className="how-head">
          <span className="eyebrow">Features</span>
          <h2 className="section-h">Built for actual conversation.</h2>
        </div>
        <div className="features-grid">
          {cards.map((c, i) => (
            <div className={`feature-card glass ${i === 0 ? 'feature-card-hero' : ''}`} key={i}>
              <span className="feature-icon"><FeatureIcon name={c.icon}/></span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              {i === 0 && <VoiceWave />}
            </div>
          ))}
        </div>
      </div>
    </SlidePanel>
  );
}

function FeatureIcon({ name }) {
  const p = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'wave': return <svg {...p}><path d="M3 12h2M7 7v10M11 4v16M15 8v8M19 11v2M21 12h0"/></svg>;
    case 'globe': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>;
    case 'shield': return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>;
    case 'mic': return <svg {...p}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>;
    case 'people': return <svg {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-4 4.5-4S22 17 22 19"/></svg>;
    case 'tag': return <svg {...p}><path d="M3 12V4h8l10 10-8 8z"/><circle cx="8" cy="9" r="1.5"/></svg>;
    case 'pin': return <svg {...p}><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'heart': return <svg {...p}><path d="M12 21s-8-5-8-12a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 7-8 12-8 12z"/></svg>;
    case 'flip': return <svg {...p}><rect x="6" y="3" width="12" height="18" rx="2"/><line x1="6" y1="12" x2="18" y2="12"/><path d="M10 9l2-2 2 2"/><path d="M14 15l-2 2-2-2"/></svg>;
    case 'bolt': return <svg {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    default: return null;
  }
}

/* Decorative: animated voice waveform that visualises pitch/tone */
function VoiceWave() {
  const bars = Array.from({ length: 28 });
  return (
    <div className="voice-wave" aria-hidden="true">
      {bars.map((_, i) => (
        <span key={i} className="voice-wave-bar" style={{
          animationDelay: `${(i * 0.07) % 1.4}s`,
          // Mimic a sentence shape: rises, plateau, falls
          ['--peak']: `${20 + Math.sin(i / 28 * Math.PI) * 60 + (i % 3) * 6}%`,
        }}/>
      ))}
    </div>
  );
}

/* ---------- Pricing ---------- */
function PricingSection() {
  const tiers = [
    {
      name: 'Free', price: '$0', cad: 'forever',
      tag: '60 free credits · +10 daily refill',
      desc: 'Start with 60 free credits. +10 added every 24 hours, capped at 60.',
      credits: '60', creditUnit: 'free credits',
      sub: '+10 daily refill, capped at 60.',
      note: '',
      cta: 'Start free',
      kind: 'free',
    },
    {
      name: 'Small', price: '$4.99', cad: 'one-time',
      tag: 'Perfect for quick, everyday conversations',
      desc: 'Ideal for market visits, local stalls & short interactions.',
      credits: '180', creditUnit: 'credits one-time',
      sub: 'Great for basic, on-the-go translations.',
      note: 'Expires 12 months after purchase.',
      cta: 'Get Small',
      kind: 'small',
    },
    {
      name: 'Medium', price: '$7.99', cad: 'one-time',
      badge: 'Best value', best: true,
      tag: 'Perfect for staying connected with family & friends',
      desc: 'Ideal for personal chats, daily conversations & check-ins.',
      credits: '360', creditUnit: 'credits one-time',
      sub: 'More credits for more meaningful conversations.',
      valueBadge: '20% better value than Small',
      note: 'Expires 12 months after purchase.',
      cta: 'Get Medium',
      kind: 'medium',
    },
    {
      name: 'Large', price: '$19.99', cad: 'one-time',
      tag: 'Perfect for travel & longer conversations',
      desc: 'Ideal for trips, vacations & extended stays abroad.',
      credits: '1,080', creditUnit: 'credits one-time',
      sub: 'More credits for longer and deeper conversations.',
      valueBadge: '33% better value than Small',
      note: 'Expires 12 months after purchase.',
      cta: 'Get Large',
      kind: 'large',
    },
    {
      name: 'Subscription', price: '$19.99', cad: '/ month',
      tag: 'Perfect for frequent conversations',
      desc: 'For those who need regular translations across any situation.',
      credits: '1,500', creditUnit: 'credits / month',
      sub: 'A flexible plan for everyday use whenever you need it.',
      valueBadge: '46% better value than Small',
      note: 'Max accumulated credits: 3,000. Cancel anytime.',
      cta: 'Get Subscription',
      kind: 'sub',
    },
  ];
  return (
    <SlidePanel className="panel-pricing" frame="59 / 72">
      <div id="pricing" className="pricing-wrap" data-screen-label="06 Pricing">
        <div className="how-head pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-h">No hidden subscriptions. No forced trials.</h2>
          <p className="lede pricing-lede">
            Try it free, then buy more if you need it. <strong>First-time buyers</strong> get <span className="bonus">+200 bonus credits</span> on any pack or subscription. Once per account.
          </p>
        </div>
        <div className="pricing-grid">
          {tiers.map(t => <PricingCard key={t.kind} t={t}/> )}
        </div>
      </div>
    </SlidePanel>
  );
}

function PricingCard({ t }) {
  return (
    <div className={`price-card glass ${t.best ? 'price-card-best' : ''} price-${t.kind}`}>
      {t.kind !== 'free' && (
        <div className="bonus-tag">
          <strong>+200 credits</strong>
          <span>on first purchase</span>
        </div>
      )}
      {t.best && <div className="best-badge">Best value</div>}
      <div className="price-illo" aria-hidden="true">
        <PriceIcon kind={t.kind}/>
      </div>
      <div className="price-head">
        <h3 className="price-name">{t.name}</h3>
        <p className="price-tag">{t.tag}</p>
        <p className="price-desc">{t.desc}</p>
      </div>
      <div className="price-amount">
        <span className="price-num">{t.price}</span>
        <span className="price-cad">{t.cad}</span>
      </div>
      <div className="price-value-slot">
        {t.valueBadge && <div className="value-pill">{t.valueBadge}</div>}
      </div>
      <hr className="price-sep"/>
      <div className="price-credits">
        <span className="price-credits-icon"><CreditIcon/></span>
        <div>
          <div className="price-credits-num"><strong>{t.credits}</strong> <span>{t.creditUnit}</span></div>
          <div className="price-credits-sub">{t.sub}</div>
        </div>
      </div>
      {t.note && <p className="price-note">{t.note}</p>}
      <button
        className={`price-cta ${t.best ? 'price-cta-best' : ''}`}
        onClick={() => { const el = document.getElementById('download'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
      >{t.cta}</button>
    </div>
  );
}

function PriceIcon({ kind }) {
  const stroke = '#7C3AED', strokeWidth = 1.7;
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
    stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'free':   return <svg {...common}><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>;
    case 'small':  return <svg {...common}><path d="M3 9l1-4h16l1 4"/><path d="M3 9v11h18V9"/><path d="M9 14h6"/></svg>;
    case 'medium': return <svg {...common}><circle cx="9" cy="9" r="3"/><circle cx="16" cy="10" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-4 4.5-4S22 17 22 19"/></svg>;
    case 'large':  return <svg {...common}><path d="M2 12l9-7 9 7v8H2z"/><path d="M2 12l20 0"/><path d="M11 5v14"/></svg>;
    case 'sub':    return <svg {...common}><path d="M12 4a8 8 0 11-7.5 5.5"/><path d="M4 5l1 4 4-1"/></svg>;
    default: return null;
  }
}

function CreditIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="2.5"/>
      <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/>
      <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/>
    </svg>
  );
}
function PrivacyShield() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinejoin="round" style={{verticalAlign:'-3px',marginRight:'8px'}}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

/* ---------- Privacy ---------- */
function PrivacySection() {
  const points = [
    "We don't store your conversations.",
    "We don't sell your data — we don't have data to sell.",
    "We don't show ads.",
    "Audio is processed in real time and immediately discarded. Transcripts never appear in our logs — not in production, not in crash reports, not in debug builds.",
    "Delete your account anytime. We delete what we have within 30 days.",
  ];
  return (
    <SlidePanel className="panel-privacy" frame="72 / 82">
      <div id="privacy" className="privacy-wrap" data-screen-label="07 Privacy">
        <div className="privacy-grid">
          <div>
            <span className="eyebrow">Privacy</span>
            <h2 className="section-h">Your conversations<br/><span className="gradient-text">stay yours.</span></h2>
            <p className="lede">
              Privacy isn't a feature here. It's the foundation. The architecture is built so we couldn't sell your conversations even if we wanted to — there's nothing to sell.
            </p>
            <a
              className="link-arrow"
              href="/privacy/"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.assign('/privacy/'); }}
            >Read the full Privacy Policy
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
          <ul className="privacy-list">
            {points.map((p, i) => (
              <li key={i}>
                <span className="check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlidePanel>
  );
}

/* ---------- FAQ ---------- */
function FAQSection() {
  const items = [
    { q: 'How is this different from other translation tools?',
      a: "Most translation tools were built around the single-phrase paradigm — type or speak something short, get something short back. SeeYouYou is built for real, back-and-forth conversation on the newest generation of speech AI. That gives us a few things older tools can't match: it's built for two people sharing one phone face-to-face, with the screen splitting and rotating so both sides read their translation right-side-up; aggressive ambient-noise filtering so it holds up in cafés, markets, and on the street; voices that sound human rather than robotic, with natural prosody and your own tone preserved; and translation that triggers the instant you stop speaking, not after you tap a button. The other person hears what you actually meant — not a literal word-for-word rendering of every \"uh\" and false start." },
    { q: 'Does it work offline?',
      a: "No. Real-time translation needs cloud processing for the speed and quality we deliver. We're working on offline fallbacks for limited language pairs in a later release." },
    { q: 'How accurate is it?',
      a: "Modern speech-to-translation models are quite good for major language pairs (English, Spanish, French, German, Mandarin, Japanese, etc.) and improve year over year. For idioms, slang, and very technical vocabulary, expect occasional misses — same as any translator, human or machine." },
    { q: 'What languages are supported?',
      a: "86 at launch — including Arabic, Bengali, Chinese (Mandarin), Danish, English, French, German, Hindi, Japanese, and Spanish, plus 76 more covering most of Europe, the Americas, South Asia, East Asia, and key regions of Africa and the Middle East. Each language displays in its own script — Arabic shows as العربية, Hindi as हिन्दी, Japanese as 日本語. The full list is in the app." },
    { q: 'How private is my data really?',
      a: "Your audio is sent to our cloud translation service in real time, translated, and discarded. We don't write the audio to disk. We don't keep transcripts. We don't share data with advertisers — we don't have advertisers." },
    { q: 'What happens if I run out of credits mid-conversation?',
      a: "The conversation continues until your current sentence completes, then SeeYouYou pauses politely and offers to top up. You're never cut off mid-sentence." },
    { q: 'Is there an iOS version?',
      a: "Not yet. We're Android-first — currently in Google Play internal testing (link in the download section). iOS is in development for a later release. To be notified at iOS launch, email us at hello@seeyouyou.app with subject \"iOS notify\"." },
    { q: 'Can I get a refund?',
      a: "Yes. Google Play handles refunds within 48 hours of purchase per their standard policy. For unused credits beyond that window, contact support@seeyouyou.app." },
    { q: "What if my conversation partner doesn't have the app?",
      a: "They don't need it. SeeYouYou is built so one phone serves both of you. You set the device between you, pick both languages, and start talking. The other person just speaks naturally in their own language — they don't install anything, sign up for anything, or even need to know what app you're using." },
    { q: 'Will it work in noisy places? Cafés, markets, transit?',
      a: "Yes. SeeYouYou uses aggressive ambient-noise filtering tuned for real-world environments — cafés, markets, busy streets. We can't promise perfection in a wind tunnel, but everyday public places work the way you'd hope." },
    { q: 'Is my conversation used to train AI?',
      a: "No — not by us. Audio is sent to our translation backend, translated in real time, and discarded. SeeYouYou never uses your conversations to train AI models. The speech-to-speech translation passes through Google's AI services; Google's handling of that audio is governed by Google's own terms, which we link to in our Privacy Policy." },
  ];
  const [openSet, setOpenSet] = useState2(() => new Set(items.map((_, i) => i)));
  const toggle = (i) => setOpenSet(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <SlidePanel className="panel-faq" frame="82 / 92">
      <div id="faq" className="faq-wrap" data-screen-label="08 FAQ">
        <div className="how-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-h">Questions, answered honestly.</h2>
        </div>
        <ul className="faq-list">
          {items.map((it, i) => (
            <li key={i} className={`faq-item ${openSet.has(i) ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)} aria-expanded={openSet.has(i)}>
                <span>{it.q}</span>
                <span className="faq-toggle" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{it.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SlidePanel>
  );
}

/* ---------- Email capture + download ---------- */
function EmailSection() {
  return (
    <SlidePanel className="panel-email" frame="92 / 98">
      <div id="email" className="email-wrap" data-screen-label="09 Email">
        <div className="email-grid">
          <div id="download" className="download-card">
            <h3>Get early access on Google Play</h3>
            <p>60 free credits at sign-up, +10 daily. No card needed.</p>
            <a
              className="cta-primary big"
              href={window.TESTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(window.TESTING_URL, '_blank', 'noopener,noreferrer'); }}
            >
              <PlayBadge/>
            </a>
            <p className="dl-meta">Free · Android 9+ · Age 16+ · Internal testing</p>
          </div>
          <div className="email-card">
            <span className="eyebrow">iOS</span>
            <h3>Want to know when iOS launches?</h3>
            <p className="email-sub">iOS is in development. We'll send a single email when it ships — no marketing, no list-selling. Just drop us a line.</p>
            <a className="email-mailto-cta" href="mailto:hello@seeyouyou.app?subject=iOS%20launch%20notify&body=Please%20let%20me%20know%20when%20SeeYouYou%20launches%20on%20iOS.">
              Email hello@seeyouyou.app
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft:'8px',verticalAlign:'-2px'}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <ul className="email-expect">
              <li><span className="dot">1</span> One launch email when iOS ships. Nothing before then.</li>
              <li><span className="dot">2</span> Want off the list? Just reply "remove" — we'll handle it manually.</li>
            </ul>
          </div>
        </div>
      </div>
    </SlidePanel>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <SlidePanel className="panel-footer" frame="98 / 100" tilt={false}>
      <div className="footer-wrap" data-screen-label="10 Footer">
        <div className="footer-brand">
          <Logo size={28}/>
        </div>
        <ul className="footer-links">
          <li><a href="#" data-action="privacy">Privacy Policy</a></li>
          <li><a href="#" data-action="terms">Terms of Service</a></li>
          <li><a href="mailto:support@seeyouyou.app">support@seeyouyou.app</a></li>
        </ul>
        <p className="footer-made">Made by AvAmeliA · Denmark</p>
      </div>
    </SlidePanel>
  );
}

Object.assign(window, {
  TrustStrip, ProblemSection, HowItWorks, FeaturesSection,
  PricingSection, PrivacySection, FAQSection, EmailSection, Footer,
});
