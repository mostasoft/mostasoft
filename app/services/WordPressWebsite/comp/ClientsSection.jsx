"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Pexpay", src: "/pexpay.png" },
  { name: "Ledn", src: "/ledn.png" },
  { name: "AdaNFT", src: "/adanft.png" },
  { name: "Rakuten", src: "/rakuten.png" },
];

const Clients = () => {
  return (
    <section className="w-full bg-white py-10 overflow-hidden relative">
      {/* Decorative background blobs for consistency */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex items-center gap-10 relative z-10">
        {/* Left side "OUR CLIENTS" */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 relative px-6 py-4 text-white font-semibold text-lg uppercase tracking-wide skew-x-[-12deg] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-300"></div>
          <span className="skew-x-[12deg] flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white rounded-sm"></span>
            Our Clients
          </span>
        </div>

        {/* Animated Logos */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-16 animate-slide">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={index + 'dup'}
                className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for smooth infinite slide */}
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
