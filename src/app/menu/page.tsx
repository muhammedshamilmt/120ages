import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { MenuList } from "@/components/menu/MenuList";
import { MenuFeatured } from "@/components/menu/MenuFeatured";
import { MenuGallery } from "@/components/menu/MenuGallery";
import { TickerBand } from "@/components/TickerBand";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />
      <MenuHeader />
      <TickerBand />
      <MenuList />
      <MenuFeatured />
      <MenuGallery />
      <Footer />
    </main>
  );
}
