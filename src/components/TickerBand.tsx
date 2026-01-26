"use client";

export function TickerBand() {
  return (
    <div className="w-full bg-vintage-red py-6 border-y-4 border-vintage-red/30 overflow-hidden relative z-20 shadow-2xl">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4 space-x-12 text-vintage-cream uppercase font-ultra text-2xl tracking-[0.2em]">
            <span className="ultra-regular">Eat in Style</span>
            <span className="text-3xl">✦</span>
            <span className="ultra-regular">Move Freely</span>
            <span className="text-3xl">✦</span>
            <span className="ultra-regular">Look Fierce</span>
            <span className="text-3xl">✦</span>
            <span className="ultra-regular">Power the Hustle</span>
            <span className="text-3xl">✦</span>
            <span className="ultra-regular">Confidence</span>
            <span className="text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
