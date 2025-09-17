"use client";

import React from "react";
import Image from "next/image";

const DevelopersSection = () => {
  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Single Composite Image */}
        <div className="flex justify-center">
          <Image
            src="/web-development-team.webp" // 🔹 place your uploaded image in /public/team-section.webp
            alt="Development Team"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-red-500 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-red-500"></span>
            Website To Drive Your Business Forward
          </p>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-snug">
            Building Website With <br /> Dedicated Web Developers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Transform your website into a user-friendly platform with our expert website development services. 
            Our team of dedicated website developers and designers are committed to building seamless digital 
            solutions that unlock the full potential of your business.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From concept to deployment, we guide you through the process, ensuring a future-proof solution. 
            Elevate your business with our scalable web solutions today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
