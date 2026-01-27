import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-vintage-cream">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 font-ultra text-[10px] tracking-[0.3em] text-muted-brown/60 hover:text-muted-brown transition-colors uppercase mb-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <div className="relative aspect-square bg-white border-2 border-muted-brown/10 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="font-ultra text-[10px] tracking-[0.5em] text-forest-green uppercase">
                  {product.category}
                </span>
                <h1 className="font-ultra text-4xl md:text-6xl text-muted-brown uppercase leading-none tracking-tight">
                  {product.name}
                </h1>
                <p className="font-ultra text-3xl text-muted-brown">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-muted-brown/80 text-lg leading-relaxed font-medium">
                  {product.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-ultra text-xs tracking-widest text-muted-brown uppercase border-b-2 border-muted-brown/10 pb-4">
                    Product Details
                  </h3>
                  <ul className="space-y-3">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-brown/70">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-forest-green flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <button className="w-full bg-forest-green text-vintage-cream py-5 font-ultra text-sm tracking-[0.3em] uppercase hover:bg-muted-brown transition-all duration-500">
                  Add to Cart
                </button>
                <p className="text-center font-ultra text-[10px] tracking-widest text-muted-brown/40 uppercase">
                  Complimentary worldwide shipping on orders over $150
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products (Static/Simple) */}
      <section className="py-24 px-6 border-t-2 border-muted-brown/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-ultra text-2xl text-muted-brown uppercase tracking-widest mb-12 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 3).map((p) => (
              <Link key={p.id} href={`/shop/${p.id}`} className="group space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-muted-brown/5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-ultra text-sm text-muted-brown uppercase group-hover:text-forest-green transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-ultra text-xs text-muted-brown/60">
                    ${p.price.toFixed(2)}
                  </p>
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
