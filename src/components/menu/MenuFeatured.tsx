import React from "react";

export function MenuFeatured() {
  return (
    // <section className="py-32 bg-forest-green text-vintage-cream overflow-hidden relative">
    //   {/* Texture Overlay */}
    //   <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
    //   {/* Intricate Decorative Borders */}
    //   <div className="absolute inset-8 border border-vintage-cream/10 pointer-events-none" />
    //   <div className="absolute inset-12 border-2 border-vintage-cream/5 pointer-events-none" />
      
    //   {/* Corner Ornaments */}
    //   <div className="absolute top-16 left-16 w-40 h-40 border-l-4 border-t-4 border-vintage-cream/30" />
    //   <div className="absolute top-16 right-16 w-40 h-40 border-r-4 border-t-4 border-vintage-cream/30" />
    //   <div className="absolute bottom-16 left-16 w-40 h-40 border-l-4 border-b-4 border-vintage-cream/30" />
    //   <div className="absolute bottom-16 right-16 w-40 h-40 border-r-4 border-b-4 border-vintage-cream/30" />
      
    //   <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
    //     <div className="inline-flex items-center gap-4 mb-16">
    //       <div className="w-12 h-[1px] bg-vintage-cream/40" />
    //       <div className="px-6 py-2 border-2 border-vintage-cream rounded-full font-ultra text-xs tracking-[0.3em] uppercase">
    //         EST. 2024 • CALM & NOURISH
    //       </div>
    //       <div className="w-12 h-[1px] bg-vintage-cream/40" />
    //     </div>
        
    //     <div className="relative mb-12">
    //       <h2 className="font-ultra text-7xl md:text-9xl leading-none uppercase tracking-tighter relative z-10">
    //         Book Now
    //       </h2>
    //       <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full text-center opacity-10 blur-sm pointer-events-none">
    //         <span className="font-ultra text-7xl md:text-9xl uppercase tracking-tighter">Book Now</span>
    //       </div>
    //     </div>
        
    //     <div className="w-32 h-1 bg-vintage-cream mx-auto mb-12 shadow-[0_0_15px_rgba(255,234,211,0.5)]" />
        
    //     <p className="text-3xl md:text-4xl font-medium leading-tight text-vintage-cream/90 max-w-2xl mx-auto mb-16 italic font-serif">
    //       "Reserve your spot to enjoy fresh herbal teas and nourishing meals in our calm space."
    //     </p>
        
    //     <div className="flex flex-col items-center gap-8">
    //       <button className="group relative bg-vintage-cream text-forest-green font-ultra text-3xl px-20 py-8 hover:bg-muted-brown hover:text-vintage-cream transition-all duration-700 uppercase tracking-[0.2em] shadow-[12px_12px_0px_0px_rgba(158,117,86,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 ring-1 ring-forest-green/20">
    //         Reserve
    //       </button>
          
    //       <div className="flex items-center gap-4 opacity-40">
    //         <span className="h-[1px] w-8 bg-vintage-cream" />
    //         <p className="text-xs tracking-[0.4em] uppercase font-ultra">
    //           Limited Tables Daily
    //         </p>
    //         <span className="h-[1px] w-8 bg-vintage-cream" />
    //       </div>
    //     </div>
    //   </div>
      
    //   {/* Floating Decorative Elements */}
    //   <div className="absolute top-1/2 -left-20 -translate-y-1/2 rotate-90 opacity-10 font-ultra text-9xl tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none">
    //     Nourishment
    //   </div>
    //   <div className="absolute top-1/2 -right-20 -translate-y-1/2 -rotate-90 opacity-10 font-ultra text-9xl tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none">
    //     Sanctuary
    //   </div>
    // </section>



    <section className="bg-vintage-cream pb-32 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative border-4 border-muted-brown p-12 md:p-24 overflow-hidden rounded-[40px]">
            {/* Vintage Textures & Ornaments */}
            <div className="absolute top-0 left-0 w-24 h-24 border-r-2 border-b-2 border-muted-brown/20 rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-l-2 border-t-2 border-muted-brown/20 rounded-tl-3xl" />
            
            <div className="relative z-10 text-center">
              <span className="font-ultra text-xs md:text-sm tracking-[0.5em] text-forest-green uppercase mb-8 block">
                Experience the longevity
              </span>
              
              <h2 className="font-ultra text-7xl md:text-[120px] lg:text-[150px] leading-[0.85] text-muted-brown uppercase tracking-tighter mb-12 relative inline-block">
                Book Now
                <span className="absolute -inset-1 text-muted-brown/10 blur-[2px] -z-10 translate-x-2 translate-y-2">Book Now</span>
              </h2>
              
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-xl md:text-2xl font-ultra text-muted-brown/80 uppercase tracking-tight leading-snug">
                  Join us at our sanctuary for a curated wellness experience. Limited tables available daily for the 120 Ages ritual.
                </p>
              </div>
              
              <button className="group relative px-12 py-6 bg-forest-green text-vintage-cream font-ultra text-lg uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[8px_8px_0px_0px_rgba(158,117,86,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                Reserve Your Table
              </button>
            </div>

            {/* Floating Decorative Elements */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] font-ultra text-muted-brown/20 text-4xl uppercase tracking-[0.5em]">
              Nourishment
            </div>
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] font-ultra text-muted-brown/20 text-4xl uppercase tracking-[0.5em] rotate-180">
              Sanctuary
            </div>
          </div>
        </div>
      </section>
  );
}
