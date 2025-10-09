"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Pexpay", src: "/pexpay.png" },
  // Add more if needed
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#111] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-10 px-6">
        {/* Left side "OUR CLIENTS" */}
        <div className="bg-[#1a1a1a] relative px-6 py-4 text-white font-bold text-lg uppercase tracking-wide skew-x-[-12deg]">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <span className="skew-x-[12deg] flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-red-500"></span>
            Our Clients
          </span>
        </div>

        {/* Swiper Logos */}
        <div className="relative flex-1 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={40}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center px-4"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
