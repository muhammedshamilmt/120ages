"use client";

import React from "react";
import { useCart } from "@/hooks/use-cart";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartSidebar() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    totalPrice 
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-vintage-cream border-l-4 border-muted-brown z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b-2 border-muted-brown flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-forest-green h-6 w-6" />
                <h2 className="ultra-regular text-2xl text-muted-brown uppercase tracking-tighter">
                  Your Goods
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-muted-brown/10 rounded-full transition-colors group"
              >
                <X className="h-6 w-6 text-muted-brown group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-muted-brown/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-10 w-10 text-muted-brown/30" />
                  </div>
                  <div>
                    <p className="ultra-regular text-xl text-muted-brown uppercase">The bag is empty</p>
                    <p className="text-muted-brown/60 text-sm mt-1">Time to add some vintage treasures.</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2 bg-forest-green text-white ultra-regular uppercase text-sm hover:scale-105 transition-transform"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 bg-white border-2 border-muted-brown/20 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="ultra-regular text-muted-brown uppercase text-sm leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-brown/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-forest-green font-bold text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-muted-brown/30 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-muted-brown/5 text-muted-brown"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-muted-brown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted-brown/5 text-muted-brown"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-muted-brown font-bold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t-4 border-muted-brown bg-white space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-muted-brown/60 uppercase text-xs tracking-widest font-bold">
                    Subtotal
                  </span>
                  <span className="ultra-regular text-3xl text-muted-brown">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted-brown/60 text-[10px] uppercase text-center tracking-widest">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full py-4 bg-forest-green text-white ultra-regular text-xl uppercase hover:bg-forest-green/90 transition-colors flex items-center justify-center gap-3 group">
                  Checkout
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-muted-brown/40 uppercase text-[10px] tracking-widest font-bold hover:text-muted-brown transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
