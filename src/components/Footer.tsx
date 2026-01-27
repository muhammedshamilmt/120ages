export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-vintage-cream px-6 py-16 md:px-12 md:py-24 lg:px-24 border-t border-vintage-cream/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
            <div>
              <h3 className="text-4xl font-ultra uppercase tracking-tighter mb-4 text-vintage-cream">Visit us! 120 Ages</h3>
              <p className="text-xl font-ultra text-muted-brown uppercase mb-12 tracking-wide">
                Sip Healthy. Live Longer.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-ultra uppercase text-xs tracking-[0.3em] text-vintage-cream/40 mb-2">Email</h4>
                  <a href="mailto:hello@120ages.com" className="text-2xl font-ultra uppercase hover:text-muted-brown transition-colors block">
                    hello@120ages.com
                  </a>
                </div>
                <div>
                  <h4 className="font-ultra uppercase text-xs tracking-[0.3em] text-vintage-cream/40 mb-2">Phone</h4>
                  <a href="tel:+919020480880" className="text-2xl font-ultra uppercase hover:text-muted-brown transition-colors block">
                    +91-9020480880
                  </a>
                </div>
              </div>
            </div>
  
            {/* Simple Contact Form */}
            <div className="flex flex-col justify-end">
              <div className="space-y-6 max-w-md w-full ml-auto">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b-2 border-vintage-cream/20 py-4 font-ultra uppercase text-lg focus:outline-none focus:border-muted-brown transition-colors placeholder:text-vintage-cream/20"
                  />
                </div>
                <button className="w-full md:w-auto bg-forest-green text-vintage-cream px-12 py-5 font-ultra uppercase text-sm tracking-[0.2em] hover:bg-muted-brown transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Branding Section */}
          <div className="pt-16 flex flex-col items-center">
              <div className="relative w-full text-center overflow-hidden">
                {/* Massive 120 AGES Background Text */}
                <h2 className="text-[12vw] md:text-[15vw] font-ultra uppercase leading-none tracking-tighter text-vintage-cream selection:bg-forest-green opacity-100 select-none whitespace-nowrap">
                  120 Ages
                </h2>
              
              {/* Floating Details */}
              <div className="flex flex-col md:flex-row justify-between items-center w-full mt-12 gap-4 border-t border-vintage-cream/10 pt-8">
                <p className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40">
                  © {currentYear} 120 AGES • ALL RIGHTS RESERVED
                </p>
                <div className="flex gap-8">
                  <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40 cursor-default hover:text-forest-green transition-colors">LON</span>
                  <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40 cursor-default hover:text-forest-green transition-colors">NYC</span>
                  <span className="font-ultra text-[10px] uppercase tracking-[0.4em] text-vintage-cream/40 cursor-default hover:text-forest-green transition-colors">PAR</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
