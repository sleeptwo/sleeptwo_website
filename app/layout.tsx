// Root layout — minimal shell. Real layout lives in app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
