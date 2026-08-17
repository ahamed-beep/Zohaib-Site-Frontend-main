import Image from "next/image";

const services = [
  {
    title: "Wireless Headphones",
    subtitle: "Premium Sound Quality",
    description:
      "Immerse yourself in studio-grade audio with advanced noise-cancelling drivers calibrated for natural sound. Precision-tuned acoustics correct frequency response and soundstage, delivering uncompromised listening fidelity for everyday use.",
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1400&h=1000&auto=format&fit=crop",
    reverse: false,
    ratio: "aspect-[4/3]",
  },
  {
    title: "Smart Watch",
    subtitle: "Fitness & Lifestyle Tracker",
    description:
      "A sleek, lightweight design built for all-day comfort. Track your heart rate, sleep, and activity with precision sensors, while a vibrant display keeps you connected in style.",
    img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=1400&h=1000&auto=format&fit=crop",
    reverse: true,
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bluetooth Speaker",
    subtitle: "Portable High-Fidelity Audio",
    description:
      "Compact yet powerful, this speaker delivers rich bass and crystal-clear highs. Weatherproof design and long battery life make it perfect for any adventure, indoors or out.",
    img: "https://images.unsplash.com/photo-1511499271651-073325718d90?q=80&w=1400&h=1000&auto=format&fit=crop",
    reverse: false,
    ratio: "aspect-[3/2]",
  },
  {
    title: "Gaming Laptop",
    subtitle: "High-Performance Computing",
    description:
      "Built for speed and power, featuring a high-refresh display and advanced cooling for sustained performance. Handles demanding games and creative workloads with ease.",
    img: "https://images.unsplash.com/photo-1771014817844-327a14245bd1?q=80&w=1400&h=1000&auto=format&fit=crop",
    reverse: true,
    ratio: "aspect-[3/2]",
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="Our services"
      className="bg-white py-12 md:py-16 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 min-[3200px]:py-40 space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24 min-[1920px]:space-y-32 min-[2560px]:space-y-40 min-[3200px]:space-y-52 overflow-x-hidden"
    >
      <div className="mx-auto text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32">
        <h2 className="text-xl sm:text-2xl md:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl min-[3200px]:text-7xl font-light text-zinc-900 tracking-tight leading-snug">
          Featured Products
        </h2>
        <div className="w-12 min-[1920px]:w-16 min-[2560px]:w-20 min-[3200px]:w-28 h-[1px] bg-zinc-300 mx-auto mt-4 md:mt-6 min-[2560px]:mt-8" />
      </div>

      {services.map((service, i) => (
        <div
          key={i}
          className={`flex flex-col ${
            service.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px] mx-auto px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-20 min-[3200px]:px-28 gap-8 md:gap-12 lg:gap-16 min-[1920px]:gap-20`}
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div
              className={`w-full ${service.ratio} bg-zinc-50 rounded-sm overflow-hidden flex items-center justify-center`}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={1400}
                height={1000}
                priority={i === 0}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-2 md:py-4">
            <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl min-[3200px]:text-6xl font-light text-zinc-950 tracking-tight leading-tight whitespace-nowrap">
              {service.title}
            </h3>

            <h4 className="mt-2 md:mt-3 text-[10px] sm:text-[11px] md:text-[10px] lg:text-xs xl:text-sm min-[1920px]:text-base min-[2560px]:text-lg min-[3200px]:text-xl font-medium uppercase tracking-[0.18em] text-zinc-400 whitespace-nowrap">
              {service.subtitle}
            </h4>

            <p
              className="
                mt-3 sm:mt-4 md:mt-4 lg:mt-5
                text-zinc-500
                text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px]
                min-[1920px]:text-lg min-[2560px]:text-xl min-[3200px]:text-2xl
                leading-6 md:leading-6 lg:leading-7 min-[1920px]:leading-8
                font-light
                max-w-full sm:max-w-[95%] md:max-w-[430px] lg:max-w-[500px] xl:max-w-[560px]
                min-[1920px]:max-w-[700px] min-[2560px]:max-w-[850px]
              "
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}