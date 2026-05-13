// Terms of Service — v1.6 content + modal component.
// Data is exposed on window.TERMS_DATA so a standalone page (Terms.html)
// can render the same content as a full page.
const { useEffect: useEffectTerms, useRef: useRefTerms } = React;

const TERMS_DATA = {
  version: '1.6',
  effective: '2026-05-13',
  updated: '2026-05-13',
  provider: 'AvAmeliA (sole proprietor), Denmark',
  contact: 'support@seeyouyou.app',
  intro: 'These Terms of Service ("Terms") govern your use of the SeeYouYou mobile application ("the App," "we," "us," "our"). By creating an account or using the App, you agree to these Terms. If you do not agree, do not use the App. We\'ve written these in plain language. If anything is unclear, email us at support@seeyouyou.app.',
  sections: [
    {
      n: '1', title: 'Who we are',
      body: [
        { type: 'p', text: 'SeeYouYou is operated by AvAmeliA, a sole proprietor registered in Denmark. SeeYouYou is the brand name; the legal entity behind it is the sole proprietorship of AvAmeliA.' },
        { type: 'p', text: 'When these Terms refer to "we," "us," or "our," they mean AvAmeliA operating as SeeYouYou.' },
      ],
    },
    {
      n: '2', title: 'What SeeYouYou does',
      body: [
        { type: 'p', text: 'SeeYouYou is a real-time voice translation app for Android. You speak; it translates; the other person hears or reads the translation; they speak back; you get their reply translated. It\'s designed for everyday conversations — markets, restaurants, travel, family moments — across language barriers.' },
        { type: 'p', text: 'The translation is powered by Google\'s AI services. Speaker identification is hardened by Google\'s on-device language detection. The App requires an internet connection to function.' },
      ],
    },
    {
      n: '3', title: 'Eligibility',
      body: [
        { type: 'p', text: 'You may use SeeYouYou if:' },
        { type: 'ul', items: [
          'You are at least 16 years old (aligned with GDPR Article 8 default in Denmark and the EU).',
          'You have the legal capacity to enter into a contract.',
          'You are not barred from receiving services under the laws of your country.',
        ]},
        { type: 'p', text: 'If you are under 16, do not use the App.' },
      ],
    },
    {
      n: '4', title: 'Your account',
      body: [
        { type: 'p', text: 'To use SeeYouYou, you create an account by signing in with either Google Sign-In or with an email address and password.' },
        { type: 'p', text: 'You agree to:' },
        { type: 'ul', items: [
          'Provide accurate information.',
          'Keep your account credentials secure (we don\'t manage your Google password — Google does).',
          'Not share your account with others.',
          'Notify us if you believe your account has been compromised.',
        ]},
        { type: 'p', text: 'You can delete your account at any time directly from the App\'s Profile screen ("Delete account"), or by emailing support@seeyouyou.app with the subject line "Account Deletion Request." We process deletion within 30 days. Some data (purchase records and audit log entries) may be retained longer where Danish accounting law requires (see Privacy Policy §6).' },
      ],
    },
    {
      n: '5', title: 'What you can and cannot do with the App',
      body: [
        { type: 'h', text: '5.1 You may' },
        { type: 'ul', items: [
          'Use the App for personal, non-commercial conversations.',
          'Translate conversations between you and people physically present with you.',
          'Use the App in any country where it is legal to do so.',
        ]},
        { type: 'h', text: '5.2 You may not' },
        { type: 'ul', items: [
          'Use the App for any illegal purpose.',
          'Use the App to harass, threaten, deceive, or harm another person.',
          'Record other people\'s voices without their knowledge or consent. The App does not retain voice audio, but you are still responsible for the laws of recording in your jurisdiction (in Denmark, two-party consent is required for recording in non-public spaces).',
          'Reverse engineer, decompile, or extract the source code of the App (except where local law explicitly permits this regardless of contract).',
          'Resell, sublicense, or commercially distribute the App or its translations.',
          'Attempt to bypass any access controls, payment systems, or rate limits — including by creating multiple accounts to claim repeated signup bonuses or first-purchase grants in a way that circumvents the per-account eligibility rules.',
          'Use the App in connection with weapons, illegal trafficking, or any activity that violates international law.',
        ]},
        { type: 'h', text: '5.3 Account-level abuse' },
        { type: 'p', text: 'We reserve the right to suspend or terminate any account that violates these Terms. We will notify you of the suspension and the reason, and you can respond by emailing support@seeyouyou.app.' },
      ],
    },
    {
      n: '6', title: 'Limitations of the App — please read carefully',
      body: [
        { type: 'callout', text: 'SeeYouYou is not a substitute for a human translator in high-stakes situations. We say this directly because it matters: AI translation, even very good AI translation, makes mistakes. The right tool for your conversation depends on what\'s at stake.' },
        { type: 'h', text: '6.1 Do NOT use SeeYouYou for:' },
        { type: 'ul', items: [
          'Medical decisions or emergencies. AI mistranslation in a medical context can cause harm. Use a certified medical interpreter or call emergency services in your local language.',
          'Legal proceedings, court testimony, or signing legal documents. These require certified legal translators.',
          'Safety-critical instructions (e.g., aviation, machinery operation, evacuation orders).',
          'Financial transactions involving large sums where mistranslation could cause significant loss.',
        ]},
        { type: 'h', text: '6.2 Do USE SeeYouYou for:' },
        { type: 'ul', items: [
          'Casual conversation across language barriers.',
          'Travel, shopping, ordering food, asking directions.',
          'Connecting with family members or friends who speak another language.',
          'Initial communication that you can verify with a person or professional translator if it matters.',
        ]},
        { type: 'h', text: '6.3 Translation accuracy' },
        { type: 'p', text: 'We strive for high translation quality, but we cannot guarantee accuracy. Translations are produced by Google\'s AI services, which are updated over time. Quality varies by language pair, accent, dialect, and audio conditions. If accuracy matters, please confirm critical information through additional means.' },
        { type: 'p', text: 'We are not liable for outcomes that depend on translation accuracy in contexts we have warned against above.' },
      ],
    },
    {
      n: '7', title: 'Pricing and payment',
      body: [
        { type: 'h', text: '7.1 Credits — what they are' },
        { type: 'p', text: 'SeeYouYou uses "credits" as the internal unit for conversation usage. Credits are deducted as you speak and as the App translates for you. Roughly, 6 credits cover 1 minute of conversation, though this can vary slightly depending on conversation context, length, and other technical factors (such as silence pauses, which are not billed).' },
        { type: 'p', text: 'SeeYouYou\'s pricing reflects the cost of the underlying AI services plus our service margin (which covers infrastructure, support, and ongoing development). We use credits rather than minutes because the underlying cost fluctuates with conversation context, and credits give us a stable unit to work with while keeping our pricing honest about what we charge.' },

        { type: 'h', text: '7.2 Pack catalog' },
        { type: 'p', text: 'You can purchase credits in three pack sizes through Google Play. All prices are listed in USD and converted to your local currency by Google Play at the point of purchase.' },
        { type: 'table', rows: [
          ['Pack', 'Price', 'Credits', 'Approx. time', 'Expiry'],
          ['Small', '$4.99', '180', '~30 min', '12 months from purchase'],
          ['Medium', '$7.99', '360', '~60 min', '12 months from purchase'],
          ['Large', '$19.99', '1,080', '~3 hours', '12 months from purchase'],
        ]},
        { type: 'p', text: 'Pack credits are one-time. Once you purchase a pack, the credits are yours to use for 12 months from the purchase date. Unused credits at the end of 12 months expire (we\'ll surface a reminder before expiry).' },

        { type: 'h', text: '7.3 Subscription' },
        { type: 'table', rows: [
          ['Plan', 'Price', 'Credits', 'Cycle', 'Notes'],
          ['SeeYouYou Monthly', '$19.99/mo', '1,500/mo', 'Auto-renews', 'Rolls over up to 3,000 credit cap (§7.3.1)'],
        ]},
        { type: 'p', text: '§7.3.1 Subscription rollover and cap behavior. Unused subscription credits roll over to the next billing cycle, up to a total accumulated cap of 3,000 credits (about two months\' worth of grants).' },
        { type: 'p', text: 'When you reach the 3,000-credit cap: the next billing cycle still charges you $19.99 (Google Play handles the recurring charge); the 1,500-credit grant from that next cycle is NOT added to your balance — you stay at 3,000 because you\'re at the cap; we notify you in the App at 2,400 accumulated credits with a non-blocking message: "Your credits are nearing the rollover cap. Use them or pause your subscription."' },
        { type: 'p', text: 'This is a "warn-and-bill" model: we don\'t make billing decisions on your behalf, but we tell you clearly when continuing your subscription will not add credits. You can cancel or pause your subscription at any time from the App\'s Profile screen, which deep-links to Google Play\'s native subscription management (see §7.7).' },

        { type: 'h', text: '7.4 Free tier' },
        { type: 'p', text: 'You don\'t need to pay to use SeeYouYou. Every account gets:' },
        { type: 'ul', items: [
          'Signup bonus: 60 credits granted on first sign-up (about 10 minutes of conversation). No expiry; never deducted by inactivity.',
          'Daily refill: 10 credits per 24-hour period, up to a maximum of 60 stored. The 24-hour window is rolling from your last refill, not a fixed midnight reset.',
        ]},
        { type: 'p', text: 'This means you always have ~10 minutes per day available, even without a paid pack or subscription.' },

        { type: 'h', text: '7.5 First-purchase bonus' },
        { type: 'p', text: 'On your first lifetime purchase — whether a pack or a subscription — we add +200 bonus credits to the purchase. The bonus credits expire after 12 months from the purchase date, the same as a pack.' },
        { type: 'p', text: 'The bonus applies once per account, regardless of which pack or subscription you choose. It cannot be combined with other promotions. If you create multiple accounts to claim the bonus repeatedly, that is account-level abuse under §5.2 and we may remove the duplicate accounts.' },

        { type: 'h', text: '7.6 How credits are consumed' },
        { type: 'p', text: 'Credits are deducted only for the audio that is actually translated. Specifically:' },
        { type: 'ul', items: [
          'You are NOT billed for: silence and pauses; sessions that fail due to network errors mid-utterance; audio that is dropped because the App detected a third language outside your selected pair; audio that the AI declines to translate; the brief connection-setup window before a session starts.',
          'You ARE billed for: input audio that is sent to the AI for translation, and output audio that the AI produces. (Measured in audio seconds, then converted to credits at 1 credit per 10 seconds total.)',
        ]},
        { type: 'p', text: 'Drain order (when you have credits from multiple sources) — we consume your credits in this order to protect you from losing credits you\'ve paid for:' },
        { type: 'ul', items: [
          '1. Signup bonus',
          '2. Daily refill (so you don\'t waste it by hitting the daily cap)',
          '3. Subscription credits (current cycle, then rollover)',
          '4. Pack credits (oldest expiry first)',
        ]},
        { type: 'p', text: 'Your bucket of paid pack credits never gets consumed before your free or subscription credits are used up first.' },

        { type: 'h', text: '7.7 Subscription cancellation' },
        { type: 'p', text: 'You can cancel your subscription at any time. There are two ways:' },
        { type: 'ul', items: [
          'In the App: open the Profile screen → tap Manage subscription → this opens Google Play\'s native subscription management screen, where you can cancel, pause, or change your plan.',
          'In Google Play directly: open the Google Play Store app → tap your profile picture → Payments & subscriptions → Subscriptions → SeeYouYou Monthly → Cancel.',
        ]},
        { type: 'p', text: 'What happens when you cancel: your subscription stays active until the end of your current billing period; after that, no new monthly grant is added, and no further charges are made. Any credits you have remaining at the time of cancellation continue to be usable for 12 months from the cancellation date. (This is more generous than Google Play\'s default subscription handling — we do this because you\'ve paid for those credits.) Your free tier is unaffected and continues normally. You will not be charged again after cancellation unless you re-subscribe.' },

        { type: 'h', text: '7.8 Refunds and disputes' },
        { type: 'p', text: 'Google Play 48-hour automatic refund. Google Play offers an automatic refund window: within 48 hours of purchase, you can request a refund directly through Google Play, and Google handles it. SeeYouYou cannot reverse a Google Play automatic refund.' },
        { type: 'p', text: 'Beyond 48 hours — founder discretion. If you have a refund request beyond Google Play\'s automatic window, email support@seeyouyou.app with the subject line "Refund Request" and explain your situation. We\'ll review case-by-case. We aim to resolve refund requests within 14 days.' },
        { type: 'p', text: 'What we generally refund: unused pack credits within 30 days of purchase (we deduct the value of any consumed credits at standard pack rates); subscription cycles where the App was not functional due to a bug on our end.' },
        { type: 'p', text: 'What we generally do not refund: already-consumed credits; subscription cycles where the App was functional and you simply did not use it (cancel instead, see §7.7); account-level abuse cases under §5.2.' },

        { type: 'h', text: '7.9 Right of withdrawal' },
        { type: 'p', text: 'We offer a 14-day right of withdrawal for digital purchases to all users, regardless of where you live. (For consumers in the EU/EEA, this is also a statutory right under the EU Consumer Rights Directive that nothing in these Terms can waive — see §9.4.)' },
        { type: 'p', text: 'For credit packs (digital content): by purchasing a pack, you consent to immediate delivery of the credits to your account. You acknowledge that this consent waives your 14-day right of withdrawal once you begin consuming the credits. If you have not consumed any credits from a pack within 14 days of purchase, you may withdraw and receive a full refund — email support@seeyouyou.app with subject "Withdrawal Request" and your account email.' },
        { type: 'p', text: 'For subscriptions: you have 14 days from your first subscription purchase to withdraw. If you withdraw within 14 days and have consumed some credits during that period, we will refund a pro-rata amount based on the unused portion of your monthly grant. Subsequent monthly subscription cycles do not restart the 14-day withdrawal period — withdrawal applies to your initial subscription purchase only. After that, normal cancellation under §7.7 applies.' },
        { type: 'p', text: 'How to exercise your right of withdrawal: email support@seeyouyou.app with subject "Withdrawal Request" within the 14-day window. You don\'t need to give a reason. We will process the withdrawal within 14 days of receiving your request.' },

        { type: 'h', text: '7.10 Auto-renewal disclosure (subscription)' },
        { type: 'p', text: 'Your SeeYouYou Monthly subscription automatically renews every month at $19.99 (or your local-currency equivalent set by Google Play) until you cancel.' },
        { type: 'ul', items: [
          'The renewal date is the same calendar day each month as your initial purchase.',
          'You will receive a renewal receipt from Google Play after each successful charge.',
          'To stop auto-renewal, cancel before the renewal date (see §7.7). Cancellation does not refund the current cycle but stops future charges.',
          'We may change subscription pricing in the future. If we do, we will give you advance notice through an in-App message and a Terms version bump. You can cancel before the new price takes effect if you don\'t agree to it.',
        ]},

        { type: 'h', text: '7.11 Currency, regional pricing, taxes' },
        { type: 'p', text: 'Prices are listed in USD as a reference. Google Play converts these to your local currency and may apply regional pricing — the price you see at checkout is what you pay. Any applicable VAT, GST, or other consumption tax is collected by Google Play according to your country of residence and shown to you at checkout.' },
      ],
    },
    {
      n: '8', title: 'Privacy',
      body: [
        { type: 'p', text: 'Your privacy is governed by the SeeYouYou Privacy Policy (current version 1.6, available in-App and at seeyouyou.app/privacy).' },
        { type: 'p', text: 'Key things to know: we process voice in real time and don\'t retain it; SeeYouYou does not use your conversations to train AI models (Google\'s handling is governed by Google\'s own terms); we do retain purchase records and operational metadata (per Privacy Policy §6) for accounting compliance; you can request data export, correction, or deletion at any time (per Privacy Policy §7).' },
        { type: 'p', text: 'These Terms and the Privacy Policy work together. If there\'s a conflict between them on a privacy-specific matter, the Privacy Policy controls.' },
      ],
    },
    {
      n: '9', title: 'Limitation of liability — please read carefully',
      body: [
        { type: 'h', text: '9.1 As-is provision' },
        { type: 'p', text: 'To the maximum extent permitted by law, the App is provided "as is" and "as available." We do not warrant that:' },
        { type: 'ul', items: [
          'The App will be uninterrupted, error-free, or available at all times.',
          'Translations will be accurate, complete, or reliable.',
          'The App will meet your specific requirements.',
          'Defects will be corrected on any particular timeline.',
          'Service availability may be affected by internet connectivity, regional service availability, or third-party provider outages.',
        ]},
        { type: 'h', text: '9.2 Liability cap' },
        { type: 'p', text: 'To the maximum extent permitted by law, our total liability to you for any claims arising out of or related to these Terms or your use of the App is limited to the amount you have paid us in the 12 months preceding the claim, or €100 (one hundred euros), whichever is greater.' },
        { type: 'h', text: '9.3 Excluded damages' },
        { type: 'p', text: 'We are not liable for indirect, consequential, incidental, special, or punitive damages, including (but not limited to) loss of profits, loss of data, business interruption, or personal injury — even if we have been advised of the possibility.' },
        { type: 'h', text: '9.4 EU consumer-law carve-out' },
        { type: 'p', text: 'If you are a consumer in the EU/EEA, nothing in these Terms limits or excludes your statutory rights under EU consumer protection law, including:' },
        { type: 'ul', items: [
          'Mandatory rights under the EU Consumer Rights Directive (including the right of withdrawal, which we offer to all users by contract in §7.9 and which EU consumers also have as a non-waivable statutory right).',
          'Mandatory rights under the EU Sale of Goods Directive.',
          'Rights under your national consumer protection law.',
        ]},
        { type: 'p', text: 'If any provision of these Terms is invalid under your local consumer protection law, that provision is replaced by the local law\'s mandatory provisions, but the rest of these Terms remain in effect.' },
        { type: 'h', text: '9.5 Liability for gross negligence and intentional misconduct' },
        { type: 'p', text: 'Nothing in these Terms limits liability for: death or personal injury caused by our negligence; fraud or fraudulent misrepresentation; gross negligence or intentional misconduct; or any other liability that cannot be excluded under applicable law.' },
      ],
    },
    {
      n: '10', title: 'Intellectual property',
      body: [
        { type: 'h', text: '10.1 Our IP' },
        { type: 'p', text: 'The SeeYouYou name, logo, App design, code, and original content are our intellectual property or licensed to us. Use of SeeYouYou does not grant you any right to use these except as needed to use the App as intended.' },
        { type: 'h', text: '10.2 Your translations' },
        { type: 'p', text: 'Translations produced by the App are based on your input. You retain whatever rights you have in your spoken or written input. We claim no ownership over the content of your conversations. SeeYouYou does not use your conversations to train AI models. Your voice and translations are processed in real time and discarded.' },
        { type: 'h', text: '10.3 Third-party services' },
        { type: 'p', text: 'The App incorporates services from Google. These are governed by Google\'s respective terms, which apply alongside ours.' },
      ],
    },
    {
      n: '11', title: 'Changes to these Terms',
      body: [
        { type: 'p', text: 'We may update these Terms. When we do, we will bump the version number (e.g., 1.6 → 1.7), update the "Effective date" at the top, and for material changes prompt you in-app to re-accept the new version before continuing to use the App.' },
        { type: 'p', text: 'Material changes that require re-acceptance include: introduction of paid tiers; changes to pricing; changes to data processing categories; changes to liability provisions; changes to your rights or our obligations; changes to refund or withdrawal policies; changes to cancellation flow.' },
        { type: 'p', text: 'Non-material changes (typo fixes, clarifications that don\'t change meaning, contact info updates, URL updates) do not require re-acceptance but will still be reflected in a version bump.' },
      ],
    },
    {
      n: '12', title: 'Termination',
      body: [
        { type: 'p', text: 'You can stop using the App and delete your account at any time. We can terminate or suspend your account if you violate these Terms.' },
        { type: 'p', text: 'On termination: your account and associated data are deleted per the Privacy Policy (subject to Danish accounting-law retention for purchase records). Provisions that should survive termination (liability, IP, governing law) remain in effect. Refund obligations under §7.8 survive termination.' },
      ],
    },
    {
      n: '13', title: 'Governing law and dispute resolution',
      body: [
        { type: 'h', text: '13.1 Governing law' },
        { type: 'p', text: 'We\'re based in Denmark, so these Terms are governed by Danish law (without regard to conflict-of-law principles). If you live in the EU, this doesn\'t affect your right to invoke the consumer protections of your home country — see §13.2.' },
        { type: 'h', text: '13.2 Disputes' },
        { type: 'p', text: 'If you have a complaint, please contact us first at support@seeyouyou.app. We aim to resolve disputes informally and quickly. If we cannot resolve the dispute informally:' },
        { type: 'ul', items: [
          'EU consumers: you may bring a claim in the courts of your country of residence, or use the EU Online Dispute Resolution platform at ec.europa.eu/consumers/odr.',
          'Other users: disputes are subject to the non-exclusive jurisdiction of Danish courts.',
        ]},
        { type: 'h', text: '13.3 No mandatory arbitration' },
        { type: 'p', text: 'We do not require you to waive your right to bring a claim in court. There is no mandatory arbitration clause in these Terms.' },
      ],
    },
    {
      n: '14', title: 'Severability and entire agreement',
      body: [
        { type: 'p', text: 'If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions remain in full effect. These Terms, together with the Privacy Policy, constitute the entire agreement between you and us regarding the App.' },
      ],
    },
    {
      n: '15', title: 'Contact',
      body: [
        { type: 'p', text: 'For questions, complaints, account requests, refund requests, withdrawal requests, or feedback:' },
        { type: 'p', text: 'Email: support@seeyouyou.app' },
        { type: 'p', text: 'For more about SeeYouYou, visit seeyouyou.app.' },
      ],
    },
  ],
};

function TermsModal({ open, onClose }) {
  const scrollRef = useRefTerms(null);
  const dialogRef = useRefTerms(null);

  useEffectTerms(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    setTimeout(() => dialogRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="privacy-modal-overlay terms-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="privacy-modal-card terms-modal-card glass"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="privacy-modal-head">
          <div className="privacy-modal-titlewrap">
            <div className="privacy-modal-eyebrow terms-eyebrow">
              <span className="pm-dot"/>
              <span>Terms of Service</span>
              <span className="pm-version">v{TERMS_DATA.version}</span>
            </div>
            <h2 id="terms-modal-title" className="privacy-modal-title">The agreement, in plain language</h2>
            <p className="privacy-modal-meta">
              Effective {TERMS_DATA.effective} · Provider: {TERMS_DATA.provider}
            </p>
          </div>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Close terms of service">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </header>
        <div className="privacy-modal-scroll" ref={scrollRef}>
          <TermsContent onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

// Reusable content body — used by the modal AND by the standalone Terms.html page.
function TermsContent({ standalone = false, onClose } = {}) {
  return (
    <div className="privacy-modal-body">
      <p className="privacy-intro terms-intro">{TERMS_DATA.intro}</p>
      {TERMS_DATA.sections.map((s) => (
        <section key={s.n} className="privacy-section">
          <h3 className="privacy-section-title">
            <span className="privacy-section-num terms-section-num">{s.n}</span>
            {s.title}
          </h3>
          {s.body.map((b, i) => {
            if (b.type === 'p') return <p key={i} className="privacy-p">{b.text}</p>;
            if (b.type === 'h') return <h4 key={i} className="privacy-h terms-h">{b.text}</h4>;
            if (b.type === 'callout') return <div key={i} className="terms-callout">{b.text}</div>;
            if (b.type === 'ul') return (
              <ul key={i} className="privacy-ul terms-ul">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
            if (b.type === 'table') {
              const [head, ...rows] = b.rows;
              return (
                <div key={i} className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>{head.map((h, j) => <th key={j}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {rows.map((r, j) => (
                        <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return null;
          })}
        </section>
      ))}
      <footer className="privacy-modal-footer">
        <p>© 2026 AvAmeliA · SeeYouYou_Terms_of_Service_v{TERMS_DATA.version}</p>
        {!standalone && (
          <button className="privacy-modal-done terms-modal-done" onClick={onClose}>Close</button>
        )}
      </footer>
    </div>
  );
}

window.TERMS_DATA = TERMS_DATA;
window.TermsContent = TermsContent;
window.TermsModal = TermsModal;
