import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — SleepTwo",
  description:
    "SleepTwo's terms of service. Read the terms governing your use of the SleepTwo couples sleep tracking app.",
  alternates: { canonical: "https://sleeptwo.app/terms" },
};

const LAST_UPDATED = "28 May 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div className="space-y-3" style={{ color: "var(--muted)" }}>
        {children}
      </div>
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
          <span
            className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--pb)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <div className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div
            className="ambient"
            style={{
              width: 500,
              height: 300,
              background: "var(--pb)",
              top: -80,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div className="max-w-3xl mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--pb)" }}
            >
              Legal
            </p>
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "var(--text)" }}
            >
              Terms of Service
            </h1>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          <div
            className="glass rounded-3xl p-8 md:p-12 mb-8"
            style={{ border: "1px solid var(--border)" }}
          >
            <p className="leading-relaxed text-base" style={{ color: "var(--muted)" }}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              SleepTwo mobile application and any related services (collectively,
              the &ldquo;Service&rdquo;) provided by SleepTwo (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;). By downloading or using SleepTwo you agree to these
              Terms. If you do not agree, please do not use the app.
            </p>
          </div>

          <Section title="1. Eligibility">
            <P>
              You must be at least 17 years old to use SleepTwo. By using the
              app, you confirm that you meet this requirement. If you are using
              the app on behalf of another person, you confirm you have the
              authority to accept these Terms on their behalf.
            </P>
          </Section>

          <Section title="2. Your Account">
            <P>
              To use SleepTwo you provide your name, email address, and gender
              during onboarding. You are responsible for keeping your account
              information accurate and for any activity that occurs under your
              account.
            </P>
            <P>
              You may pair your account with one partner at a time. Pairing
              allows both accounts to share sleep data for compatibility scoring.
              You can unpair at any time in Settings.
            </P>
          </Section>

          <Section title="3. Together Pro Subscription">
            <P>
              SleepTwo offers a paid subscription called Together Pro, which
              unlocks premium features including full score history, advanced
              sleep insights, and HRV tracking.
            </P>
            <UL
              items={[
                "Together Pro costs $6.99 per month and covers both partners in a couple under one subscription.",
                "Subscriptions are billed monthly through the Apple App Store.",
                "Your subscription automatically renews unless cancelled at least 24 hours before the end of the current billing period.",
                "You can manage and cancel your subscription at any time in your Apple ID settings.",
                "We do not offer refunds for partial subscription periods, except as required by applicable law.",
                "Prices may change. We will notify you of price changes in advance.",
              ]}
            />
          </Section>

          <Section title="4. Acceptable Use">
            <P>You agree not to:</P>
            <UL
              items={[
                "Use SleepTwo for any unlawful purpose or in violation of these Terms.",
                "Attempt to access another user's data without their consent.",
                "Reverse engineer, decompile, or disassemble any part of the app.",
                "Use the app in any way that could damage, disable, or impair our servers or networks.",
                "Scrape, harvest, or extract data from the app by automated means.",
                "Use SleepTwo as a substitute for professional medical advice, diagnosis, or treatment.",
              ]}
            />
          </Section>

          <Section title="5. Health Disclaimer">
            <P>
              SleepTwo is a consumer wellness application, not a medical device.
              The sleep metrics, HRV data, and compatibility scores it provides
              are for informational and motivational purposes only. They are not
              intended to diagnose, treat, cure, or prevent any medical
              condition.
            </P>
            <P>
              If you have concerns about your sleep health or any health
              condition, please consult a qualified healthcare professional.
              Never disregard professional medical advice or delay seeking it
              because of information provided by SleepTwo.
            </P>
          </Section>

          <Section title="6. Intellectual Property">
            <P>
              All content, design, code, trademarks, and materials in SleepTwo
              are owned by or licensed to us and are protected by applicable
              intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable licence to use the app for your
              personal, non-commercial use.
            </P>
            <P>
              You retain ownership of your personal data. By using the app, you
              grant us a limited licence to process your data solely to provide
              the Service, as described in our Privacy Policy.
            </P>
          </Section>

          <Section title="7. Third-Party Services">
            <P>
              SleepTwo integrates with third-party services including Apple
              HealthKit, Apple CloudKit, RevenueCat, and Brevo. Your use of
              these integrations is also subject to those providers&rsquo; terms and
              privacy policies. We are not responsible for the practices of
              third-party services.
            </P>
          </Section>

          <Section title="8. Limitation of Liability">
            <P>
              To the fullest extent permitted by law, SleepTwo and its founders,
              employees, and affiliates are not liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of or inability to use the Service.
            </P>
            <P>
              Our total liability to you for any claim arising from these Terms
              or your use of the Service shall not exceed the amount you paid us
              in the twelve months preceding the claim.
            </P>
          </Section>

          <Section title="9. Warranty Disclaimer">
            <P>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, either express or implied, including but
              not limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </P>
            <P>
              We do not warrant that the Service will be uninterrupted,
              error-free, or that any defects will be corrected.
            </P>
          </Section>

          <Section title="10. Termination">
            <P>
              We reserve the right to suspend or terminate your access to
              SleepTwo at our discretion if you violate these Terms or engage in
              conduct harmful to us, other users, or third parties.
            </P>
            <P>
              You may stop using the app at any time. Deleting the app does not
              automatically cancel an active subscription — you must cancel
              through your Apple ID settings.
            </P>
          </Section>

          <Section title="11. Changes to These Terms">
            <P>
              We may update these Terms from time to time. We will notify you of
              material changes via an in-app notification or email. Your
              continued use of the app after changes take effect constitutes
              acceptance of the revised Terms.
            </P>
          </Section>

          <Section title="12. Governing Law">
            <P>
              These Terms are governed by and construed in accordance with the
              laws of Hong Kong SAR. Any disputes arising from these Terms shall
              be subject to the exclusive jurisdiction of the courts of Hong
              Kong SAR.
            </P>
          </Section>

          <Section title="13. Contact Us">
            <P>
              If you have questions about these Terms, please contact us:
            </P>
            <P>
              <strong style={{ color: "var(--text)" }}>Email:</strong>{" "}
              <a
                href="mailto:support@sleeptwo.app"
                className="underline underline-offset-2"
                style={{ color: "var(--pb)" }}
              >
                support@sleeptwo.app
              </a>
            </P>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
