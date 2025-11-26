"use client";
import { useState, useEffect } from "react";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "Elevate Your Style",
      highlight: "Define Your Look.",
      desc: "Discover the latest trends in fashion and electronics. Premium quality, unbeatable prices, and style that speaks to you.",
      tag: "New Summer Collection 2025",
      image: "https://i.ibb.co.com/9H720cNH/summer.jpg",
    },
    {
      id: 2,
      title: "Exclusive Gadget Deals",
      highlight: "Smart Choices.",
      desc: "Top-rated gadgets with cutting-edge technology. Limited-time offers with fast delivery.",
      tag: "Best Seller Electronics",
      image: "https://i.ibb.co.com/TMt6CHqj/electonics-Banner.jpg",
    },
    {
      id: 3,
      title: "Redefine Comfort",
      highlight: "Feel the Quality.",
      desc: "Premium outfits crafted for comfort and style. Refresh your wardrobe with our finest picks.",
      tag: "Trending Outfits 2025",
      image: "https://i.ibb.co.com/kgZ436zw/fasion.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide ⏱️ every 4 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[520px] overflow-hidden rounded-2xl mt-6">
      {/* Slides */}
      <div
        className="whitespace-nowrap transition-all duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="inline-block w-full h-[520px] relative"
          >
            <img
              src={slide.image}
              alt="banner"
              className="w-full h-full object-cover overflow-hidden"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40 flex items-center">
              <div className="text-white px-10 md:px-16 max-w-xl">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/30">
                  {slide.tag}
                </span>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  {slide.title} <br />
                  <span className="text-blue-400">{slide.highlight}</span>
                </h1>

                <p className="text-gray-300 text-lg mb-6">{slide.desc}</p>

                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md shadow-blue-600/40 transition-all hover:-translate-y-1">
                    Shop Now
                  </button>

                  <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/20 backdrop-blur-sm transition-all">
                    View Lookbook
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
