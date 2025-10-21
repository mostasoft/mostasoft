"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ABHero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/Screenshot 2025-10-08 065805.png",
    "/Screenshot 2025-10-08 065805.png",
    "/Screenshot 2025-10-08 065805.png",
  ];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[90vh] px-6 sm:px-10">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          We provide the best <span className="text-blue-400">Digital</span> <br />
          Services worldwide
        </h1>
        <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
          Delivering high-quality solutions to elevate your business and create lasting impact.
        </p>

        {/* Hero Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:border-blue-500 font-semibold px-6 py-3 rounded-md transition">
           Book A Free Consultation
          </button>
        </div>
      </div>

      {/* Slider Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-md shadow-md transition z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-md shadow-md transition z-20"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}
