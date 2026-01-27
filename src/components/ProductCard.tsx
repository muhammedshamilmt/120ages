import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-vintage-cream border-2 border-muted-brown/10 p-4 transition-all duration-500 hover:border-muted-brown/40">
        <div className="relative aspect-square overflow-hidden mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
          <span className="bg-forest-green text-vintage-cream px-3 py-1 font-ultra text-[10px] tracking-widest uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-ultra text-xl text-muted-brown uppercase tracking-tight group-hover:text-forest-green transition-colors">
          {product.name}
        </h3>
        <p className="font-ultra text-lg text-muted-brown">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-muted-brown/60 text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="mt-8">
        <Link
          href={`/shop/${product.id}`}
          className="inline-block w-full text-center border-2 border-muted-brown py-3 font-ultra text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-muted-brown hover:text-vintage-cream"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
