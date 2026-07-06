"use client";

export function TickerBand() {
  return (
    <div className="w-full bg-forest-green py-1 border-y-4 border-forest-green/30 overflow-hidden relative z-20 shadow-2xl">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4 space-x-12 text-vintage-cream uppercase font-ultra  text-2xl tracking-[0.2em]">
            <span >Eat in Style</span>
            <span className="text-3xl">✦</span>
            <span >Move Freely</span>
            <span className="text-3xl">✦</span>
            <span >Look Fierce</span>
            <span className="text-3xl">✦</span>
            <span >Power the Hustle</span>
            <span className="text-3xl">✦</span>
            <span >Confidence</span>
            <span className="text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
