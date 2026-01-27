"use client";

export function ContactSection() {
  return (
    <section className="bg-vintage-cream py-24 px-6 md:px-12 lg:px-24 border-t-2 border-black">
      <div className="max-w-4xl mx-auto border-2 border-black p-8 md:p-16 relative bg-white shadow-[12px_12px_0px_0px_rgba(158,117,86,1)]">
        {/* Decorative Stamps/Badges */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 border-2 border-dashed border-muted-brown flex items-center justify-center -rotate-12 opacity-50">
          <p className="font-ultra text-[10px] md:text-xs text-muted-brown text-center uppercase leading-none">
            Est. 2024 <br /> Herbal <br /> Lane
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-ultra uppercase tracking-tighter text-black mb-4">
            Get In Touch
          </h2>
          <div className="h-2 w-32 bg-forest-green" />
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-ultra text-xs uppercase tracking-widest text-muted-brown">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg"
                placeholder="YOUR NAME"
              />
            </div>
            <div className="space-y-2">
              <label className="font-ultra text-xs uppercase tracking-widest text-muted-brown">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg"
                placeholder="YOUR@EMAIL.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-ultra text-xs uppercase tracking-widest text-muted-brown">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-2 border-black p-4 focus:outline-none focus:border-forest-green transition-colors font-medium text-lg resize-none"
              placeholder="TELL US WHAT'S ON YOUR MIND..."
            />
          </div>

          <button className="w-full md:w-auto px-12 py-5 bg-black text-vintage-cream font-ultra uppercase text-xl hover:bg-forest-green transition-all transform hover:-translate-y-1 hover:shadow-lg">
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-ultra text-xs uppercase tracking-widest text-muted-brown mb-2">Location</p>
            <p className="text-lg font-bold uppercase">123 Herbal Lane, Quiet Corner</p>
          </div>
          <div>
            <p className="font-ultra text-xs uppercase tracking-widest text-muted-brown mb-2">Hours</p>
            <p className="text-lg font-bold uppercase">Daily 8AM - 8PM</p>
          </div>
          <div>
            <p className="font-ultra text-xs uppercase tracking-widest text-muted-brown mb-2">Follow</p>
            <p className="text-lg font-bold uppercase underline decoration-2 underline-offset-4">@vintage_herbal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
