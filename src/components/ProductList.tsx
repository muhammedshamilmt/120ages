"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductList() {
  const displayProducts = products.slice(0, 4); // Display 4 products

  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-[40px] font-medium text-[#6B6149] mb-3 leading-tight font-sans">
              Switch to a Healthier Lifestyle
            </h2>
            <p className="text-[#8B8371] text-base font-sans">
              Balance your day with pure, focused energy
            </p>
          </div>
          <Link
            href="/shop"
            className="self-start md:self-end bg-[#6B6149] text-white px-8 py-2.5 rounded font-sans text-sm hover:bg-[#5a513d] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
