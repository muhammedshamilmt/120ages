import { Hero } from "@/components/Hero";
import { TickerBand } from "@/components/TickerBand";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ExploreCollections } from "@/components/ExploreCollections";
import { NewArrivals } from "@/components/NewArrivals";
import { BestSellers } from "@/components/BestSellers";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BlogsSection } from "@/components/BlogsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <Hero />
      <TickerBand />
      <AboutSection />
      <ExploreCollections />
      <NewArrivals />
      <BestSellers />
      <ExperienceSection />
      <OfferingsSection />
      <ReviewsSection />
      <BlogsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
