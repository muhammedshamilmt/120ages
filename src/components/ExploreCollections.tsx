"use client";

import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    label: "Herbal Teas",
    tag: "Sip & Restore",
    image: "https://images.unsplash.com/photo-1544787210-2211d7e8653e?q=80&w=800",
    href: "/shop",
  },
  {
    label: "Wellness",
    tag: "Mind & Body",
    image: "https://images.unsplash.com/photo-1591871937453-3efae5979ef2?q=80&w=800",
    href: "/shop",
  },
  {
    label: "Home Goods",
    tag: "Live Well",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800",
    href: "/shop",
  },
  {
    label: "Accessories",
    tag: "Carry It",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
    href: "/shop",
  },
];

export function ExploreCollections() {
  return (
    <section className="bg-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-muted-brown">
            Explore <br /> Collections
          </h2>
          <Link
            href="/shop"
            className="self-start md:self-end font-ultra text-[10px] tracking-[0.3em] uppercase border-b-2 border-muted-brown text-muted-brown hover:text-forest-green hover:border-forest-green transition-colors pb-1"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((col) => (
            <Link key={col.label} href={col.href} className="group relative aspect-[3/4] overflow-hidden border-2 border-muted-brown/10 hover:border-muted-brown/40 transition-colors block">
              <Image
                src={col.image}
                alt={col.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <span className="block font-ultra text-[9px] tracking-[0.3em] uppercase text-forest-green mb-1">
                  {col.tag}
                </span>
                <h3 className="font-ultra text-xl md:text-2xl uppercase text-vintage-cream leading-none">
                  {col.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
