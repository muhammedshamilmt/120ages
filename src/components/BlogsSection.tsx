"use client";

import Image from "next/image";

const posts = [
  {
    tag: "Wellness",
    title: "The Ancient Art of Herbal Brewing",
    excerpt: "Discover how mountain communities have been crafting healing teas for centuries — and how you can bring that ritual home.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4586d517?q=80&w=800&auto=format&fit=crop",
    date: "Mar 28, 2026",
    readTime: "4 min read",
  },
  {
    tag: "Lifestyle",
    title: "Why Slow Mornings Change Everything",
    excerpt: "A warm cup, a quiet room, and no rush. We explore the science and soul behind intentional morning routines.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    date: "Mar 14, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Sourcing",
    title: "From Hive to Jar: Our Honey Story",
    excerpt: "We trace the journey of our Wild Mountain Honey from remote high-altitude hives to your table — untouched and unfiltered.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    date: "Feb 22, 2026",
    readTime: "3 min read",
  },
];

export function BlogsSection() {
  return (
    <section className="bg-vintage-cream px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-ultra text-[10px] tracking-[0.4em] uppercase text-forest-green block mb-4">
              Stories & Guides
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-ultra uppercase leading-[0.85] tracking-tighter text-muted-brown">
              From The <br /> Journal
            </h2>
          </div>
          <button className="self-start md:self-end font-ultra text-[10px] tracking-[0.3em] uppercase border-b-2 border-muted-brown text-muted-brown hover:text-forest-green hover:border-forest-green transition-colors pb-1">
            All Posts →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-muted-brown/10 group-hover:border-muted-brown/40 transition-colors mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest-green text-vintage-cream px-3 py-1 font-ultra text-[9px] tracking-widest uppercase">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/40">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-brown/20" />
                <span className="font-ultra text-[9px] tracking-widest uppercase text-muted-brown/40">{post.readTime}</span>
              </div>
              <h3 className="font-ultra text-xl md:text-2xl uppercase text-muted-brown group-hover:text-forest-green transition-colors leading-tight mb-3">
                {post.title}
              </h3>
              <p className="text-muted-brown/60 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="mt-4 h-px w-8 bg-muted-brown group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
