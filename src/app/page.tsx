import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <Hero />
      <TickerBand />
      <AboutSection />
      <ExperienceSection />
      <OfferingsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
