"use client";

export function AboutPlace() {
  return (
    <section className="py-24 bg-vintage-cream border-t border-muted-brown/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="font-ultra text-forest-green text-sm tracking-[0.3em] uppercase mb-4 block">
              Visit Us
            </span>
            <h2 className="text-5xl md:text-8xl font-ultra text-muted-brown uppercase leading-[0.85] tracking-tighter mb-8">
              Our <br />
              <span className="text-forest-green">Place</span>
            </h2>
            
            <p className="text-xl text-muted-brown/80 font-medium leading-relaxed mb-12 max-w-md">
              Nestled in a quiet corner, our café invites you to unwind and nourish your body and mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-ultra text-muted-brown text-sm tracking-widest uppercase mb-4 opacity-50">
                  Address
                </h4>
                <p className="text-2xl font-ultra text-muted-brown uppercase">
                  123 Herbal Lane
                </p>
              </div>
              <div>
                <h4 className="font-ultra text-muted-brown text-sm tracking-widest uppercase mb-4 opacity-50">
                  Hours
                </h4>
                <p className="text-2xl font-ultra text-muted-brown uppercase">
                  8am - 8pm
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map Placeholder/Embed */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted-brown/5 border-2 border-muted-brown/20 p-4 group">
            <div className="w-full h-full relative overflow-hidden grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2151528095767!2d-73.98784308459404!3d40.75797477932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x16b610c1f6c4493a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625576543210!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Our Location"
              />
            </div>
            {/* Decorative Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-vintage-cream/80 m-4" />
            <div className="absolute top-8 left-8 bg-forest-green text-vintage-cream p-3 font-ultra text-xs tracking-tighter uppercase rotate-[-4deg]">
              Find Your Way
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
