import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { AboutMoments } from "@/components/about/AboutMoments";
import { AboutPlace } from "@/components/about/AboutPlace";
import { TickerBand } from "@/components/TickerBand";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <AboutHero />
      <TickerBand />
      <AboutTestimonials />
      <AboutMoments />
      <AboutPlace />
      <Footer />
    </main>
  );
}
