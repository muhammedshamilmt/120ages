"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-vintage-cream">
      {/* Main Content Area */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-10">
           <div className="absolute inset-0 border-[40px] border-vintage-red rounded-full animate-pulse" />
           <div className="absolute inset-20 border-[20px] border-vintage-red rounded-full" />
        </div>
        
        {/* Central Graphic Placeholder */}
        <div className="relative z-10 text-center">
            <div className="w-64 h-64 md:w-96 md:h-96 border-4 border-vintage-red rounded-full flex items-center justify-center relative bg-vintage-cream shadow-[20px_20px_0px_0px_rgba(158,117,86,0.1)]">
              <span className="font-ultra text-8xl md:text-[12rem] text-vintage-red select-none">V</span>
              <div className="absolute -top-4 -right-4 bg-forest-green text-vintage-cream p-4 rotate-12 font-ultra text-xl border-2 border-vintage-cream">
                EST. 2026
              </div>
            </div>
        </div>
      </div>

      {/* Main Title at the Bottom */}
      <div className="relative w-full p-6 md:p-12 z-20">
        <div className="flex flex-col items-center relative">
          <h1 className="text-[13vw] md:text-[11vw] lg:text-[11vw] xl:text-[10vw] leading-[0.85] font-ultra text-vintage-red uppercase tracking-[-0.05em] text-center ultra-regular drop-shadow-sm">
            Sip Healthy<br />
            <span className="ml-[5vw] lg:ml-[3vw]">Live Longer</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
