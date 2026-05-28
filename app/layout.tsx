import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sleeptwo.app"),
  title: {
    default: "SleepTwo — Couples Sleep Tracking App",
    template: "%s — SleepTwo",
  },
  description:
    "SleepTwo gives couples a nightly sleep compatibility score, goodnight messages, and real sleep insights — all automatically from Apple Watch. No manual logging.",
  keywords: [
    "couples sleep tracking",
    "sleep compatibility score",
    "Apple Watch sleep app",
    "sleep app for couples",
    "relationship sleep tracker",
    "HRV couples",
    "sleep synchrony",
    "partner sleep tracking",
    "bedtime app couples",
    "SleepTwo",
  ],
  authors: [{ name: "SleepTwo", url: "https://sleeptwo.app" }],
  creator: "SleepTwo",
  publisher: "SleepTwo",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "SleepTwo — Couples Sleep Tracking App",
    description:
      "Nightly sleep compatibility scores for couples. Powered by Apple Watch. No manual logging.",
    type: "website",
    url: "https://sleeptwo.app",
    siteName: "SleepTwo",
  },
  twitter: {
    card: "summary_large_image",
    title: "SleepTwo — Couples Sleep Tracking App",
    description:
      "Nightly sleep compatibility scores for couples. Powered by Apple Watch.",
    site: "@sleeptwoapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sleeptwo.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
