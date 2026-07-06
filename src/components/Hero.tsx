"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Leaf, Ban, Activity } from "lucide-react";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    
    // Auto-play interval
    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, scrollNext]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-full relative">
      <div className="overflow-hidden relative w-full h-[600px] md:h-[700px]" ref={emblaRef}>
        <div className="flex w-full h-full">
          
          {/* SLIDE 1: Grains / Seeds (New Design) */}
          <div className="relative flex-[0_0_100%] min-w-0 w-full h-full">
            <div className="absolute inset-0 z-0">
              <Image
                src="/image.png"
                alt="Grains and Seeds Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-end text-right md:text-left md:items-end">
              <div className="max-w-2xl text-left mr-0 md:mr-10">
                <h2 className="text-white font-poppins text-xl md:text-2xl tracking-widest uppercase mb-4 opacity-90">
                  A THOUSAND WAYS TO LIVE WELL.
                </h2>
                <h1 className="text-[#E6C875] font-poppins text-4xl md:text-6xl font-bold leading-tight mb-8 max-w-xl">
                  Satisfy your cravings, the smarter way.
                </h1>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E6C875] flex items-center justify-center text-[#E6C875]">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <span className="text-white text-2xl font-poppins">High fibre</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E6C875] flex items-center justify-center text-[#E6C875]">
                      <Ban className="w-6 h-6" />
                    </div>
                    <span className="text-white text-2xl font-poppins">No additives</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E6C875] flex items-center justify-center text-[#E6C875]">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-white text-2xl font-poppins">Easy to digest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2: Honey Jar (Previous Design) */}
          <div className="relative flex-[0_0_100%] min-w-0 w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/image.png"
                alt="Forest Background"
                fill
                className="object-cover brightness-75"
              />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10">
              
              {/* Top Text */}
              <h1 className="text-white font-poppins text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-10 text-center drop-shadow-lg">
                RAW &nbsp;|&nbsp; NATURAL &nbsp;|&nbsp; UNPROCESSED
              </h1>

              <div className="relative flex items-center justify-center mt-10">
                {/* Order Now Button - Left */}
                <button className="absolute left-[-150px] md:left-[-200px] top-1/2 -translate-y-1/2 bg-[#EE4D41] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full flex items-center transition-transform hover:scale-105 shadow-xl text-sm md:text-base z-20">
                  ORDER NOW <span className="ml-2 font-bold">&gt;</span>
                </button>

                {/* Center Product Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 drop-shadow-2xl">
                  {/* Replace with actual honey jar image */}
                  <Image
                    src="https://images.unsplash.com/photo-1587049352847-4d4b8e21ed45?q=80&w=1000&auto=format&fit=crop"
                    alt="Honey Jar"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Circular Badge - Right */}
                <div className="absolute right-[-120px] md:right-[-180px] top-[10%] w-32 h-32 md:w-48 md:h-48 bg-[#2d3733] rounded-full flex items-center justify-center text-center p-4 shadow-2xl z-20">
                  <span className="text-vintage-cream font-ultra text-sm md:text-xl leading-tight">
                    A FRESH <br/> NEW LOOK <br/> FOR TIMELESS <br/> HONEY
                  </span>
                </div>
              </div>

              {/* New Launch Button - Bottom */}
              <button className="mt-8 bg-[#D97941] hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-md text-xl md:text-2xl shadow-xl transition-transform hover:scale-105 z-20 font-poppins tracking-wider">
                NEW LAUNCH
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Text Section Below Hero */}
      <section className="w-full bg-vintage-cream py-16 px-6 flex flex-col items-center justify-center text-center z-10">
        <h2 className="text-[#4A3C31] font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Everyday Food, Made Good.
        </h2>
        <p className="text-[#4A3C31]/80 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed font-medium">
          At Pure & Sure, we believe everyone deserves access to clean, healthy, organic food every single day. Since 1999, we have been committed to making organic a fundamental part of daily life, not just a trend.
        </p>
      </section>
    </div>
  );
}
