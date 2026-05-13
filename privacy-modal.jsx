// Privacy Policy — v1.6 content + modal component.
// Data is exposed on window.PRIVACY_DATA so a standalone page (Privacy.html)
// can render the same content as a full page.
const { useEffect, useRef } = React;

const PRIVACY_DATA = {
  version: '1.6',
  effective: '2026-05-13',
  updated: '2026-05-13',
  controller: 'AvAmeliA (sole proprietor), Denmark',
  contact: 'support@seeyouyou.app',
  appId: 'app.seeyouyou.live',
  intro: 'This Privacy Policy explains how SeeYouYou ("the App," "we," "us") handles your personal data when you use the SeeYouYou mobile application. We\'ve written this in plain language. If anything is unclear, email us at support@seeyouyou.app.',
  sections: [
    {
      n: '1', title: 'Who is responsible for your data',
      body: [
        { type: 'p', text: 'The data controller is AvAmeliA, operating as a sole proprietorship registered in Denmark. You can reach the controller at support@seeyouyou.app.' },
        { type: 'p', text: 'If you are in the EU/EEA, you have rights under the General Data Protection Regulation (GDPR). As a Danish controller, we are supervised by Datatilsynet (Denmark\'s data protection authority).' },
      ],
    },
    {
      n: '2', title: 'What data SeeYouYou processes',
      body: [
        { type: 'p', text: 'SeeYouYou is a real-time voice translation app. To do its job, it processes the following categories of data:' },

        { type: 'h', text: '2.1 Voice audio (during a translation session)' },
        { type: 'p', text: 'When you start a translation session, your device\'s microphone captures audio. That audio is sent to Google\'s AI services for translation and transcription.' },
        { type: 'ul', items: [
          'Stored on our servers? No. We do not store voice audio on any server we operate.',
          'Stored by Google? Voice audio is processed by Google for the duration of your session. Google\'s data handling is governed by Google\'s own terms (linked in §4).',
          'Retained on your device? No. Voice audio is held in memory only for the moments needed to process it, then discarded.',
        ]},

        { type: 'h', text: '2.2 Translated text (transcripts)' },
        { type: 'p', text: 'The text translations that appear on your screen during a session are not stored on our servers and not retained on your device beyond the active session view. When you end the session, transcripts are not persisted. We do not maintain a transcript history.' },

        { type: 'h', text: '2.3 Account information' },
        { type: 'p', text: 'You can sign in with either Google Sign-In or with an email address and password. In either case we receive your email address, a unique user identifier (UID), and your display name (if signed in via Google).' },
        { type: 'p', text: 'We use this to identify your account across sessions, grant you access to features tied to your account (e.g., credit balance), and communicate with you if necessary (rare; only for account or service issues). We do NOT use your account information for advertising, marketing, profiling, or sale to third parties.' },

        { type: 'h', text: '2.4 Acceptance records' },
        { type: 'p', text: 'When you accept this Privacy Policy and the Terms of Service, we record the version of the documents you accepted, the timestamp of acceptance, and the app version at the time. This information is stored locally on your device in app preferences. It does not leave your device. If you uninstall the App or clear app data, the record is removed and you will be asked to re-accept on next install.' },

        { type: 'h', text: '2.5 Device preferences' },
        { type: 'p', text: 'Your voice picker selection is stored locally on your device. Your default language pair selection is also stored locally for convenience. We do not transmit these preferences to our servers. (When you actually start a translation session, the language pair you use IS recorded as part of session metadata — see §2.7. The local preference described here is your default-pair convenience setting.)' },

        { type: 'h', text: '2.6 Crash reports and diagnostic data' },
        { type: 'p', text: 'If the app crashes or encounters an error, we may receive a crash report through Google\'s crash reporting service. These reports include: device model and OS version, app version, crash stack trace, anonymous device identifier. Crash reports do NOT include voice audio, transcripts, contact lists, photos, or any personally identifiable conversation content.' },

        { type: 'h', text: '2.7 Session metadata' },
        { type: 'p', text: 'When you use the App to translate a conversation, we record a small set of metadata about each session: start time and end time, the language pair you used, the number of credits consumed, and the reason the session ended (you stopped it, you ran out of credits, you lost connection, the App was closed, etc.).' },
        { type: 'p', text: 'This is NOT the content of your conversation. We do not record what was said, what was translated, or any audio. Conversation content is processed in real time and discarded — the §2.1 and §2.2 commitments are preserved without exception.' },
        { type: 'p', text: 'We use session metadata to show you usage history (so you can see sessions, total time, and credits consumed over time), bill credits accurately, and diagnose problems if a session ended unexpectedly. Session metadata is tied to your account and retained per the schedule in §6.' },

        { type: 'h', text: '2.8 What we do NOT collect' },
        { type: 'ul', items: [
          'We do not access your contacts.',
          'We do not access your photos or camera.',
          'We do not access your location.',
          'We do not read your SMS, calls, or other apps\' data.',
          'We do not track your behavior across other apps or websites.',
          'We do not sell your data.',
          'SeeYouYou does not use your conversations to train AI models. Google\'s handling of voice audio is governed by Google\'s own terms (see §4).',
        ]},
      ],
    },
    {
      n: '3', title: 'Why we process your data (legal basis under GDPR)',
      body: [
        { type: 'table', rows: [
          ['Data', 'Purpose', 'Legal basis'],
          ['Voice audio', 'Real-time translation', 'Performance of contract — Art. 6(1)(b)'],
          ['Translated text', 'Display translation result', 'Performance of contract'],
          ['Account info', 'Identify your account, grant access', 'Performance of contract'],
          ['Acceptance records', 'Prove valid consent under GDPR', 'Legal obligation — Art. 6(1)(c)'],
          ['Crash reports', 'Fix bugs, improve reliability', 'Legitimate interest — Art. 6(1)(f)'],
          ['Session metadata (§2.7)', 'Provide service, bill credits accurately', 'Performance of contract'],
          ['Credit balance and history', 'Operate the credit system you\'re using', 'Performance of contract'],
          ['Purchase records', 'Danish accounting law — Bogføringsloven §10 (7-year minimum)', 'Legal obligation — Art. 6(1)(c)'],
        ]},
        { type: 'p', text: 'For voice audio specifically: voice processing is necessary to provide the real-time translation service you\'ve requested. You control when audio is captured by tapping (or not tapping) the microphone button, and by managing microphone permission at the OS level.' },
      ],
    },
    {
      n: '4', title: 'Who we share data with (sub-processors)',
      body: [
        { type: 'p', text: 'SeeYouYou uses third-party services to operate. Each is listed below with what they receive and a link to their own privacy policy.' },

        { type: 'h', text: '4.1 Google Cloud' },
        { type: 'ul', items: [
          'What they get: account information (via Google\'s authentication service), crash reports (via Google\'s crash reporting service), voice audio (passed through to Google\'s AI services), session metadata and credit ledger storage in Google\'s cloud database.',
          'Why: authentication, AI translation, error reporting, session history, credit balance management.',
          'Where: Google\'s infrastructure (US and EU regions).',
          'Their policy: policies.google.com/privacy',
        ]},

        { type: 'h', text: '4.2 Google AI services' },
        { type: 'ul', items: [
          'What they get: voice audio during translation sessions.',
          'Why: speech-to-text, translation, text-to-speech.',
          'Their policy: policies.google.com/privacy',
        ]},

        { type: 'h', text: '4.3 Google\'s on-device language services' },
        { type: 'ul', items: [
          'What they get: nothing — language identification and on-device translation both run entirely on your device. No data leaves your device for these features.',
          'Why: detect which language is being spoken (to gate the microphone and improve accuracy), and cross-check translations to detect when input has drifted to a third language outside your selected pair.',
        ]},

        { type: 'h', text: '4.4 Google Play (purchase processing)' },
        { type: 'p', text: 'When you purchase credit packs or subscribe to SeeYouYou Monthly, Google Play handles the payment entirely. We never receive your card number, bank account details, or any other payment instrument. Google Play sends us a purchase token, the product you purchased, and the order timestamp.' },
        { type: 'p', text: 'We use this information to credit your account and to comply with Danish accounting-law record retention (see §6). Google Play is governed by Google\'s own terms and privacy policy.' },

        { type: 'h', text: '4.5 Google Workspace (operational email)' },
        { type: 'ul', items: [
          'What they get: any personal data you choose to include in correspondence sent to support@seeyouyou.app (name, account email, issue description, attachments).',
          'Why: operational support, GDPR-request processing, refund and withdrawal handling, dispute resolution.',
          'Where: Google\'s infrastructure.',
          'Retention: typically up to 24 months for general correspondence; longer for legal/regulatory matters where law requires.',
        ]},

        { type: 'p', text: 'We do NOT share your data with advertisers, data brokers, social networks, or analytics providers beyond what\'s listed above.' },
      ],
    },
    {
      n: '5', title: 'Where your data is stored',
      body: [
        { type: 'ul', items: [
          'On your device: language preferences, voice picker selection, acceptance records.',
          'In Google\'s authentication service: account info (email, display name, UID). Located in Google\'s US infrastructure.',
          'In Google\'s cloud database: session metadata, credit balance and history, purchase records, billing audit log entries. Located in Google\'s US infrastructure.',
          'In Google Workspace (operational email): support correspondence sent to or from support@seeyouyou.app.',
          'In transit: voice audio is transmitted to Google\'s AI services during the active translation session, then discarded.',
        ]},
        { type: 'p', text: 'If you are in the EU/EEA and the data is processed outside the EU/EEA, the transfer happens under Standard Contractual Clauses (SCCs) approved by the European Commission. Google publishes its SCCs at cloud.google.com/terms/sccs.' },
      ],
    },
    {
      n: '6', title: 'How long we keep your data',
      body: [
        { type: 'table', rows: [
          ['Data category', 'Retention period', 'Why'],
          ['Account info (UID, email, sign-in method, acceptance records)', 'Account lifetime + 30 days after deletion', 'Operational; identifies your account'],
          ['Voice audio', 'Not stored', 'Processed in real time, discarded immediately'],
          ['Translated text', 'Not stored', 'Never persisted'],
          ['Session metadata (§2.7)', 'Account lifetime + 30 days after deletion', 'Powers your Usage screen and billing accuracy'],
          ['Credit balance and history', 'Account lifetime + 30 days after deletion', 'Operational; tied to your account'],
          ['Purchase records (transaction tokens, product IDs, timestamps)', '7 years from transaction date', 'Required by Danish accounting law (Bogføringsloven §10)'],
          ['Billing audit log (credit grants, deductions, expirations)', '7 years from event', 'Same — accounting law'],
          ['Support correspondence', 'Up to 24 months; longer where law requires', 'Operational support audit trail'],
          ['Crash diagnostic data', '90 days', 'Per Google\'s crash reporting service default'],
        ]},
        { type: 'p', text: 'A note on device-local diagnostic logs. During active translation sessions, the App emits diagnostic information to Android\'s local system log buffer (logcat) for troubleshooting. This may include brief transcript snippets used to diagnose translation behavior. The logcat buffer is an in-memory ring on your device that cycles automatically; nothing is transmitted off-device, and the contents do not persist after the buffer cycles or after a device reboot.' },
        { type: 'callout', text: 'Footnote on account deletion requests. When you submit an account deletion request through the App\'s Profile screen ("Delete account"), the App records the request in our backend (a small audit document containing your account UID, the timestamp of the request, your account email, and a status field reading "pending"). This is operational data that lets us track and process deletion requests reliably. The audit document is part of your account information for retention purposes — it is removed alongside your other account data when the deletion is processed (within 30 days). It is not subject to the 7-year accounting-law retention that applies to purchase records and the billing audit log, because the deletion-request document is not a financial record. If you change your mind about a pending deletion request, contact support@seeyouyou.app with your account email; we can cancel the request before it is processed.' },
      ],
    },
    {
      n: '7', title: 'Your rights under GDPR',
      body: [
        { type: 'p', text: 'If you are an EU/EEA resident, you have the following rights:' },
        { type: 'ul', items: [
          'Right of access — ask us what personal data we have about you.',
          'Right to rectification — correct inaccurate data.',
          'Right to erasure ("right to be forgotten") — delete your data, subject to legal retention requirements. Some data cannot be deleted on request, even with a valid erasure claim, where Danish law requires us to retain it (purchase records and the billing audit log for 7 years from the transaction date per Bogføringsloven §10). All other data tied to your account is deleted; the accounting-law-required records remain in our books for the legal retention period and are then deleted automatically.',
          'Right to restrict processing — pause our use of your data.',
          'Right to data portability — receive your data in a machine-readable format. Your export includes account info, session metadata (§2.7), credit balance and history, and acceptance records.',
          'Right to object — object to processing based on legitimate interest.',
          'Right to withdraw consent — where processing is based on consent, withdraw it at any time (without affecting prior lawful processing).',
          'Right to lodge a complaint — with your local data protection authority. In Denmark, this is Datatilsynet (datatilsynet.dk).',
        ]},
        { type: 'p', text: 'To exercise any of these rights, email support@seeyouyou.app with the subject line "Privacy Request" and describe what you want. We respond within one month of receiving your request, in accordance with GDPR Article 12. Complex requests may require up to two additional months; we\'ll let you know if that\'s needed.' },
      ],
    },
    {
      n: '8', title: 'Security',
      body: [
        { type: 'p', text: 'We use industry-standard security measures:' },
        { type: 'ul', items: [
          'All network traffic to Google\'s servers is encrypted (TLS).',
          'Authentication uses Google\'s hardened identity infrastructure.',
          'We do not store passwords ourselves — Google handles authentication.',
          'We verify identity tokens server-side on every billing-related request.',
          'Payment processing isolation — Google Play handles all payment instruments; SeeYouYou never sees card or bank data; we never receive PCI-scope information.',
        ]},
        { type: 'p', text: 'No system is perfectly secure. In the event of a personal data breach, we will notify Datatilsynet within 72 hours of becoming aware of the breach (per GDPR Article 33), and we will notify affected users without undue delay if the breach is likely to result in a high risk to your rights and freedoms (per GDPR Article 34).' },
      ],
    },
    {
      n: '9', title: 'Children',
      body: [
        { type: 'p', text: 'SeeYouYou is not intended for children under 16. If you are under 16, do not use this app. If you are a parent and become aware that your child has provided us with personal data, contact us at support@seeyouyou.app and we will delete the account.' },
        { type: 'p', text: 'The minimum age of 16 aligns with GDPR Article 8 (default age of consent for processing children\'s personal data in EU/EEA jurisdictions, including Denmark).' },
      ],
    },
    {
      n: '10', title: 'Changes to this policy',
      body: [
        { type: 'p', text: 'We may update this Privacy Policy. When we do, we will bump the version number, update the effective date, and for material changes prompt you in-app to re-accept the new version before continuing to use the app.' },
        { type: 'p', text: 'Material changes that require re-acceptance include: changes to data processing categories; changes to data retention periods; changes to the sub-processor list; changes to your rights or our obligations; changes that meaningfully shift the privacy posture of the App.' },
        { type: 'p', text: 'Non-material changes (contact email updates, URL updates, typo fixes, clarifications that don\'t change meaning) do not require re-acceptance but will still be reflected in a version bump.' },
        { type: 'p', text: 'Your continued use of the app after the effective date of an update indicates acceptance, but for material changes we will require explicit re-acceptance through the in-app modal.' },
      ],
    },
    {
      n: '11', title: 'Contact',
      body: [
        { type: 'p', text: 'For privacy questions, requests, complaints, or feedback:' },
        { type: 'p', text: 'Email: support@seeyouyou.app — Subject line: Privacy Request (or whatever\'s relevant).' },
        { type: 'p', text: 'For more about the SeeYouYou app, visit seeyouyou.app.' },
      ],
    },
  ],
};

function PrivacyModal({ open, onClose }) {
  const scrollRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
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
    <div className="privacy-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="privacy-modal-card glass"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="privacy-modal-head">
          <div className="privacy-modal-titlewrap">
            <div className="privacy-modal-eyebrow">
              <span className="pm-dot"/>
              <span>Privacy Policy</span>
              <span className="pm-version">v{PRIVACY_DATA.version}</span>
            </div>
            <h2 id="privacy-modal-title" className="privacy-modal-title">How we handle your data</h2>
            <p className="privacy-modal-meta">
              Effective {PRIVACY_DATA.effective} · Controller: {PRIVACY_DATA.controller}
            </p>
          </div>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Close privacy policy">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </header>
        <div className="privacy-modal-scroll" ref={scrollRef}>
          <PrivacyContent onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

// Reusable content body — used by the modal AND by the standalone Privacy.html page.
function PrivacyContent({ standalone = false, onClose } = {}) {
  return (
    <div className="privacy-modal-body">
      <p className="privacy-intro">{PRIVACY_DATA.intro}</p>
      {PRIVACY_DATA.sections.map((s) => (
        <section key={s.n} className="privacy-section">
          <h3 className="privacy-section-title">
            <span className="privacy-section-num">{s.n}</span>
            {s.title}
          </h3>
          {s.body.map((b, i) => {
            if (b.type === 'p') return <p key={i} className="privacy-p">{b.text}</p>;
            if (b.type === 'h') return <h4 key={i} className="privacy-h">{b.text}</h4>;
            if (b.type === 'callout') return <div key={i} className="privacy-callout">{b.text}</div>;
            if (b.type === 'ul') return (
              <ul key={i} className="privacy-ul">
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
        <p>© 2026 AvAmeliA · SeeYouYou_Privacy_Policy_v{PRIVACY_DATA.version}</p>
        {!standalone && (
          <button className="privacy-modal-done" onClick={onClose}>Close</button>
        )}
      </footer>
    </div>
  );
}

window.PRIVACY_DATA = PRIVACY_DATA;
window.PrivacyContent = PrivacyContent;
window.PrivacyModal = PrivacyModal;
