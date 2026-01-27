import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfferingsSection } from "@/components/OfferingsSection";
import { OurSpace } from "@/components/wellness/OurSpace";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/wellness/ContactSection";
import { TickerBand } from "@/components/TickerBand";

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      
      {/* Hero-like intro for Wellness page */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#1A1A1A] text-vintage-cream">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-ultra uppercase tracking-tighter leading-[0.85] mb-8">
            Nourish <br /> Your <span className="text-forest-green">Being</span>
          </h1>
          <p className="text-xl md:text-3xl font-ultra uppercase tracking-widest text-vintage-cream/60">
            Wellness / Rituals / Community
          </p>
        </div>
      </section>

      <TickerBand />

      {/* 1. Offering Section */}
      {/* <OfferingsSection /> */}

      {/* 2. Our Space Gallery */}
      <OurSpace />

      {/* 3. About Component from Landing Page */}
      <AboutSection />

      {/* 4. Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
