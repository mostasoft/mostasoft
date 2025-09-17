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
    <section className="w-full bg-[#111] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-10">
        
        {/* Left side "OUR CLIENTS" */}
        <div className="bg-[#1a1a1a] relative px-6 py-4 text-white font-bold text-lg uppercase tracking-wide skew-x-[-12deg]">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <span className="skew-x-[12deg] flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-red-500"></span>
            Our Clients
          </span>
        </div>

        {/* Animated Logos */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-16 animate-slide">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center min-w-[150px]">
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
              <div key={index + "dup"} className="flex items-center justify-center min-w-[150px]">
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
    </section>
  );
};

export default Clients;
