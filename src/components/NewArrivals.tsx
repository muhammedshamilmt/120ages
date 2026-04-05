"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

// Pick first 3 products as "new arrivals"
const arrivals = products.slice(0, 3);

export function NewArrivals() {
  return (
    <section className="bg-[#1A1A1A] px-6 py-20 md:px-12 md:py-32 lg:px-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-ultra text-[10px] tracking-[0.4em] uppercase text-forest-green block mb-4">
              Just Dropped
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-vintage-cream">
              New <br /> Arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="self-start md:self-end font-ultra text-[10px] tracking-[0.3em] uppercase border-b-2 border-vintage-cream/40 text-vintage-cream/60 hover:text-forest-green hover:border-forest-green transition-colors pb-1"
          >
            Shop All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arrivals.map((product, i) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group block">
              <div className="relative aspect-square overflow-hidden border border-vintage-cream/10 group-hover:border-forest-green/40 transition-colors mb-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-forest-green text-vintage-cream px-3 py-1 font-ultra text-[9px] tracking-widest uppercase">
                    New
                  </span>
                  {product.offer && (
                    <span className="bg-muted-brown text-vintage-cream px-3 py-1 font-ultra text-[9px] tracking-widest uppercase rounded-full">
                      {product.offer}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 bg-vintage-cream/10 backdrop-blur-sm px-3 py-2">
                  <span className="font-ultra text-vintage-cream text-sm">${product.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ultra text-[9px] tracking-[0.3em] uppercase text-forest-green block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-ultra text-lg uppercase text-vintage-cream group-hover:text-forest-green transition-colors leading-tight">
                    {product.name}
                  </h3>
                </div>
                <span className="font-ultra text-[9px] tracking-widest uppercase text-vintage-cream/30 mt-1">
                  0{i + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
