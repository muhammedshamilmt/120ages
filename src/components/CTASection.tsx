"use client";

export function CTASection() {
  return (
    <section className="bg-vintage-red px-6 py-24 md:px-12 md:py-40 lg:px-24 text-vintage-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-[200px] font-ultra rotate-12">*</div>
        <div className="absolute bottom-10 right-10 text-[200px] font-ultra -rotate-12">*</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-ultra uppercase leading-[0.85] tracking-tighter mb-12">
          Join <br /> Our Circle
        </h2>
        
        <div className="mt-16 bg-vintage-cream p-8 md:p-12 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <form className="flex flex-col md:flex-row items-end gap-6">
            <div className="flex-1 w-full text-left">
              <label className="block text-black font-ultra uppercase text-sm mb-4 tracking-widest">
                Your Name
              </label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-ultra text-black placeholder:text-black/30 focus:outline-none focus:border-vintage-red transition-colors uppercase"
              />
            </div>
            <button className="w-full md:w-auto px-12 py-5 bg-black text-vintage-cream font-ultra uppercase text-xl hover:bg-vintage-red transition-colors border-2 border-black">
              Send
            </button>
          </form>
          
          <div className="mt-8 flex justify-between items-center border-t border-black/10 pt-6">
            <p className="text-black/60 font-ultra text-[10px] uppercase tracking-[0.2em]">
              EST. 2026 • HANDCRAFTED WELLNESS
            </p>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-black/20" />
              ))}
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-vintage-cream/80 font-medium uppercase tracking-[0.3em] text-xs">
          Be the first to receive our seasonal blends & stories.
        </p>
      </div>
    </section>
  );
}
