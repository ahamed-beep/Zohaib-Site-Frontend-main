import { Suspense } from "react";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";
import BrandsSinglePage from "@/Components/Brands/BrandsSinglePage";

export const metadata = {
  title: "Top Electronics Brands | Zoe Light",
  description:
    "Explore Zoe Light's authorized premium brand partners — JBL, Sony, Bose, Anker, Sennheiser, Beats, Marshall, Skullcandy, Logitech, and Ultimate Ears. World-class audio and electronics available in Pakistan.",
  keywords: [
    "JBL Pakistan",
    "Sony headphones Pakistan",
    "Bose speakers Pakistan",
    "Anker chargers Pakistan",
    "Sennheiser headphones",
    "Beats earbuds",
    "Marshall speakers",
    "Skullcandy Pakistan",
    "Logitech accessories",
    "Ultimate Ears speakers",
    "Zoe Light brands",
  ],
  openGraph: {
    title: "Top Electronics Brands | Zoe Light",
    description:
      "Authorized premium partner for the world's leading audio and electronics brands. Browse JBL, Sony, Bose, Anker, and more at Zoe Light.",
    url: "https://zoelight.com/brands",
    siteName: "Zoe Light",
    images: [
      {
        url: "https://zoelight.com/brands.webp",
        width: 1200,
        height: 630,
        alt: "Zoe Light Premium Electronics Brands",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Electronics Brands | Zoe Light",
    description:
      "Authorized premium partner for the world's leading audio and electronics brands.",
    images: ["https://zoelight.com/brands.webp"],
  },
  alternates: {
    canonical: "https://zoelight.com/brands",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const brandsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Top Electronics Brands | Zoe Light",
  description:
    "Authorized premium partner for JBL, Sony, Bose, Anker, Sennheiser, Beats, Marshall, Skullcandy, Logitech, and Ultimate Ears in Pakistan.",
  url: "https://zoelight.com/brands",
  publisher: {
    "@type": "Organization",
    name: "Zoe Light",
    url: "https://zoelight.com",
  },
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandsJsonLd),
        }}
      />

      <main className="w-full min-h-screen overflow-x-hidden bg-white text-zinc-900 antialiased">
        <Navbar />

        <Suspense
          fallback={
            <div className="w-full min-h-screen bg-white" />
          }
        >
          <BrandsSinglePage />
        </Suspense>

        <Footer />
      </main>
    </>
  );
}