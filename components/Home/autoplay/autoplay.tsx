// components/MySwiper.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default function MySwiper() {
  return (
    <div className="items-center p-4">
      <div className="flex items-center justify-center ">
        <h1 className="text-[50px] font-bold">Trusted By The Best</h1>
      </div>

      <div className="w-full">
        <Swiper
          speed={1000}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000, 
             disableOnInteraction: false,// 3 seconds disableOnInteraction: false, // keep autoplay after swiping
          }}
          className="h-40"
        >
          <SwiperSlide>
             <div className="bg-cover h-40 text-white flex items-center justify-center">
              <Image src="/Images/trust.png" alt="alt" width ={1000} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="  h-40 text-white  flex items-center justify-center">
               <Image src="/Images/trust.png" alt="alt" width ={1000} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-40 text-white  flex items-center justify-center">
               <Image src="/Images/trust.png" alt="alt" width ={1000} height={100} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
