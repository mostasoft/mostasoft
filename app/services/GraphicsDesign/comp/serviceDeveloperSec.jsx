"use client";

import React from "react";
import Image from "next/image";

const GraphicDesignSection = () => {
  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Single Composite Image */}
        <div className="flex justify-center">
          <Image
            src="/graphic-design-team.webp" // 🔹 replace with your graphic design team image in /public
            alt="Graphic Design Team"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-blue-500 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-blue-500"></span>
            Creativity To Drive Your Brand Forward
          </p>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-snug">
            Stunning Designs With <br /> Dedicated Graphic Designers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Transform your brand identity with our professional graphic design services. 
            Our team of skilled designers creates visually compelling logos, branding, and marketing materials 
            that capture attention and communicate your message effectively.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From concept to final design, we guide you through the creative process, ensuring high-quality, impactful visuals.
            Elevate your brand with designs that stand out in a crowded market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
