// app/services/page.jsx

import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Tech & Audio Services | Zoe Light Pakistan",
  description:
    "Professional electronics services in Pakistan — personal shopping consultation, sound calibration, custom charging solutions, smart home audio integration, accessory fitting, and after-sales support by Zoe Light.",
  keywords: [
    "electronics services Pakistan",
    "headphone consultation Pakistan",
    "speaker setup Lahore",
    "smart home audio Pakistan",
    "charging station setup",
    "device warranty support",
    "gadget accessory fitting",
    "Zoe Light services",
    "electronics installation Lahore",
    "audio calibration Pakistan",
  ],
  openGraph: {
    title: "Tech & Audio Services | Zoe Light Pakistan",
    description:
      "From sound calibration to smart home integration — explore Zoe Light's premium electronics services crafted for tech enthusiasts.",
    url: "https://zoelight.com/services",
    siteName: "Zoe Light",
    images: [
      {
        url: "https://zoelight.com/services.webp",
        width: 1200,
        height: 630,
        alt: "Zoe Light Tech & Audio Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech & Audio Services | Zoe Light Pakistan",
    description:
      "Sound calibration, smart home integration, warranty support and more — premium electronics services by Zoe Light.",
    images: ["https://zoelight.com/services.webp"],
  },
  alternates: {
    canonical: "https://zoelight.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Consumer Electronics Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Zoe Light",
    url: "https://zoelight.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zoe Light Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Shopping Consultation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sound Calibration & Setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Charging Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Home Audio Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protective Gear & Accessory Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warranty & After-Sales Support",
        },
      },
    ],
  },
};

function ServicesPageFallback() {
  return (
    <main className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 min-[1920px]:px-24 min-[2560px]:px-32">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] items-center justify-center">
        <div className="h-8 w-8 rounded-full border border-zinc-200 border-t-zinc-900 animate-spin" />
      </div>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <Suspense fallback={<ServicesPageFallback />}>
        <ServicesClient />
      </Suspense>
    </>
  );
}