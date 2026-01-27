import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544787210-2211d44b565a?q=80&w=1000&auto=format&fit=crop",
    alt: "A vibrant wooden tray holding a steaming cup of herbal tea, a fresh green smoothie, and a colorful quinoa salad",
    span: "md:col-span-2 md:row-span-2",
    caption: "A vibrant wooden tray holding a steaming cup of herbal tea, a fresh green smoothie, and a colorful quinoa salad."
  },
  {
    src: "https://images.unsplash.com/photo-1594631252845-29fc4586c55c?q=80&w=1000&auto=format&fit=crop",
    alt: "A steaming cup of chamomile tea with fresh herbs",
    span: "md:col-span-1 md:row-span-1",
    caption: "Sip: Moments of calm and wellness in every cup."
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
    alt: "Vibrant bowl of fresh fruit and granola",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop",
    alt: "Glass jar filled with herbal tea blends",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
    alt: "Cozy corner of the café",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1610970882799-64a3e1d20980?q=80&w=1000&auto=format&fit=crop",
    alt: "Refreshing green smoothie",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    alt: "Inviting spread of fresh sandwiches and salads",
    span: "md:col-span-2 md:row-span-1"
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
