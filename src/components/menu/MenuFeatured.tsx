import React from "react";

export function MenuFeatured() {
  return (
    <section className="py-40 bg-forest-green text-vintage-cream overflow-hidden relative">
      {/* Refined Texture & Depth */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Architectural Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vintage-cream/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vintage-cream/30 to-transparent" />
      
      {/* Decorative Stamp Element */}
      <div className="absolute top-12 left-12 md:left-24 w-24 h-24 border border-vintage-cream/20 rounded-full flex items-center justify-center rotate-12 opacity-40">
        <div className="text-[8px] font-ultra uppercase tracking-[0.3em] text-center leading-tight">
          Original<br />Sanctuary<br />Quality
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top Label */}
          <div className="flex items-center gap-6 mb-12">
            <span className="h-[2px] w-12 bg-vintage-cream/20" />
            <span className="font-ultra text-sm tracking-[0.5em] uppercase text-vintage-cream/60">
              The Experience
            </span>
            <span className="h-[2px] w-12 bg-vintage-cream/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Side: Typography */}
            <div className="text-center lg:text-left space-y-8">
              <div className="relative inline-block">
                <h2 className="font-ultra text-8xl md:text-9xl lg:text-[10rem] leading-[0.8] uppercase tracking-tighter mb-4 text-vintage-cream">
                  Book<br />
                  <span className="text-transparent stroke-1 stroke-vintage-cream/40" style={{ WebkitTextStroke: "1px rgba(255,234,211,0.4)" }}>Now</span>
                </h2>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
                  <span className="font-ultra text-xs tracking-[0.4em] uppercase opacity-30">Selection • Excellence</span>
                </div>
              </div>
              
              <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-2xl md:text-3xl font-serif italic text-vintage-cream/90 leading-snug">
                  "A curated space for the mindful, where every seat offers a moment of profound serenity."
                </p>
              </div>
            </div>

            {/* Right Side: Action & Details */}
            <div className="flex flex-col items-center lg:items-end space-y-12">
              <div className="relative group">
                {/* Decorative Button Shadow/Frame */}
                <div className="absolute inset-0 border-2 border-vintage-cream/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500" />
                
                <button className="relative bg-vintage-cream text-forest-green font-ultra text-4xl px-16 py-10 hover:bg-muted-brown hover:text-vintage-cream transition-colors duration-500 uppercase tracking-widest overflow-hidden">
                  <span className="relative z-10">Reserve</span>
                  <div className="absolute inset-0 bg-muted-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>

              <div className="space-y-6 text-center lg:text-right">
                <div className="flex flex-col gap-2">
                  <span className="font-ultra text-xs uppercase tracking-[0.3em] text-vintage-cream/50">Service Times</span>
                  <p className="font-serif italic text-xl">Daily: 08:00 AM — 10:00 PM</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="font-ultra text-xs uppercase tracking-[0.3em] text-vintage-cream/50">Availability</span>
                  <p className="font-serif italic text-xl">Limited Seating for True Calm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Graphic Elements */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border-[40px] border-vintage-cream/5 rounded-full pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-vintage-cream/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
