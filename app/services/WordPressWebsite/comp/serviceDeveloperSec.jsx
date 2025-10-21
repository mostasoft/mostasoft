"use client";

import React from "react";
import Image from "next/image";

const WordPressSection = () => {
  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - WordPress Example Image */}
        <div className="flex justify-center">
          <Image
            src="/wordpress-team.webp" // 🔹 replace with your WordPress image in /public
            alt="WordPress Development Team"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-blue-500 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-blue-500"></span>
            Websites That Work On WordPress
          </p>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-snug">
            Custom WordPress Development <br /> For Your Business
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Build a scalable, secure, and user-friendly website using WordPress. Our team creates custom themes, 
            plugins, and full-featured websites tailored to your brand’s requirements.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From blogs to e-commerce stores, we help you maximize your online presence with fast, reliable, and visually appealing WordPress sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WordPressSection;
