import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="SleepTwo" width={28} height={28} className="rounded-lg" />
            <span className="font-semibold text-base" style={{ color: "var(--text)" }}>SleepTwo</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@sleeptwo.app" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © 2026 SleepTwo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
