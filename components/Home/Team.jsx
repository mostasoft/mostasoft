"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const teamMembers = [
  {
    name: "Mary Brown",
    role: "Creative leader",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum",
    image: "/CEO2.jpg",
  },
  {
    name: "Ann Richmond",
    role: "Creative leader",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum",
    image: "/CEO2.jpg",
  },
  {
    name: "Bob Greenfield",
    role: "Programming guru",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum",
    image: "/CEO2.jpg",
  },
];

export default function MeetTheTeam() {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Freeze the current translation
    const currentTranslate = swiper.getTranslate();
    swiper.setTranslate(currentTranslate);

    // Stop autoplay
    swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Resume autoplay
    swiper.autoplay.start();
  };

  return (
    <section className="py-12 px-4 text-center overflow-hidden">
      <h2 className="text-3xl  font-bold mb-10">Meet The Team</h2>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
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
              <div className="bg-white shadow-md rounded-lg w-72 p-6 text-center mx-auto">
    
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-md mx-auto grayscale"
                  />
                </div>
                <h3 className="text-lg text-black font-bold">{member.name}</h3>
                <p
                  className={`text-sm font-medium ${
                    member.role === "programming guru"
                      ? "text-[var(--MostUsed-color)]"
                      : "text-[var(--MostUsed-color)]"
                  } mb-3`}
                >
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="p-2 text-sm bg-[var(--MostUsed-color)] rounded-full hover:bg-white/30 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="p-2  text-sm bg-[var(--MostUsed-color)]  rounded-full hover:bg-white/30 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-sm bg-[var(--MostUsed-color)]  rounded-full hover:bg-white/30 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-sm bg-[var(--MostUsed-color)] rounded-full hover:bg-white/30 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
