"use client";

import Image from "next/image";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    caption: "Sunlit Sanctuary",
  },
  {
    url: "https://images.unsplash.com/photo-1545231027-63b3f1625ae3?q=80&w=800",
    caption: "Quiet Corners",
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    caption: "Vintage Essence",
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    caption: "Nourishing Space",
  },
];

export function OurSpace({ className = "bg-vintage-cream" }: { className?: string }) {
  const isDark = className.includes('bg-[#1A1A1A]');
  
  return (
    <section className={`${className} py-24 px-6 md:px-12 lg:px-24 border-t ${isDark ? 'border-vintage-cream/10' : 'border-black/10'}`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className={`text-5xl md:text-8xl font-ultra uppercase leading-[0.85] tracking-tighter mb-4 ${isDark ? 'text-vintage-cream' : 'text-muted-brown'}`}>
              Our <br /> Space
            </h2>
            <p className={`text-xl font-ultra uppercase tracking-widest ${isDark ? 'text-forest-green' : 'text-muted-brown/70'}`}>
              A haven for the soul
            </p>
          </div>
          <p className={`max-w-md text-lg font-medium leading-relaxed ${isDark ? 'text-vintage-cream/80' : 'text-black/80'}`}>
            Every corner of our café is thoughtfully designed to provide a 
            peaceful escape from the bustle of everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden border-2 bg-black ${isDark ? 'border-vintage-cream/20' : 'border-black'} ${
                index % 2 !== 0 ? 'md:translate-y-12' : ''
              }`}
            >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 group-hover:bg-transparent transition-colors ${isDark ? 'bg-forest-green/5' : 'bg-muted-brown/10'}`} />
                </div>
              <div className={`absolute bottom-0 left-0 right-0 p-4 border-t-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'bg-[#1A1A1A] border-vintage-cream/20' : 'bg-vintage-cream border-black'}`}>
                <p className={`font-ultra text-sm uppercase tracking-tighter text-center ${isDark ? 'text-vintage-cream' : 'text-black'}`}>
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
