const LAST_UPDATED = "28 May 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{title}</h2>
      <div className="space-y-3" style={{ color: "var(--muted)" }}>{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative leading-relaxed">
          <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--pa)" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyBody() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="ambient" style={{ width: 500, height: 300, background: "var(--pa)", top: -80, left: "50%", transform: "translateX(-50%)" }} />
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--pa)" }}>Legal</p>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl p-8 md:p-12 mb-8" style={{ border: "1px solid var(--border)" }}>
          <p className="leading-relaxed text-base" style={{ color: "var(--muted)" }}>
            SleepTwo (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and the choices you have.
            By using SleepTwo you agree to this policy.
          </p>
        </div>

        <Section title="1. Information We Collect">
          <P>We collect the following categories of information:</P>
          <UL items={[
            "Account information — your name, email address, and gender, provided during onboarding.",
            "Sleep data — sleep duration, sleep stages (REM, Deep, Core), heart rate, and heart rate variability (HRV) recorded via your Apple Watch.",
            "Compatibility data — your nightly sleep compatibility score computed from both partners' data.",
            "Pairing data — an anonymised pairing code that links your account with your partner.",
            "Usage data — app interactions, feature usage, and crash reports used to improve the app.",
            "Subscription data — purchase and billing information processed by Apple's App Store. We do not receive or store your payment card details.",
          ]} />
        </Section>

        <Section title="2. How We Use Your Information">
          <P>We use your information to:</P>
          <UL items={[
            "Provide and improve the SleepTwo app and its features.",
            "Compute nightly sleep compatibility scores for you and your partner.",
            "Send you the one-time verification code to confirm your email address.",
            "Process and manage your Together Pro subscription via RevenueCat.",
            "Sync your sleep data between devices using Apple CloudKit.",
            "Diagnose technical issues and monitor app performance.",
            "Respond to support requests you send us.",
          ]} />
          <P>We do not sell your personal data to third parties. We do not use your sleep data for advertising purposes.</P>
        </Section>

        <Section title="3. How We Store Your Data">
          <P>
            Your sleep and account data is stored in Apple CloudKit — Apple&rsquo;s encrypted cloud database.
            This means your data is subject to Apple&rsquo;s privacy and security standards, including end-to-end encryption where supported.
          </P>
          <P>
            Subscription and entitlement status is managed by RevenueCat. Their privacy policy is available at{" "}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--pa)" }}>
              revenuecat.com/privacy
            </a>.
          </P>
          <P>
            Email verification codes are generated on-device, sent via Brevo&rsquo;s transactional email service, and are never stored permanently. They expire after 10 minutes.
          </P>
        </Section>

        <Section title="4. Data Sharing">
          <P>We share limited data only with the service providers needed to operate the app:</P>
          <UL items={[
            "Apple CloudKit — for data storage and sync.",
            "RevenueCat — for subscription management and entitlement verification.",
            "Brevo — for sending email verification codes.",
          ]} />
          <P>
            Your sleep data is shared with your paired partner within the app so that compatibility scores can be computed.
            You can unpair from your partner at any time in Settings, which stops data sharing immediately.
          </P>
          <P>We may disclose information if required by law, court order, or to protect the rights and safety of our users.</P>
        </Section>

        <Section title="5. Health Data">
          <P>
            SleepTwo accesses sleep and heart rate data from Apple HealthKit solely to provide sleep tracking features within the app.
            We do not share HealthKit data with advertisers, data brokers, or any third party not required to operate the service.
            We do not use HealthKit data for marketing.
          </P>
          <P>You can revoke HealthKit permissions at any time in your iPhone Settings → Health → Apps → SleepTwo.</P>
        </Section>

        <Section title="6. Your Rights">
          <P>You have the right to:</P>
          <UL items={[
            "Access the personal data we hold about you.",
            "Request correction of inaccurate data.",
            "Request deletion of your account and associated data.",
            "Withdraw consent to data processing at any time.",
            "Data portability — receive your data in a machine-readable format.",
          ]} />
          <P>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@sleeptwo.app" className="underline underline-offset-2" style={{ color: "var(--pa)" }}>
              support@sleeptwo.app
            </a>. We will respond within 30 days.
          </P>
        </Section>

        <Section title="7. Data Retention">
          <P>
            We retain your data for as long as your account is active. If you delete your account, we delete your personal data from our systems
            within 30 days, except where we are required to retain it by law. Sleep data stored in your personal Apple CloudKit container is governed
            by Apple&rsquo;s data retention policies.
          </P>
        </Section>

        <Section title="8. Children's Privacy">
          <P>
            SleepTwo is not intended for users under 17 years of age. We do not knowingly collect personal information from children.
            If you believe a child has provided us with their data, please contact us and we will delete it promptly.
          </P>
        </Section>

        <Section title="9. Changes to This Policy">
          <P>
            We may update this privacy policy from time to time. We will notify you of material changes via an in-app notification or by email.
            Continued use of the app after changes constitutes acceptance of the updated policy.
          </P>
        </Section>

        <Section title="10. Contact Us">
          <P>If you have questions about this privacy policy or your data, please contact us:</P>
          <P>
            <strong style={{ color: "var(--text)" }}>Email:</strong>{" "}
            <a href="mailto:support@sleeptwo.app" className="underline underline-offset-2" style={{ color: "var(--pa)" }}>
              support@sleeptwo.app
            </a>
          </P>
        </Section>
      </div>
    </main>
  );
}
