// app/services/ServicesClient.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";

const servicesData = [
  {
    title: "Personal Shopping Consultation",
    subtitle: "Tailored Tech Recommendations",
    desc: "One-on-one consultation to help you find the perfect headphones, speakers, or accessories for your lifestyle and budget. Our specialists compare features, brands, and specs so you always make the right choice.",
    images: [
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Sound Calibration & Setup",
    subtitle: "Premium Audio Tuning",
    desc: "Professional calibration for your headphones and speakers to unlock true audio fidelity. We fine-tune EQ profiles, pairing, and connectivity for a rich, immersive listening experience every time.",
    images: [
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Custom Charging Solutions",
    subtitle: "Fast & Efficient Power Setup",
    desc: "From power banks to multi-device charging stations, we design efficient charging setups for your home, office, or car. Every solution is built for speed, safety, and long-term durability.",
    images: [
      "https://images.unsplash.com/photo-1635861321688-b63d28749a82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1575543419095-0b090628213f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1635861321688-b63d28749a82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1575543419095-0b090628213f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Smart Home Audio Integration",
    subtitle: "Seamless Multi-Room Sound",
    desc: "We integrate smart speakers across your home for synchronized, whole-house audio. Simple setup, reliable connectivity, and effortless control from a single app.",
    images: [
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Protective Gear & Accessory Fitting",
    subtitle: "Custom Case & Accessory Selection",
    desc: "Get the right case, cable, and accessory combination fitted perfectly to your device. We help you protect your investment without compromising on style or function.",
    images: [
      "https://images.unsplash.com/photo-1562204319-29a25e008e0f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1575543419095-0b090628213f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562204319-29a25e008e0f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1635861321688-b63d28749a82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Warranty & After-Sales Support",
    subtitle: "Complete Care & Repair Service",
    desc: "Comprehensive after-sales support including warranty claims, repairs, and replacements. Our team ensures your devices stay in top condition long after purchase.",
    images: [
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1575543419095-0b090628213f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export default function ServicesClient() {
  const [activeIndices, setActiveIndices] = useState(
    Object.fromEntries(servicesData.map((_, i) => [i, 0]))
  );

  const handleStateChange = (sectionIndex, imageIndex) => {
    setActiveIndices((prev) => ({ ...prev, [sectionIndex]: imageIndex }));
  };

  return (
    <div className="w-full bg-white text-zinc-900 ">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[42vh] min-h-[280px] sm:h-[50vh] md:h-[58vh] lg:h-[65vh] min-[1920px]:h-[70vh] min-[2560px]:h-[72vh] overflow-hidden bg-zinc-950">
        <img
          src="/Images/about/hero.webp"
          alt="Zoe Light services"
          className="w-full h-full object-cover object-center opacity-60"
          loading="eager"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl min-[1920px]:text-7xl min-[2560px]:text-8xl font-light tracking-tight uppercase">
            Our Services
          </h1>

          <div
            className="w-12 md:w-16 min-[1920px]:w-20 h-[1px] bg-white/40 mt-3 md:mt-5"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Services Sections */}
      <main className="max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px] mx-auto px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-20 py-12 md:py-16 lg:py-20 min-[1920px]:py-28 min-[2560px]:py-36 space-y-16 md:space-y-24 lg:space-y-32 min-[1920px]:space-y-40 min-[2560px]:space-y-52">
        {servicesData.map((service, sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          const currentActiveIdx = activeIndices[sectionIdx];

          return (
            <section
              key={sectionIdx}
              aria-label={service.title}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 min-[1920px]:gap-24 min-[2560px]:gap-32`}
            >
              {/* Image Gallery */}
              <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 min-[1920px]:space-y-6">
                <div className="relative w-full aspect-[4/3] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={service.images[currentActiveIdx]}
                    alt={`${service.title} — ${service.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={sectionIdx === 0}
                    unoptimized
                    className="object-cover object-center transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div
                  className="flex gap-2 sm:gap-3 min-[1920px]:gap-4 overflow-x-auto pb-2 pt-1 [-webkit-overflow-scrolling:touch]"
                  role="group"
                  aria-label={`${service.title} image thumbnails`}
                >
                  {service.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => handleStateChange(sectionIdx, imgIdx)}
                      aria-label={`View ${service.title} image ${imgIdx + 1}`}
                      aria-pressed={currentActiveIdx === imgIdx}
                      className={`relative w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 min-[1920px]:w-32 min-[1920px]:h-20 min-[2560px]:w-40 min-[2560px]:h-24 flex-shrink-0 overflow-hidden border transition-all duration-300 rounded-sm cursor-pointer ${
                        currentActiveIdx === imgIdx
                          ? "border-black scale-95"
                          : "border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} thumbnail ${imgIdx + 1}`}
                        fill
                        sizes="160px"
                        loading="lazy"
                        unoptimized
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left px-1 sm:px-2 lg:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl font-light text-zinc-950 tracking-tight leading-tight">
                  {service.title}
                </h2>

                <p className="mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm min-[1920px]:text-base min-[2560px]:text-xl font-medium tracking-[0.18em] uppercase text-zinc-400 leading-snug">
                  {service.subtitle}
                </p>

                <p className="mt-4 md:mt-5 min-[1920px]:mt-7 text-zinc-500 leading-relaxed text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-2xl font-light max-w-xl min-[1920px]:max-w-2xl min-[2560px]:max-w-4xl">
                  {service.desc}
                </p>

                <div className="pt-2 md:pt-3 min-[1920px]:pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto mt-4 md:mt-6 min-[1920px]:mt-8 px-6 md:px-7 min-[1920px]:px-10 min-[2560px]:px-14 py-2.5 md:py-3 min-[1920px]:py-4 min-[2560px]:py-6 border border-black text-black text-xs md:text-sm min-[1920px]:text-base min-[2560px]:text-xl font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 text-center"
                    aria-label={`Get started with ${service.title}`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}