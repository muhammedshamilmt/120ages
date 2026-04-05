"use client";

import { useState } from "react";
import { Product } from "@/lib/products";

const TABS = ["Description", "Benefits", "Storage", "How to Use?", "FAQs"] as const;
type Tab = (typeof TABS)[number];

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<Tab>("Description");

  return (
    <div className="mt-16 border-t-2 border-muted-brown/10">
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-0 border-b-2 border-muted-brown/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-ultra text-[10px] tracking-[0.25em] uppercase px-6 py-4 transition-colors border-b-2 -mb-[2px] cursor-pointer ${
              active === tab
                ? "text-muted-brown border-muted-brown"
                : "text-muted-brown/40 border-transparent hover:text-muted-brown/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-10 max-w-3xl">
        {active === "Description" && (
          <div className="space-y-6">
            <p className="text-muted-brown/80 text-base leading-relaxed font-medium">
              {product.description}
            </p>
            {product.details.length > 0 && (
              <ul className="space-y-3 mt-4">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-brown/70">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-forest-green flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {active === "Benefits" && (
          <ul className="space-y-4">
            {(product.benefits ?? []).map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-5 h-5 rounded-full bg-forest-green/10 border border-forest-green flex items-center justify-center shrink-0">
                  <span className="text-forest-green text-[10px]">✓</span>
                </span>
                <span className="text-muted-brown/80 text-sm leading-relaxed font-medium">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {active === "Storage" && (
          <ul className="space-y-4">
            {(product.storage ?? []).map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-brown/70">
                <span className="mt-1.5 w-1.5 h-1.5 bg-muted-brown/40 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        )}

        {active === "How to Use?" && (
          <ol className="space-y-5">
            {(product.howToUse ?? []).map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-ultra text-[10px] tracking-widest text-forest-green w-6 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-brown/80 text-sm leading-relaxed font-medium">{step}</span>
              </li>
            ))}
          </ol>
        )}

        {active === "FAQs" && (
          <div className="space-y-0 divide-y divide-muted-brown/10">
            {(product.faqs ?? []).map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
      >
        <span className="font-ultra text-sm uppercase tracking-wide text-muted-brown group-hover:text-forest-green transition-colors">
          {faq.question}
        </span>
        <span className={`font-ultra text-lg text-muted-brown/40 transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-muted-brown/70 leading-relaxed font-medium pl-0">
          {faq.answer}
        </p>
      )}
    </div>
  );
}
