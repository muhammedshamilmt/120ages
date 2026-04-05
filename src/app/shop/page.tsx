"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const ALL = "ALL";

const categories = [
  ALL,
  ...Array.from(new Set(products.map((p) => p.category.toUpperCase()))),
];

export default function ShopPage() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () =>
      active === ALL
        ? products
        : products.filter((p) => p.category.toUpperCase() === active),
    [active]
  );

  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 border-b-2 border-muted-brown/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-ultra text-xs tracking-[0.5em] text-forest-green uppercase mb-4 block">
            EST. 2026
          </span>
          <h1 className="font-ultra text-5xl md:text-7xl lg:text-8xl text-muted-brown uppercase leading-none tracking-tighter mb-8">
            Curated Goods
          </h1>
          <p className="max-w-2xl mx-auto text-muted-brown/70 text-lg leading-relaxed font-medium">
            Discover our collection of artisanal blends, heritage accessories, and wellness essentials designed for a life well-lived.
          </p>
        </div>
      </section>

      {/* Filter / Sort Bar */}
      <section className="py-8 px-6 border-b-2 border-muted-brown/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-ultra text-[10px] tracking-widest uppercase transition-colors cursor-pointer pb-0.5 ${
                  active === cat
                    ? "text-muted-brown border-b-2 border-muted-brown"
                    : "text-muted-brown/40 hover:text-muted-brown"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="font-ultra text-[10px] tracking-widest text-muted-brown uppercase">
            Showing {filtered.length} Product{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center font-ultra text-muted-brown/40 tracking-widest uppercase text-sm py-24">
              No products in this category
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
