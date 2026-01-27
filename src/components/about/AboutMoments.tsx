"use client";

import Image from "next/image";

export function AboutMoments() {
  const images = [
    "https://images.unsplash.com/photo-1544787210-2213d84ad2f2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556680262-9990363a3e6d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594631252845-29fc4586c552?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-ultra text-forest-green text-sm tracking-[0.3em] uppercase mb-4 block">
            The Gallery
          </span>
          <h2 className="text-5xl md:text-8xl font-ultra text-vintage-cream uppercase leading-[0.85] tracking-tighter">
            Shared <br />
            <span className="text-forest-green">Moments</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/5] overflow-hidden group border-2 border-vintage-cream/10 p-2 bg-vintage-cream">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Moment ${idx + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              {/* Polaroids effect caption */}
              <div className="pt-4 pb-2 text-center">
                <p className="font-ultra text-[10px] text-muted-brown/60 uppercase tracking-widest">
                  Captured Archive № {2024 + idx}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
