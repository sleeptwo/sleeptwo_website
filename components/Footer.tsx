export default function Footer() {
  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg grad-bg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M4 10C4 7.2 6.2 5 9 5s5 2.2 5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="6" cy="12" r="1.5" fill="white" opacity="0.7"/>
                <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.7"/>
              </svg>
            </div>
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
