import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <Hero />
      <TickerBand />
      <AboutSection />
    </main>
  );
}
