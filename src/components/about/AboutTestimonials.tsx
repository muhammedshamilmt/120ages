"use client";

export function AboutTestimonials() {
  const testimonials = [
    {
      quote: "The atmosphere here is unlike any other. It truly feels like stepping back in time to a simpler, more mindful era.",
      author: "Eleanor Rigby",
      role: "Regular Patron"
    },
    {
      quote: "Their herbal blends are masterfully crafted. You can taste the quality and the care in every single cup.",
      author: "Arthur Dent",
      role: "Tea Enthusiast"
    }
  ];

  return (
    <section className="py-24 bg-muted-brown text-vintage-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="font-ultra text-forest-green text-sm tracking-[0.3em] uppercase mb-4">
            Voice of the People
          </span>
          <h2 className="text-5xl md:text-7xl font-ultra text-center uppercase leading-none">
            Kind <span className="text-vintage-cream/30 italic">Words</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative p-10 border border-vintage-cream/20 flex flex-col justify-between group hover:bg-vintage-cream/5 transition-colors duration-500">
              <div className="absolute -top-4 -left-4 text-6xl font-ultra text-forest-green opacity-50">
                &quot;
              </div>
              
              <p className="text-xl md:text-2xl font-ultra leading-relaxed mb-12 relative z-10">
                {t.quote}
              </p>

              <div>
                <h4 className="text-2xl font-ultra text-vintage-cream uppercase tracking-tight">
                  {t.author}
                </h4>
                <p className="text-sm font-ultra text-forest-green tracking-widest uppercase opacity-80">
                  {t.role}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-forest-green/30 transition-all group-hover:w-full group-hover:h-full group-hover:opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
