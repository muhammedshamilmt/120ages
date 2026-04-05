"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

// Products with an offer tag as "best sellers"
const bestSellers = products.filter((p) => p.offer);

export function BestSellers() {
  return (
    <section className="bg-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-ultra text-[10px] tracking-[0.4em] uppercase text-forest-green block mb-4">
              Fan Favourites
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-muted-brown">
              Best <br /> Sellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="self-start md:self-end font-ultra text-[10px] tracking-[0.3em] uppercase border-b-2 border-muted-brown text-muted-brown hover:text-forest-green hover:border-forest-green transition-colors pb-1"
          >
            Shop All →
          </Link>
        </div>

        <div className="space-y-0 divide-y-2 divide-muted-brown/10">
          {bestSellers.map((product, i) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group flex items-center gap-6 md:gap-10 py-6 hover:bg-muted-brown/5 px-2 transition-colors"
            >
              <span className="font-ultra text-[10px] tracking-widest text-muted-brown/30 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden border border-muted-brown/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-ultra text-[9px] tracking-[0.3em] uppercase text-forest-green block mb-1">
                  {product.category}
                </span>
                <h3 className="font-ultra text-lg md:text-2xl uppercase text-muted-brown group-hover:text-forest-green transition-colors truncate">
                  {product.name}
                </h3>
              </div>
              {product.offer && (
                <span className="hidden md:block bg-muted-brown text-vintage-cream px-3 py-1 font-ultra text-[9px] tracking-widest uppercase rounded-full shrink-0">
                  {product.offer}
                </span>
              )}
              <span className="font-ultra text-lg md:text-2xl text-muted-brown shrink-0">
                ${product.price.toFixed(2)}
              </span>
              <span className="font-ultra text-[10px] tracking-widest text-muted-brown/30 group-hover:text-muted-brown transition-colors shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
