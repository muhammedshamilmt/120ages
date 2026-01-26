"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-vintage-cream/80 backdrop-blur-md border-b border-vintage-red/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Heading */}
        <Link href="/" className="font-ultra text-3xl md:text-4xl text-vintage-red tracking-tight hover:opacity-80 transition-opacity">
          120ages
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["SHOP", "COLLECTIONS", "STORY", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-ultra text-sm text-vintage-red/80 hover:text-vintage-red transition-colors tracking-widest"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA / Cart */}
        <div className="flex items-center space-x-6">
          <button className="font-ultra text-xs text-vintage-red border-2 border-vintage-red px-4 py-2 hover:bg-vintage-red hover:text-vintage-cream transition-all duration-300">
            CART (0)
          </button>
          <button className="md:hidden text-vintage-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
