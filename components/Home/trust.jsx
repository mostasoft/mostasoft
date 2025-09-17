"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechCorp",
    review:
      "Working with this team was a wonderful experience. They delivered the project on time with outstanding quality. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Founder, StartupHub",
    review:
      "They truly understood our business requirements and turned them into an amazing product. Excellent support throughout the journey.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Manager, InnovateX",
    review:
      "Professional, creative, and always responsive. The development process was smooth and the outcome exceeded our expectations.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Sophia Brown",
    role: "CTO, BrightApps",
    review:
      "The team exceeded our expectations with their expertise and timely delivery. Truly reliable partners.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Founder, CloudBase",
    review:
      "Amazing communication and top-notch development skills. We’ll definitely work together again.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Product Manager, NextGen",
    review:
      "Their design and development approach brought our ideas to life seamlessly. Couldn’t be happier!",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

export default function ClientReviewSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          What People Are{" "}
          <span className="text-[var(--MostUsed-color)]">Saying About MostaSoft</span>
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {reviews.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center h-full">
                {/* Profile Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full border-4 border-[var(--MostUsed-color)] mb-4"
                />

                {/* Review */}
                <p className="text-gray-600 italic mb-4 text-sm">
                  "{client.review}"
                </p>

                {/* Name & Role */}
                <h4 className="font-semibold text-2xl text-gray-800">{client.name}</h4>
                <p className="text-gray-500 text-xs">{client.role}</p>
                <div className="flex mt-2 justify-center space-x-2">
                  <a
                    href="#"
                    className="p-2 bg-[var(--MostUsed-color)] text-sm rounded-full hover:bg-black transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[var(--MostUsed-color)] text-sm rounded-full hover:bg-black  transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[var(--MostUsed-color)] text-sm  rounded-full hover:bg-black  transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[var(--MostUsed-color)] text-sm rounded-full hover:bg-black  transition"
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
