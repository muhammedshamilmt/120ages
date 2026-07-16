import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";
import { Star } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-[20px] max-h-[600px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-black/5 bg-white">
      <div className="relative aspect-[4/5] bg-[#E4D5B7] flex items-center justify-center overflow-hidden">
        {product.offer && (
          <div className="absolute top-5 left-5 z-10">
            <span className="bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-sans">
              {product.offer}
            </span>
          </div>
        )}
        {!product.offer && (
          <div className="absolute top-5 left-5 z-10">
            <span className="bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-sans">
              {product.category}
            </span>
          </div>
        )}
        <Link href={`/shop/${product.id}`} className="relative w-full h-full block drop-shadow-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
      </div>

      <div className="bg-[#6B6149] p-6 flex flex-col flex-1">
        <Link href={`/shop/${product.id}`}>
          <h3 className="text-white text-[22px] font-medium leading-tight mb-1 font-sans group-hover:text-vintage-cream transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-white/90 text-lg mb-3 font-sans">
          500g
        </p>
        <div className="text-white font-bold text-xl mb-4 font-sans">
          ${product.price.toFixed(2)}
        </div>
        <div className="flex items-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>

        {/* Replace standard AddToCartButton wrapper styling with our new style */}
        <AddToCartButton
          product={product}
          className="w-full bg-white !text-[#6B6149] font-bold text-[13px] py-3.5 rounded-full  mt-auto uppercase tracking-wider font-sans border-0"
          showIcon={false}
        />
      </div>
    </div>
  );
}
