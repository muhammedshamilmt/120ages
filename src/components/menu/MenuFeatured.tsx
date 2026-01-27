import React from "react";

export function MenuFeatured() {
  return (
    <section className="py-24 bg-forest-green text-vintage-cream overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-vintage-cream/20" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-vintage-cream/20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-6 py-2 border-2 border-vintage-cream rounded-full font-ultra text-sm tracking-[0.2em] uppercase mb-12">
          Reserve Your Moment
        </div>
        
        <h2 className="font-ultra text-6xl md:text-8xl leading-none uppercase tracking-tighter mb-8">
          Book Now
        </h2>
        
        <div className="w-24 h-1 bg-vintage-cream mx-auto mb-10" />
        
        <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-95 max-w-2xl mx-auto mb-12 italic">
          "Reserve your spot to enjoy fresh herbal teas and nourishing meals in our calm space."
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button className="group relative bg-vintage-cream text-forest-green font-ultra text-2xl px-16 py-6 hover:bg-muted-brown hover:text-vintage-cream transition-all duration-500 uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(158,117,86,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            Reserve
          </button>
          <p className="text-xs tracking-[0.3em] uppercase opacity-50 font-ultra">
            Limited Tables Available Daily
          </p>
        </div>
      </div>
      
      {/* Background Text Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="font-ultra text-[20vw] whitespace-nowrap uppercase">
          VINTAGE CALM VINTAGE CALM VINTAGE CALM
        </span>
      </div>
    </section>
  );
}
