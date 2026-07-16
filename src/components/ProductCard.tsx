import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";
import { Star } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-[12px] max-h-[600px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-gray-100 bg-white p-4">
      <div className="relative aspect-[4/5] bg-white flex items-center justify-center overflow-hidden mb-4">
        {product.offer && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-[#f0a85d] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider font-sans">
              {product.offer}
            </span>
          </div>
        )}
        {!product.offer && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider font-sans">
              {product.category}
            </span>
          </div>
        )}
        <Link href={`/shop/${product.id}`} className="relative w-full h-full block">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
      </div>

      <div className="bg-white flex flex-col flex-1">
        <Link href={`/shop/${product.id}`}>
          <h3 className="text-[#333] text-sm md:text-base font-medium leading-tight mb-1 font-sans hover:text-[#50A845] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="text-[#333] font-bold text-sm mb-1 font-sans">
          ₹{product.price.toFixed(2)}
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3 fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>

        <div className="bg-[#fcf3eb] rounded p-2 mb-3 flex items-center justify-between">
          <div>
            <div className="text-[#444] font-bold text-xs font-sans">
              ₹{(product.price * 0.82).toFixed(2)}
            </div>
            <div className="text-[#666] text-[9px] font-sans">
              For Members
            </div>
          </div>
          <button className="bg-[#4a3f35] text-white text-[9px] px-2 py-1 rounded font-sans uppercase font-bold">
            Join Now
          </button>
        </div>
        
        <div className="text-center text-[#666] text-xs font-sans mb-3 line-through decoration-gray-400">
           {/* Add weight selector placeholder if needed, in image it's like 500g */}
           <span className="no-underline font-bold text-[#444]">500g</span>
        </div>

        {/* Replace standard AddToCartButton wrapper styling with our new style */}
        <AddToCartButton
          product={product}
          className="w-full bg-[#5c4939] hover:bg-[#4a3f35] text-white font-bold text-xs py-2.5 rounded-full mt-auto uppercase tracking-wider font-sans border-0 transition-colors"
          showIcon={false}
        />
      </div>
    </div>
  );
}
