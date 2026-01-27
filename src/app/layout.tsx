import type { Metadata } from "next";
import { Geist, Geist_Mono, Ultra } from "next/font/google";
import "./globals.css";
import { VisualEditsWrapper } from "@/components/VisualEditsWrapper";
import { CartProvider } from "@/hooks/use-cart";
import { CartSidebar } from "@/components/CartSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ultra = Ultra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ultra",
});

export const metadata: Metadata = {
  title: "Vintage Clothing | Est. 2026",
  description: "Well designed vintage ecommerce landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ultra.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <CartSidebar />
          <VisualEditsWrapper />
        </CartProvider>
      </body>
    </html>
  );
}
