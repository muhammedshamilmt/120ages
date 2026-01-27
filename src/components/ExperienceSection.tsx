"use client";

import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Herbal Roots",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4586d51c?q=80&w=800",
    rotation: "-rotate-3",
    offset: "lg:-translate-y-8",
    label: "Hand-picked"
  },
  {
    id: 2,
    title: "Golden Brew",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=800",
    rotation: "rotate-2",
    offset: "lg:translate-y-4",
    label: "Ancient Recipe"
  },
  {
    id: 3,
    title: "Quiet Moments",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800",
    rotation: "-rotate-2",
    offset: "lg:-translate-y-4",
    label: "Healing Space"
  }
];

export function ExperienceSection() {
  return (
    <section className="bg-black text-vintage-cream px-6 py-16 md:px-12 md:py-24 lg:px-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-ultra uppercase leading-[0.85] tracking-tighter">
              Heritage of <br />
              <span className="text-vintage-red">Wellness</span>
            </h2>
          </div>
          <div className="lg:max-w-sm lg:mt-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-ultra leading-[1.1] uppercase mb-4">
              Step into a sanctuary where ancient wisdom meets healing.
            </p>
            <p className="text-base opacity-80 leading-relaxed font-medium">
              A place where the value of time is measured in health, and every ingredient tells a story of tradition. Reclaiming the rhythm of nature, one nourishing sip at a time.
            </p>
          </div>
        </div>

        {/* Overlapping Tilted Images */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-10 px-4 md:px-0 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative aspect-[4/5] overflow-hidden border-2 border-vintage-cream/30 transition-all duration-500 hover:scale-[1.02] hover:z-10 bg-black group shadow-2xl ${item.rotation} ${item.offset}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              
              {/* Labels from Image Inspiration */}
              <div className="absolute top-4 left-4 text-vintage-cream font-ultra text-xl">*</div>
              <div className="absolute top-4 right-4 text-vintage-cream font-ultra text-lg uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1">
                {item.title}
              </div>
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-1">{item.label}</p>
                <p className="text-sm font-ultra uppercase">imperfectly perfect</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote Layout */}
        <div className="mt-24 flex flex-col items-end text-right">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-ultra uppercase leading-none max-w-xl">
            Health isn't a goal — <br />
            <span className="text-vintage-red">it's a feeling.</span>
          </h3>
          <p className="mt-4 text-xs md:text-sm font-ultra tracking-widest opacity-60">
            120 AGES & CO.
          </p>
        </div>
      </div>
    </section>
  );
}
