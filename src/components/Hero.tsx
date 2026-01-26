import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-20 pb-0 overflow-hidden bg-[#FFEAD3]">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#8B0000]/10" />
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center z-10">
        <span className="text-[#8B0000] font-medium tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
          Established 1984
        </span>
        
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-[#D4A373]/20 blur-3xl rounded-full animate-pulse" />
          <h2 className="ultra-regular text-4xl md:text-6xl text-[#2D241E] relative">
            TIMELESS PIECES
          </h2>
        </div>
        
        <p className="max-w-xl text-lg text-[#7F6D5F] leading-relaxed mb-10">
          Curating the finest vintage collection for those who appreciate 
          the soul of the past and the style of the present.
        </p>
        
        <button className="px-10 py-4 bg-[#8B0000] text-[#FFEAD3] ultra-regular text-lg hover:bg-[#2D241E] transition-all duration-300 transform hover:scale-105 shadow-xl">
          SHOP THE ARCHIVE
        </button>
      </div>

      {/* Main Title at Bottom */}
      <div className="w-full text-center py-12 px-4 z-10">
        <h1 className="ultra-regular text-7xl md:text-[12rem] leading-none text-[#8B0000] opacity-90 tracking-tighter hover:tracking-normal transition-all duration-700 cursor-default select-none">
          VINTAGE
        </h1>
      </div>

      {/* Marquee/Band Div at the very bottom */}
      <div className="w-full bg-[#8B0000] py-4 border-t-2 border-b-2 border-[#2D241E] overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_20s_linear_infinite] items-center gap-12 text-[#FFEAD3] ultra-regular text-xl uppercase">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Great in Style</span>
              <span className="text-2xl">✦</span>
              <span>Move Freely</span>
              <span className="text-2xl">✦</span>
              <span>Look Fierce</span>
              <span className="text-2xl">✦</span>
              <span>Power the Hustle</span>
              <span className="text-2xl">✦</span>
              <span>Confidence</span>
              <span className="text-2xl">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
