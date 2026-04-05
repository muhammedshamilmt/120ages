"use client";

const reviews = [
  {
    name: "Sarah K.",
    rating: 5,
    text: "The Classic Herbal Blend has become my morning ritual. Absolutely divine — earthy, calming, and full of character.",
    product: "Classic Herbal Blend",
    date: "March 2026",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Wild Mountain Honey is unlike anything I've tasted. You can feel the difference of something truly unprocessed.",
    product: "Wild Mountain Honey",
    date: "February 2026",
  },
  {
    name: "Priya N.",
    rating: 5,
    text: "The Artisanal Stone Mug is a work of art. Every morning feels like a ceremony now. Worth every penny.",
    product: "Artisanal Stone Mug",
    date: "January 2026",
  },
  {
    name: "Leo B.",
    rating: 4,
    text: "Lavender bundle smells incredible. My whole apartment feels like a countryside retreat. Will reorder.",
    product: "Dried Lavender Bundle",
    date: "March 2026",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-[#1A1A1A] px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-ultra text-[10px] tracking-[0.4em] uppercase text-forest-green block mb-4">
              What They Say
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-vintage-cream">
              Reviews
            </h2>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="font-ultra text-5xl text-vintage-cream">5.0</span>
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-forest-green text-lg">★</span>
                ))}
              </div>
              <span className="font-ultra text-[9px] tracking-widest uppercase text-vintage-cream/40">
                {reviews.length} Reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="border border-vintage-cream/10 p-6 md:p-8 hover:border-forest-green/40 transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <span key={s} className="text-forest-green text-sm">★</span>
                ))}
              </div>
              <p className="font-ultra text-lg md:text-xl uppercase text-vintage-cream leading-snug mb-6">
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center justify-between border-t border-vintage-cream/10 pt-4">
                <div>
                  <span className="font-ultra text-sm uppercase text-vintage-cream block">{r.name}</span>
                  <span className="font-ultra text-[9px] tracking-widest uppercase text-forest-green">{r.product}</span>
                </div>
                <span className="font-ultra text-[9px] tracking-widest uppercase text-vintage-cream/30">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
