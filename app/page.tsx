import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ScoreDemo from "@/components/ScoreDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ScoreDemo />
      <Pricing />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
