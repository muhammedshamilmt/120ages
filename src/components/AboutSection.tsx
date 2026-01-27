"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-[#1A1A1A] text-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24">
      {/* Top Header Layout */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-ultra uppercase leading-[0.9] tracking-tighter">
            Welcome to<br />
            <span className="text-muted-brown">120 Ages</span>
          </h2>
        </div>
        <div className="lg:max-w-md lg:text-right self-end lg:mb-4">
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-90 italic">
            "A peaceful spot where herbal teas and nourishing foods come together to refresh your body and soul."
          </p>
          <div className="mt-4 flex items-center lg:justify-end gap-2 text-muted-brown font-ultra tracking-widest">
            <div className="h-px w-8 bg-muted-brown hidden lg:block" />
            <span>EST. 2026</span>
          </div>
        </div>
      </div>

      {/* Large Featured Image with Layout from Reference */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border-4 border-vintage-cream/20 overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Vintage Cafe Interior"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-vintage-cream/10 pt-16">
        <div className="flex flex-col gap-2">
          <span className="text-6xl md:text-7xl font-ultra text-muted-brown">150+</span>
          <span className="text-sm md:text-base uppercase tracking-[0.3em] font-bold opacity-70">Herbal Blends</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-6xl md:text-7xl font-ultra text-muted-brown">15</span>
          <span className="text-sm md:text-base uppercase tracking-[0.3em] font-bold opacity-70">Master Curators</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] font-bold opacity-70 mb-4">Community Choice</span>
          <span className="text-4xl md:text-5xl font-ultra uppercase leading-none">Loved<br />Locally</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-forest-green" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-4xl md:text-5xl font-ultra uppercase">5 Stars</span>
          <span className="text-sm uppercase tracking-[0.3em] font-bold opacity-70">Review Average</span>
        </div>
      </div>
    </section>
  );
}
