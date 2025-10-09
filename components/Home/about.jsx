'use client';

import React from "react";
import Image from "next/image";

export default function About() {
  const features = [
    { icon: "💻", title: "Custom Software Development", desc: "Tailored solutions to meet your business goals." },
    { icon: "⚡", title: "High Performance", desc: "Optimized solutions for fast, scalable applications." },
    { icon: "🌐", title: "Digital Marketing Integration", desc: "Seamlessly grow your audience with smart digital strategies." },
    { icon: "🛡️", title: "Reliable Support", desc: "24/7 assistance to ensure your software runs smoothly." },
  ];

  return (
    <section className="bg-green-50 py-20 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-green-700 mb-12">
        About MostaSoft
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/Hero.png" // Replace with your actual photo path
            alt="MostaSoft Team"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Column - Text */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            MostaSoft is dedicated to building modern software solutions that empower businesses to grow and succeed.
            Our team delivers high-quality web applications, innovative digital solutions, and reliable support for every project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
              Explore More
            </button>
            <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow border border-green-600 hover:bg-green-50 transition">
              Contact Us
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="text-green-600 text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
