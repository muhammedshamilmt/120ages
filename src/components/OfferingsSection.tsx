"use client";

import Image from "next/image";

const offerings = [
  {
    title: "Herbal Teas",
    description: "Handcrafted blends brewed fresh to soothe and energize your day.",
    image: "https://images.unsplash.com/photo-1544787210-2211d7e8653e?q=80&w=800",
    detail: "A clean, calming café interior with natural light, wooden tables, and green plants."
  },
  {
    title: "Healthy Drinks",
    description: "Refreshing blends made with natural ingredients to boost your wellness.",
    image: "https://images.unsplash.com/photo-1622597467825-f82876fbba5e?q=80&w=800",
    detail: "Cold-pressed juices and tonics served in vintage glassware."
  },
  {
    title: "Fresh Foods",
    description: "Nutritious bowls and snacks crafted daily from fresh, wholesome produce.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
    detail: "Colorful smoothie bowls topped with seeds, nuts, and fresh fruit in a bright café setting."
  }
];

export function OfferingsSection() {
  return (
    <section className="bg-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-vintage-red">
            Our <br /> Offerings
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-ultra leading-[1.1] uppercase max-w-xl md:mb-2 text-left">
            Savor herbal teas, fresh foods, and wellness drinks in a peaceful setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {offerings.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-black mb-6 bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-vintage-red/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-vintage-cream font-ultra text-xs uppercase tracking-widest border border-vintage-cream/30 px-2 py-1">
                    Premium Selection
                  </span>
                </div>
              </div>
              <h3 className="text-3xl font-ultra uppercase mb-3 text-black group-hover:text-vintage-red transition-colors">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed font-medium text-black/80 mb-4">
                {item.description}
              </p>
              <div className="h-px w-12 bg-vintage-red mb-4 group-hover:w-full transition-all duration-500" />
              <p className="text-xs uppercase tracking-widest font-bold opacity-60 leading-loose">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center font-ultra text-2xl">
              *
            </div>
            <p className="font-ultra uppercase tracking-tighter text-xl">
              Freshly Brewed & <span className="text-vintage-red">Handcrafted</span>
            </p>
          </div>
          <button className="px-10 py-4 bg-black text-vintage-cream font-ultra uppercase text-lg hover:bg-vintage-red transition-colors">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
