export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-vintage-cream px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-ultra uppercase tracking-tighter mb-6">Orchids</h3>
            <p className="max-w-sm text-vintage-cream/60 font-medium leading-relaxed uppercase text-sm tracking-wide">
              Crafting timeless experiences through curated vintage aesthetics and modern craftsmanship. Join our journey into the soul of design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-ultra uppercase text-xs mb-6 tracking-[0.2em] text-vintage-red">Explore</h4>
            <ul className="space-y-4 font-ultra uppercase text-sm tracking-widest">
              <li><a href="#" className="hover:text-vintage-red transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Archives</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-ultra uppercase text-xs mb-6 tracking-[0.2em] text-vintage-red">Connect</h4>
            <ul className="space-y-4 font-ultra uppercase text-sm tracking-widest">
              <li><a href="#" className="hover:text-vintage-red transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-vintage-red transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Branding Section */}
        <div className="border-t border-vintage-cream/10 pt-16 flex flex-col items-center">
            <div className="relative w-full text-center overflow-hidden">
              {/* Massive 120 AGES Background Text */}
              <h2 className="text-[12vw] md:text-[15vw] font-ultra uppercase leading-none tracking-tighter text-vintage-cream selection:bg-vintage-red opacity-100 select-none whitespace-nowrap">
                120 Ages
              </h2>
            
            {/* Floating Details */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 gap-4">
              <p className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40">
                © {currentYear} ORCHIDS STUDIO • ALL RIGHTS RESERVED
              </p>
              <div className="flex gap-4">
                <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40">LON</span>
                <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40">NYC</span>
                <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40">PAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
