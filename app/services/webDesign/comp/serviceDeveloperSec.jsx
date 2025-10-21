"use client";

import React from "react";
import Image from "next/image";

const WebDesignTeamSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 relative z-10">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/Screenshot 2025-10-08 065805.png" // 🟢 replace with your image path (e.g. /ServiceHero.png)
            alt="Web Design Team"
            width={600}
            height={500}
            className="rounded-3xlh-[400px] w-full object-cover bg-center shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-green-600"></span>
            Creative Websites That Drive Results
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-snug bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">
            Designing Stunning <br /> & User-Centric Websites
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Transform your online presence with MostaSoft’s expert web design services.
            Our team focuses on creating intuitive, responsive, and visually appealing websites
            that engage users and elevate your brand’s digital experience.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            From concept to launch, we ensure every design element aligns with your goals,
            delivering fast, modern, and conversion-optimized designs that grow your business.
          </p>

          <div className="pt-8">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-600 hover:to-green-700">
              Get a Free Design Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignTeamSection;
