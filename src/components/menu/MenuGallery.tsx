import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1642739399141-13d39845ab55?auto=format&fit=crop&w=1018&h=544",
    alt: "Artisan wellness spread with herbal tea and natural ingredients",
    span: "md:col-span-2 md:row-span-2",
    caption: "The Art of Nourishment"
  },
  {
    src: "https://images.unsplash.com/photo-1664192579012-04ad0d0ed344?auto=format&fit=crop&w=194&h=202",
    alt: "Close up of botanical elements",
    span: "md:col-span-1 md:row-span-1",
    caption: "Botanical Bliss"
  },
  {
    src: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=194&h=202",
    alt: "Vintage wellness aesthetic",
    span: "md:col-span-1 md:row-span-1",
    caption: "Pure Essence"
  },
  {
    src: "https://images.unsplash.com/photo-1692453851399-b2e348724697?auto=format&fit=crop&w=194&h=202",
    alt: "Nourishing ingredients close-up",
    span: "md:col-span-1 md:row-span-1",
    caption: "Nature's Gift"
  },
  {
    src: "https://images.unsplash.com/photo-1546353321-825491c9085d?auto=format&fit=crop&w=194&h=202",
    alt: "Atmospheric cafe lighting",
    span: "md:col-span-1 md:row-span-1",
    caption: "Serene Spaces"
  },
  {
    src: "https://images.unsplash.com/photo-1468527296240-6b2225de8cb3?auto=format&fit=crop&w=194&h=202",
    alt: "Wellness ritual details",
    span: "md:col-span-2 md:row-span-1",
    caption: "Daily Rituals"
  }
];

export function MenuGallery() {
  return (
    <>
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[250px]">
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

      {/* Book Now Section */}
      <section className="bg-vintage-cream pb-32 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative border-4 border-muted-brown p-12 md:p-24 overflow-hidden rounded-[40px]">
            {/* Vintage Textures & Ornaments */}
            <div className="absolute top-0 left-0 w-24 h-24 border-r-2 border-b-2 border-muted-brown/20 rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-l-2 border-t-2 border-muted-brown/20 rounded-tl-3xl" />
            
            <div className="relative z-10 text-center">
              <span className="font-ultra text-xs md:text-sm tracking-[0.5em] text-forest-green uppercase mb-8 block">
                Experience the longevity
              </span>
              
              <h2 className="font-ultra text-7xl md:text-[120px] lg:text-[150px] leading-[0.85] text-muted-brown uppercase tracking-tighter mb-12 relative inline-block">
                Book Now
                <span className="absolute -inset-1 text-muted-brown/10 blur-[2px] -z-10 translate-x-2 translate-y-2">Book Now</span>
              </h2>
              
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-xl md:text-2xl font-ultra text-muted-brown/80 uppercase tracking-tight leading-snug">
                  Join us at our sanctuary for a curated wellness experience. Limited tables available daily for the 120 Ages ritual.
                </p>
              </div>
              
              <button className="group relative px-12 py-6 bg-forest-green text-vintage-cream font-ultra text-lg uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[8px_8px_0px_0px_rgba(158,117,86,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                Reserve Your Table
              </button>
            </div>

            {/* Floating Decorative Elements */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] font-ultra text-muted-brown/20 text-4xl uppercase tracking-[0.5em]">
              Nourishment
            </div>
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] font-ultra text-muted-brown/20 text-4xl uppercase tracking-[0.5em] rotate-180">
              Sanctuary
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
