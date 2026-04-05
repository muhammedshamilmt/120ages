import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { ProductTabs } from "@/components/ProductTabs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const savings = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-ultra text-[10px] tracking-[0.3em] text-muted-brown/60 hover:text-muted-brown transition-colors uppercase mb-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-square bg-white border-2 border-muted-brown/10 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {product.offer && (
                <div className="absolute top-4 left-4">
                  <span className="bg-muted-brown text-vintage-cream px-3 py-1 font-ultra text-[10px] tracking-widest uppercase rounded-full">
                    {product.offer}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Category & Type */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-ultra text-[10px] tracking-[0.5em] text-forest-green uppercase">
                  {product.category}
                </span>
                {product.type && (
                  <>
                    <span className="text-muted-brown/20">·</span>
                    <span className="font-ultra text-[10px] tracking-[0.3em] text-muted-brown/50 uppercase">
                      Type: {product.type}
                    </span>
                  </>
                )}
              </div>

              {/* Name */}
              <h1 className="font-ultra text-4xl md:text-5xl text-muted-brown uppercase leading-none tracking-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              {product.reviewCount && (
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: product.rating ?? 5 }).map((_, i) => (
                      <span key={i} className="text-forest-green text-sm">★</span>
                    ))}
                  </div>
                  <span className="font-ultra text-[10px] tracking-widest uppercase text-muted-brown/50">
                    {product.reviewCount} Reviews
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-4 flex-wrap">
                {product.originalPrice && (
                  <span className="font-ultra text-xl text-muted-brown/40 line-through">
                    Rs. {product.originalPrice.toLocaleString()}.00
                  </span>
                )}
                <span className="font-ultra text-3xl text-muted-brown">
                  Rs. {product.price.toLocaleString()}.00
                </span>
                {savings && (
                  <span className="bg-forest-green text-vintage-cream px-3 py-1 font-ultra text-[10px] tracking-widest uppercase rounded-full">
                    Save {savings}%
                  </span>
                )}
              </div>

              {/* Availability */}
              {product.availability && (
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${product.availability === "In Stock" ? "bg-forest-green" : "bg-muted-brown"}`} />
                  <span className="font-ultra text-[10px] tracking-widest uppercase text-muted-brown/60">
                    Availability: {product.availability}
                  </span>
                </div>
              )}

              {/* Sold recently */}
              {product.soldRecently && (
                <p className="font-ultra text-[10px] tracking-widest uppercase text-muted-brown/50">
                  🔥 {product.soldRecently} sold in the last 6 hours
                </p>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                <AddToCartButton product={product} />
                <button className="w-full border-2 border-muted-brown py-3 font-ultra text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-muted-brown hover:text-vintage-cream">
                  Buy It Now
                </button>
              </div>

              {/* Categories */}
              {product.categories && (
                <div className="pt-2 space-y-2">
                  <span className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/40 block">
                    Categories:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((cat) => (
                      <Link
                        key={cat}
                        href="/shop"
                        className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/60 border border-muted-brown/20 px-2 py-1 hover:border-forest-green hover:text-forest-green transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && (
                <div className="space-y-2">
                  <span className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/40 block">
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/50 bg-muted-brown/5 px-2 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Frequently Bought Together */}
          {product.frequentlyBoughtTogether && product.frequentlyBoughtTogether.length > 1 && (
            <div className="mt-20 border-2 border-muted-brown/10 p-8">
              <h2 className="font-ultra text-sm tracking-[0.3em] uppercase text-muted-brown mb-8">
                Frequently Bought Together
              </h2>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {product.frequentlyBoughtTogether.map((item, i) => (
                  <div key={item.productId} className="flex items-center gap-4">
                    {i > 0 && <span className="font-ultra text-2xl text-muted-brown/30 hidden md:block">+</span>}
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 border border-muted-brown/10 overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-ultra text-xs uppercase text-muted-brown leading-tight mb-1 max-w-[160px]">
                          {item.name}
                        </p>
                        {item.variants && (
                          <div className="flex gap-1 mb-1">
                            {item.variants.map((v) => (
                              <span key={v} className="font-ultra text-[8px] tracking-widest uppercase border border-muted-brown/20 px-1.5 py-0.5 text-muted-brown/60">
                                {v}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          {item.originalPrice && (
                            <span className="font-ultra text-[10px] text-muted-brown/40 line-through">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="font-ultra text-sm text-muted-brown">
                            Rs. {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-muted-brown/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/40 block mb-1">Total Price</span>
                  <div className="flex items-center gap-3">
                    <span className="font-ultra text-lg text-muted-brown/40 line-through">
                      Rs. {product.frequentlyBoughtTogether.reduce((s, i) => s + (i.originalPrice ?? i.price), 0).toLocaleString()}.00
                    </span>
                    <span className="font-ultra text-2xl text-muted-brown">
                      Rs. {product.frequentlyBoughtTogether.reduce((s, i) => s + i.price, 0).toLocaleString()}.00
                    </span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-muted-brown text-vintage-cream font-ultra text-[10px] tracking-[0.2em] uppercase hover:bg-forest-green transition-colors">
                  Add Selected to Cart
                </button>
              </div>
            </div>
          )}

          {/* Tabs */}
          <ProductTabs product={product} />
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-24 px-6 border-t-2 border-muted-brown/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-ultra text-2xl text-muted-brown uppercase tracking-widest mb-12 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter((p) => p.id !== product.id).slice(0, 3).map((p) => (
              <Link key={p.id} href={`/shop/${p.id}`} className="group space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-muted-brown/5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {p.offer && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-muted-brown text-vintage-cream px-2 py-0.5 font-ultra text-[9px] tracking-widest uppercase rounded-full">
                        {p.offer}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-ultra text-sm text-muted-brown uppercase group-hover:text-forest-green transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    {p.originalPrice && (
                      <span className="font-ultra text-xs text-muted-brown/40 line-through">
                        Rs. {p.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="font-ultra text-xs text-muted-brown/60">
                      Rs. {p.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
