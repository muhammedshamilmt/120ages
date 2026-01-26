import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Hero />
      <TickerBand />
      {/* Additional sections can be added here */}
    </main>
  );
}
