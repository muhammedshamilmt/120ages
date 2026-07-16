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
            <h2 className="text-2xl md:text-3xl font-medium text-[#50A845] mb-2 leading-tight font-sans">
              Switch to a Healthier Lifestyle
            </h2>
            <p className="text-[#8B8371] text-sm md:text-base font-sans">
              Balance your day with pure, focused energy
            </p>
          </div>
          <Link
            href="/shop"
            className="self-start md:self-end bg-[#50A845] text-white px-6 py-2 rounded font-sans text-sm hover:bg-[#3f8735] transition-colors"
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
