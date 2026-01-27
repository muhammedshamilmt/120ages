"use client";

export function ContactSection({ className = "bg-vintage-cream" }: { className?: string }) {
  const isDark = className.includes('bg-[#1A1A1A]');

  return (
    <section className={`${className} py-24 px-6 md:px-12 lg:px-24 border-t-2 ${isDark ? 'border-vintage-cream/20' : 'border-black'}`}>
      <div className={`max-w-4xl mx-auto border-2 p-8 md:p-16 relative shadow-[12px_12px_0px_0px_rgba(158,117,86,1)] ${isDark ? 'bg-[#1A1A1A] border-vintage-cream/20' : 'bg-white border-black'}`}>
        {/* Decorative Stamps/Badges */}
        <div className={`absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 border-2 border-dashed flex items-center justify-center -rotate-12 opacity-50 ${isDark ? 'border-forest-green' : 'border-muted-brown'}`}>
          <p className={`font-ultra text-[10px] md:text-xs text-center uppercase leading-none ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>
            Est. 2024 <br /> Herbal <br /> Lane
          </p>
        </div>

        <div className="mb-12">
          <h2 className={`text-4xl md:text-6xl font-ultra uppercase tracking-tighter mb-4 ${isDark ? 'text-vintage-cream' : 'text-black'}`}>
            Get In Touch
          </h2>
          <div className="h-2 w-32 bg-forest-green" />
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className={`font-ultra text-xs uppercase tracking-widest ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Name</label>
              <input 
                type="text" 
                className={`w-full bg-transparent border-b-2 py-2 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg ${isDark ? 'border-vintage-cream/20 text-vintage-cream' : 'border-black text-black'}`}
                placeholder="YOUR NAME"
              />
            </div>
            <div className="space-y-2">
              <label className={`font-ultra text-xs uppercase tracking-widest ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Email</label>
              <input 
                type="email" 
                className={`w-full bg-transparent border-b-2 py-2 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg ${isDark ? 'border-vintage-cream/20 text-vintage-cream' : 'border-black text-black'}`}
                placeholder="YOUR@EMAIL.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`font-ultra text-xs uppercase tracking-widest ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Message</label>
            <textarea 
              rows={4}
              className={`w-full bg-transparent border-2 p-4 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg resize-none ${isDark ? 'border-vintage-cream/20 text-vintage-cream' : 'border-black text-black'}`}
              placeholder="TELL US WHAT'S ON YOUR MIND..."
            />
          </div>

          <button className={`w-full md:w-auto px-12 py-5 font-ultra uppercase text-xl transition-all transform hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-forest-green text-vintage-cream hover:bg-vintage-cream hover:text-black' : 'bg-black text-vintage-cream hover:bg-forest-green'}`}>
            Send Message
          </button>
        </form>

        <div className={`mt-16 pt-12 border-t flex flex-col md:flex-row justify-between gap-8 ${isDark ? 'border-vintage-cream/10' : 'border-black/10'}`}>
          <div>
            <p className={`font-ultra text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Location</p>
            <p className={`text-lg font-bold uppercase ${isDark ? 'text-vintage-cream' : 'text-black'}`}>123 Herbal Lane, Quiet Corner</p>
          </div>
          <div>
            <p className={`font-ultra text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Hours</p>
            <p className={`text-lg font-bold uppercase ${isDark ? 'text-vintage-cream' : 'text-black'}`}>Daily 8AM - 8PM</p>
          </div>
          <div>
            <p className={`font-ultra text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-forest-green' : 'text-muted-brown'}`}>Follow</p>
            <p className={`text-lg font-bold uppercase underline decoration-2 underline-offset-4 ${isDark ? 'text-vintage-cream' : 'text-black'}`}>@vintage_herbal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
