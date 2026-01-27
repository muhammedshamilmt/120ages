import React from "react";

export function MenuHeader() {
  return (
    <section className="pt-32 pb-16 bg-vintage-cream text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-ultra text-6xl md:text-8xl text-muted-brown mb-6 tracking-tight uppercase">
          Menu
        </h1>
        <p className="font-ultra text-lg md:text-xl text-forest-green uppercase tracking-widest">
          Nourishing Your Soul, One Sip at a Time
        </p>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-forest-green/30" />
        </div>
      </div>
    </section>
  );
}
