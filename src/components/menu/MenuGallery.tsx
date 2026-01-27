import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1642739399141-13d39845ab55?auto=format&fit=crop&w=1018&h=544",
    alt: "A peaceful sanctuary view",
    span: "md:col-span-2 md:row-span-2",
    caption: "A Sanctuary of Calm"
  },
  {
    src: "https://images.unsplash.com/photo-1664192579012-04ad0d0ed344?auto=format&fit=crop&w=194&h=202",
    alt: "Artisan beverage detail",
    span: "md:col-span-1 md:row-span-1",
    caption: "Artisan Crafts"
  },
  {
    src: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=194&h=202",
    alt: "Fresh herbal ingredients",
    span: "md:col-span-1 md:row-span-1",
    caption: "Freshly Harvested"
  },
  {
    src: "https://images.unsplash.com/photo-1692453851399-b2e348724697?auto=format&fit=crop&w=194&h=202",
    alt: "Wellness atmosphere",
    span: "md:col-span-1 md:row-span-1",
    caption: "Mindful Moments"
  },
  {
    src: "https://images.unsplash.com/photo-1546353321-825491c9085d?auto=format&fit=crop&w=194&h=202",
    alt: "Natural light in cafe",
    span: "md:col-span-1 md:row-span-1",
    caption: "Golden Hour"
  },
  {
    src: "https://images.unsplash.com/photo-1468527296240-6b2225de8cb3?auto=format&fit=crop&w=194&h=202",
    alt: "Nourishing spread",
    span: "md:col-span-2 md:row-span-1",
    caption: "Pure Nourishment"
  }
];

export function MenuGallery() {
  return (
    <section className="py-24 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 border border-muted-brown/30 rounded-full font-ultra text-xs tracking-[0.2em] uppercase text-muted-brown/60 mb-6">
            Atmosphere
          </div>
          <h2 className="font-ultra text-5xl md:text-7xl text-muted-brown uppercase tracking-tighter mb-4">
            Our Sanctuary
          </h2>
          <div className="w-16 h-1 bg-forest-green mx-auto mb-6" />
          <p className="text-muted-brown/80 font-medium tracking-widest uppercase text-sm">
            Glimpses of Wellness & Calm
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-8 auto-rows-[300px]">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-green/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                {image.caption && (
                  <p className="text-white font-ultra text-xl leading-tight">
                    {image.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
