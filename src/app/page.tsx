import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <Hero />
      <TickerBand />
      {/* Additional sections can be added here */}
    </main>
  );
}
