"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
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
    <div className="h-[60vh] relative">
      <Swiper
        className="h-full w-full"
        speed={1000}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex justify-center p-8 bg-gray-100 items-center h-full w-full">
          <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full h-full">
            <div className="w-full  justify-center text-black  h-full ">
              <div className=" space-y-5">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Fuel An Idea With The Technology & Build A Fire</h1>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis repudiandae vitae eos, rerum officia quo.
                </div>
                <div className="flex justify-center  gap-4 mt-15">
                  <Link
                    href="#"
                    className=" rounded-xl btn-glass hover:text-red-500 font-bold hover:bg-neutral-300 hover:translate-x-2 transition"
                  >
                    Explore More
                  </Link>
                  <Link
                    href="#"
                    className=" btn-glass rounded-xl font-bold hover:bg-neutral-300 hover:text-red-500 hover:translate-x-2 transition duration-200"
                  >
                    Book A Free Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center h-full">
              <Image width={500} className="w-[300px] bg-cover" height={500} alt="Hero" src="/Hero.png" />
            </div>
          </div>
        </SwiperSlide>

        {/* Autoplay progress circle */}
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
