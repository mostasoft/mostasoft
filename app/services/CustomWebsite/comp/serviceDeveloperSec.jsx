"use client";

import React from "react";
import Image from "next/image";

const WebDevTeamSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 relative z-10">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/web-development-team.webp"
            alt="Web Development Team"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <p className="text-blue-600 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-blue-600"></span>
            Websites That Drive Your Business Forward
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
            Building Custom Websites <br /> With Dedicated Web Developers
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Transform your website into a user-friendly platform with our expert web development services. 
            Our team of dedicated developers and designers creates seamless digital solutions that unlock the full potential of your business.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From concept to deployment, we guide you through every step, ensuring a future-proof solution. 
            Elevate your business with scalable web solutions today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              Get Started Free
            </button>
            <button className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevTeamSection;
