'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const teamMembers = [
  {
    name: 'Mary Brown',
    role: 'creative leader',
    description:
      'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum',
    image: '/CEO2.jpg',
  },
  {
    name: 'Ann Richmond',
    role: 'creative leader',
    description:
      'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum',
    image: '/CEO2.jpg',
  },
  {
    name: 'Bob Greenfield',
    role: 'programming guru',
    description:
      'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavidr from dolor amet iquam lorem bibendum',
    image: '/CEO2.jpg',
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
      <h2 className="text-3xl font-bold mb-1">Meet The Team</h2>
      <p className="text-sm text-gray-500 mb-10">
        Image by{' '}
        <a href="https://www.freepik.com" className="underline" target="_blank" rel="noreferrer">
          Freepik
        </a>
      </p>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p
                  className={`text-sm font-medium ${
                    member.role === 'programming guru' ? 'text-green-500' : 'text-lime-500'
                  } mb-3`}
                >
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook text-lime-500 hover:text-green-600"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter text-lime-500 hover:text-green-600"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram text-lime-500 hover:text-green-600"></i>
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
