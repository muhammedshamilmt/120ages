"use client";

import React from "react";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/lib/products";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  showIcon?: boolean;
}

export function AddToCartButton({ product, className, showIcon = true }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className={`w-full  text-vintage-cream py-5 font-ultra text-sm tracking-[0.3em] uppercase hover:bg-background hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group ${className}`}
    >
      {showIcon && <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-1" />}
      Add to Cart
    </button>
  );
}
