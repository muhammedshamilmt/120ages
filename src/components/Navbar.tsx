"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { Search, User, ShoppingCart, Menu } from "lucide-react";

export function Navbar() {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <nav className="relative w-full z-50 bg-vintage-cream border-b-2 border-muted-brown/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Heading */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/120-logo-png.png"
            alt="120AGES Logo"
            width={150}
            height={100}
            className="object-contain w-auto overflow-hidden h-18 md:h-24"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "Home", href: "/" },
            { name: "Shop By Category", href: "/shop" },
            { name: "Offers", href: "/offers" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base text-muted-brown hover:text-[#7E775B] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA / Cart */}
        <div className="flex items-center space-x-6">
          <button className="text-muted-brown hover:text-[#7E775B] transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-muted-brown hover:text-[#7E775B] transition-colors hidden md:block">
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="group flex items-center relative text-muted-brown hover:text-[#7E775B] transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold group-hover:scale-110 transition-transform">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden text-muted-brown">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
