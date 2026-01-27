import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <Hero />
      <TickerBand />
      <AboutSection />
      <ExperienceSection />
      <TestimonialSection />
    </main>
  );
}
