"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const brandsData = [
  {
    id: "jbl",
    name: "JBL",
    tagline: "Legendary Sound, Engineered for Everyone",
    description:
      "For decades, JBL has been synonymous with powerful, room-filling sound — from professional stage speakers to everyday portable audio. Every JBL product is built around a simple philosophy: bold bass, crystal-clear mids, and a listening experience that turns heads. Whether it's a party speaker, wireless earbuds, or a soundbar for movie nights, JBL brings studio-grade engineering into products designed for real life.",
    image:
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sony",
    name: "Sony",
    tagline: "Precision Audio, Trusted Worldwide",
    description:
      "Sony's audio division draws on decades of consumer electronics leadership to deliver headphones and speakers that balance clarity, comfort, and cutting-edge noise cancellation. From industry-leading ANC headphones to compact travel speakers, every Sony product reflects meticulous engineering and a commitment to true-to-life sound reproduction that audiophiles and casual listeners alike can appreciate.",
    image:
      "https://images.unsplash.com/photo-1584947113970-7d730f565515?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bose",
    name: "Bose",
    tagline: "The Art of Quiet, The Power of Sound",
    description:
      "Bose built its name on a single obsession: making sound better through smarter engineering, not bigger hardware. Its speakers and headphones are known for warm, natural tone and industry-defining noise cancellation, designed to disappear into your day while the sound stays front and center. Bose products are made for people who want premium audio without the fuss.",
    image:
      "https://images.unsplash.com/photo-1764467522954-c8a2d376f0c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "anker",
    name: "Anker",
    tagline: "Power That Keeps Up With You",
    description:
      "Anker has redefined what people expect from chargers and power banks — fast, safe, and built to last. With proprietary charging technology packed into sleek, portable designs, Anker keeps every device powered up whether you're commuting, traveling, or working from a cafe. It's the accessory brand trusted by millions for dependable everyday power.",
    image:
      "https://images.unsplash.com/photo-1635861321688-b63d28749a82?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sennheiser",
    name: "Sennheiser",
    tagline: "German Precision in Every Frequency",
    description:
      "Sennheiser has spent over 75 years perfecting the science of sound, earning a reputation among professionals and audiophiles for uncompromising audio fidelity. From studio-reference headphones to everyday wireless earbuds, every product is tuned with obsessive attention to detail, delivering a listening experience defined by clarity, depth, and honest reproduction.",
    image:
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "beats",
    name: "Beats",
    tagline: "Sound That Moves You",
    description:
      "Beats built its identity on punchy bass, bold design, and a sound signature made for modern music. Popular among creators, athletes, and everyday listeners, Beats headphones and earbuds combine seamless device integration with a distinct style statement — proving that great sound and great looks were never meant to be separate.",
    image:
      "https://images.unsplash.com/photo-1631035012469-751baca1d4a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "marshall",
    name: "Marshall",
    tagline: "Rock-Inspired Sound, Reimagined",
    description:
      "Born from decades of amplifier heritage on the world's biggest stages, Marshall brings that same raw, rich sound into portable speakers and headphones. With signature vintage styling and a tone built for music lovers, Marshall products deliver a warm, powerful sound experience that pays tribute to its rock-and-roll roots.",
    image:
      "https://images.unsplash.com/photo-1679652558331-a2384fb347ec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "skullcandy",
    name: "Skullcandy",
    tagline: "Bold Sound for Bold Lifestyles",
    description:
      "Skullcandy built its name in action sports and street culture, creating headphones and earbuds designed to keep up with an active, on-the-go lifestyle. With durable builds, punchy sound, and unmistakable style, Skullcandy products are made for listeners who want their audio gear to be as expressive as their playlist.",
    image:
      "https://images.unsplash.com/photo-1529911684551-bfe3a8553f19?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "logitech",
    name: "Logitech",
    tagline: "Everyday Tech, Engineered Right",
    description:
      "Logitech has long been a trusted name in accessories, and its audio and charging lineup carries the same reputation for reliability and thoughtful design. From cables to compact speakers, Logitech focuses on practical engineering that just works — built for people who want dependable tech without unnecessary complexity.",
    image:
      "https://images.unsplash.com/photo-1575543419095-0b090628213f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ultimate-ears",
    name: "Ultimate Ears",
    tagline: "Portable Sound, Uncompromised",
    description:
      "Ultimate Ears made its mark with rugged, waterproof speakers built for adventure without sacrificing sound quality. Whether it's a poolside gathering or a hike into the backcountry, Ultimate Ears speakers deliver 360-degree sound in a durable package designed to go wherever the music takes you.",
    image:
      "https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?auto=format&fit=crop&w=1200&q=80",
  },
];

const brandIdToName = {
  jbl: "JBL",
  sony: "Sony",
  bose: "Bose",
  anker: "Anker",
  sennheiser: "Sennheiser",
  beats: "Beats",
  marshall: "Marshall",
  skullcandy: "Skullcandy",
  logitech: "Logitech",
  "ultimate-ears": "Ultimate Ears",
};

const BrandsSinglePage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, searchParams]);

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white antialiased">
      {brandsData.map((brand, index) => {
        const isOdd = index % 2 !== 0;
        const brandName = brandIdToName[brand.id] || brand.name;
        const catalogHref = `/products?brand=${encodeURIComponent(brandName)}`;

        return (
          <section
            key={brand.id}
            id={brand.id}
            className="w-full flex flex-col md:flex-row items-stretch border-b border-zinc-100 overflow-hidden"
          >
            {/* IMAGE COLUMN */}
            <div
              className={`w-full md:w-1/2 min-h-[300px] sm:min-h-[380px] md:min-h-0 py-8 px-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center bg-zinc-50/50 relative group select-none overflow-hidden ${
                isOdd
                  ? "md:order-last border-b md:border-b-0 md:border-l border-zinc-100/70"
                  : "border-b md:border-b-0 md:border-r border-zinc-100/70"
              }`}
            >
              <img
                src={brand.image}
                alt={`${brand.name} Product Lineup`}
                loading={index < 2 ? "eager" : "lazy"}
                className="w-full h-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] aspect-[4/3] object-cover rounded-sm transition-transform duration-[1.5s] ease-out will-change-transform lg:group-hover:scale-105"
              />
            </div>

            {/* EDITORIAL CONTENT COLUMN */}
            <div
              className={`w-full md:w-1/2 px-5 py-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center ${
                isOdd ? "bg-zinc-50/15" : "bg-white"
              }`}
            >
              {/* Partner Label */}
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-400 mb-2.5 font-bold uppercase block">
                Authorized Premium Partner
              </span>

              {/* Brand Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-zinc-950 mb-2 uppercase">
                {brand.name}
              </h2>

              {/* Tagline */}
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.15em] text-zinc-500 mb-5 font-semibold uppercase max-w-md leading-relaxed">
                {brand.tagline}
              </p>

              {/* Accent Divider */}
              <div className="w-8 h-[1px] bg-zinc-950 mb-5"></div>

              {/* Description */}
              <p className="text-zinc-600 text-xs sm:text-sm leading-6 sm:leading-7 lg:leading-8 font-light tracking-wide max-w-prose text-left mb-6 sm:mb-8">
                {brand.description}
              </p>

              {/* CTA Button */}
              <div className="pt-1">
                <Link
                  href={catalogHref}
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border border-zinc-950 text-zinc-950 bg-transparent hover:bg-zinc-950 hover:text-white transition-all duration-300 ease-in-out text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold uppercase rounded-none shadow-sm active:scale-[0.98] text-center"
                >
                  View {brand.name} Catalog
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BrandsSinglePage;