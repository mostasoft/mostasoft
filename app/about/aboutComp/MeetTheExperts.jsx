"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mostakin Haque",
    role: "Creative Leader",
    description:
      "Leading the creative vision with innovative ideas and execution for all digital projects.",
    image: "/me.jpg",
  },
  {
    name: "Akterul Haque",
    role: "Senior Developer",
    description:
      "Expert in web development, ensuring clean, scalable, and modern code architecture.",
    image: "/aktarul.jpg",
  },
  {
    name: "Payel Haque",
    role: "Content Specialist",
    description:
      "Crafting engaging and SEO-friendly content that drives results for brands.",
    image: "/payel.jpg",
  },
];

export default function MeetTheExperts() {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.autoplay.start();
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gray-50 text-center">
      {/* Decorative green blobs */}
      <div className="absolute -top-32 -left-24 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet The Team</h2>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {teamMembers.concat(teamMembers).map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg rounded-2xl p-6 mx-auto w-72 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-4 border-green-500">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-xl mx-auto transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[var(--MostUsed-color)] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
