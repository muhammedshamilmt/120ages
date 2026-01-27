import React from "react";
import Image from "next/image";

export function MenuFeatured() {
  return (
    <section className="py-24 bg-forest-green text-vintage-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544787210-2211d44b565a?q=80&w=1000&auto=format&fit=crop"
              alt="A vibrant wooden tray holding a steaming cup of herbal tea, a fresh green smoothie, and a colorful quinoa salad"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-muted-brown/10 mix-blend-multiply" />
          </div>
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-vintage-cream/30 rounded-full font-ultra text-xs tracking-widest uppercase">
              Exclusive Experience
            </div>
            <h2 className="font-ultra text-5xl md:text-7xl leading-tight uppercase tracking-tight">
              Book Now
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
              Reserve your spot to enjoy fresh herbal teas and nourishing meals in our calm space.
            </p>
            <div className="pt-4">
              <button className="bg-vintage-cream text-forest-green font-ultra text-lg px-10 py-4 hover:bg-muted-brown hover:text-vintage-cream transition-all duration-300 uppercase tracking-widest">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
