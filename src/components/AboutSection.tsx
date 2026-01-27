import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-8">
            <h2 className="text-[#FF9F1C] text-6xl md:text-8xl font-ultra leading-tight uppercase tracking-tighter">
              The Warmth<br />
              of a Simpler<br />
              Time
            </h2>
            <div className="flex items-center gap-4 text-[#FF9F1C]/80 italic font-medium">
              <div className="h-[1px] w-12 bg-[#FF9F1C]/30"></div>
              <span>Rustic isn't a style — it's a feeling.</span>
            </div>
          </div>
          
          <div className="lg:pt-24">
            <h3 className="text-4xl md:text-5xl font-ultra text-vintage-cream mb-6">
              Welcome to 120 Ages
            </h3>
            <p className="text-xl md:text-2xl text-vintage-cream/80 font-light leading-relaxed max-w-xl">
              A peaceful spot where herbal teas and nourishing foods come together 
              to refresh your body and soul.
            </p>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative aspect-[21/9] w-full border-2 border-vintage-cream/20 overflow-hidden mb-24">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/df78dac5-7d8d-47bd-994b-90e733dd5e67/image-1769492818938.png?width=2000&height=1000&resize=contain"
            alt="Diner Scene"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-vintage-cream/20 pt-12">
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-ultra text-[#FF9F1C] mb-2">150+</div>
            <div className="text-sm uppercase tracking-widest text-vintage-cream/60">Blends Created</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-ultra text-[#FF9F1C] mb-2">15</div>
            <div className="text-sm uppercase tracking-widest text-vintage-cream/60">Years of Heritage</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-ultra text-[#FF9F1C] mb-2 uppercase">Loved Locally</div>
            <div className="text-sm uppercase tracking-widest text-vintage-cream/60">Community Trust</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-ultra text-[#FF9F1C] mb-2">5 Stars</div>
            <div className="text-sm uppercase tracking-widest text-vintage-cream/60">Rated by You</div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 -right-20 text-[25rem] font-ultra text-white/[0.03] select-none pointer-events-none uppercase">
        Rustic
      </div>
    </section>
  );
}
