"use client";

import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="bg-black text-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image with Border */}
          <div className="relative aspect-square lg:aspect-[4/5] border-2 border-vintage-cream/30 p-4">
            <div className="relative w-full h-full border border-vintage-cream/20 overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769493948735.png?width=8000&height=8000&resize=contain"
                alt="Vintage Tea House"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            {/* Label in the corner like the inspiration */}
            <div className="absolute top-8 left-8 text-vintage-cream font-ultra text-2xl drop-shadow-lg">*</div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-between h-full py-8">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter mb-12">
                Soothe <br />
                <span className="text-vintage-red">The Soul</span>
              </h2>

              <div className="max-w-xl space-y-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-ultra leading-[1.1] uppercase">
                  "The herbal teas here soothe my soul—perfect spot to unwind after a busy day."
                </p>
                
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  Experience the quiet luxury of traditional wellness. Every cup is brewed with memory, patience, and the finest hand-picked botanicals from our heritage gardens.
                </p>
              </div>
            </div>

            {/* Right Aligned Author Quote */}
            <div className="mt-16 text-right">
              <p className="text-sm md:text-base font-ultra tracking-widest uppercase opacity-80 mb-2">
                Every sip is a journey back to yourself.
              </p>
              <h4 className="text-3xl md:text-5xl font-ultra text-vintage-red uppercase">
                Justin M.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
