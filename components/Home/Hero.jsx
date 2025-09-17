"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import HeroImag from "next/image";
import Image from "next/image";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="h-[70vh]">
      <Swiper
        className="h-full w-full"
        speed={1000}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide className="">
          <div>
            <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Left: Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Your Website with Confidence
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                  We provide modern web development, digital marketing, and
                  excellent support to help your business grow online.
                </p>
               <div className="flex space-x-3">
                  <button className="px-6 py-3 rounded-xl bg-[var(--MostUsed-color)] text-white font-semibold hover:bg-purple-700 transition">
                  Explore More
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-purple-700 transition">
                  Book A Free Consultation
                </button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex-1">
                <Image
                  src="/Hero.png"
                  alt="Team working illustration"
                  width={930}
                  height={768}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div>
            <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Left: Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Your Website with Confidence
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                  We provide modern web development, digital marketing, and
                  excellent support to help your business grow online.
                </p>
                <div className="flex space-x-3">
                  <button className="px-6 py-3 rounded-xl bg-[var(--MostUsed-color)] text-white font-semibold hover:bg-purple-700 transition">
                  Explore More
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-purple-700 transition">
                  Book A Free Consultation
                </button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex-1">
                <Image
                  src="/Hero.png"
                  alt="Team working illustration"
                  width={930}
                  height={768}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div>
            <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Left: Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Build Your Website with Confidence
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                  We provide modern web development, digital marketing, and
                  excellent support to help your business grow online.
                </p>
               <div className="flex space-x-3">
                  <button className="px-6 py-3 rounded-xl bg-[var(--MostUsed-color)] text-white font-semibold hover:bg-purple-700 transition">
                  Explore More
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-purple-700 transition">
                  Book A Free Consultation
                </button>
                </div>


              </div>

              {/* Right: Image */}
              <div className="flex-1">
                <Image
                  src="/Hero.png"
                  alt="Team working illustration"
                  width={930}
                  height={768}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </section>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
