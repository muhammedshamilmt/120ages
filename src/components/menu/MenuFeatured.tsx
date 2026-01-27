import React from "react";

export function MenuFeatured() {
  return (
    <section className="py-32 bg-forest-green text-vintage-cream overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      {/* Intricate Decorative Borders */}
      <div className="absolute inset-8 border border-vintage-cream/10 pointer-events-none" />
      <div className="absolute inset-12 border-2 border-vintage-cream/5 pointer-events-none" />
      
      {/* Corner Ornaments */}
      <div className="absolute top-16 left-16 w-40 h-40 border-l-4 border-t-4 border-vintage-cream/30" />
      <div className="absolute top-16 right-16 w-40 h-40 border-r-4 border-t-4 border-vintage-cream/30" />
      <div className="absolute bottom-16 left-16 w-40 h-40 border-l-4 border-b-4 border-vintage-cream/30" />
      <div className="absolute bottom-16 right-16 w-40 h-40 border-r-4 border-b-4 border-vintage-cream/30" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-vintage-cream/40" />
          <div className="px-6 py-2 border-2 border-vintage-cream rounded-full font-ultra text-xs tracking-[0.3em] uppercase">
            EST. 2024 • CALM & NOURISH
          </div>
          <div className="w-12 h-[1px] bg-vintage-cream/40" />
        </div>
        
        <div className="relative mb-12">
          <h2 className="font-ultra text-7xl md:text-9xl leading-none uppercase tracking-tighter relative z-10">
            Book Now
          </h2>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full text-center opacity-10 blur-sm pointer-events-none">
            <span className="font-ultra text-7xl md:text-9xl uppercase tracking-tighter">Book Now</span>
          </div>
        </div>
        
        <div className="w-32 h-1 bg-vintage-cream mx-auto mb-12 shadow-[0_0_15px_rgba(255,234,211,0.5)]" />
        
        <p className="text-3xl md:text-4xl font-medium leading-tight text-vintage-cream/90 max-w-2xl mx-auto mb-16 italic font-serif">
          "Reserve your spot to enjoy fresh herbal teas and nourishing meals in our calm space."
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <button className="group relative bg-vintage-cream text-forest-green font-ultra text-3xl px-20 py-8 hover:bg-muted-brown hover:text-vintage-cream transition-all duration-700 uppercase tracking-[0.2em] shadow-[12px_12px_0px_0px_rgba(158,117,86,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 ring-1 ring-forest-green/20">
            Reserve
          </button>
          
          <div className="flex items-center gap-4 opacity-40">
            <span className="h-[1px] w-8 bg-vintage-cream" />
            <p className="text-xs tracking-[0.4em] uppercase font-ultra">
              Limited Tables Daily
            </p>
            <span className="h-[1px] w-8 bg-vintage-cream" />
          </div>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 rotate-90 opacity-10 font-ultra text-9xl tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none">
        Nourishment
      </div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 -rotate-90 opacity-10 font-ultra text-9xl tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none">
        Sanctuary
      </div>
    </section>
  );
}
