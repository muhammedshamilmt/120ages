"use client";

import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] pt-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center z-0">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/df78dac5-7d8d-47bd-994b-90e733dd5e67/image-1769497755900.png?width=8000&height=8000&resize=contain"
          alt="Background Texture"
          fill
          className="object-contain scale-150 rotate-45 invert"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="font-ultra text-forest-green text-sm md:text-base tracking-[0.3em] uppercase mb-4 block animate-fade-in">
          Established 2026
        </span>
        <h1 className="text-[12vw] md:text-[8vw] font-ultra text-vintage-cream leading-[0.85] uppercase tracking-tighter mb-8">
          Our <br />
          <span className="text-forest-green">Story</span>
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-vintage-cream/80 font-medium leading-relaxed italic">
            "A journey of a thousand sips begins with a single leaf."
          </p>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-vintage-cream/20 flex justify-center">
        <div className="bg-[#1A1A1A] px-4 -translate-y-1/2 font-ultra text-vintage-cream text-xs tracking-widest uppercase">
          Crafting Moments
        </div>
      </div>
    </section>
  );
}
