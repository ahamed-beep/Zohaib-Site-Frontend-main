"use client";
import { useState, useEffect } from "react";

const heroImages = [
  "https://loremflickr.com/1600/900/speaker,audio",
  "https://loremflickr.com/1600/900/headphones",
  "https://loremflickr.com/1600/900/amplifier,electronics",
  "https://loremflickr.com/1600/900/subwoofer",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {heroImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Featured product"
          className={`w-full h-auto block transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;