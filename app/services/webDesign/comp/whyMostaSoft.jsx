"use client";

import Image from "next/image";

export default function WhyChooseMostaSoft() {
  return (
    <section className="bg-[#0071CE] text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h3 className="text-white/80 font-semibold flex items-center gap-2 uppercase tracking-wide">
            <span className="border border-white w-4 h-4 inline-block"></span>
            Why Choose MostaSoft
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            For Web Design Services
          </h2>
          <ul className="mt-6 space-y-4 text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-white">›</span>
              We follow high recruitment standards and provide highly skilled designers & developers to build stunning websites.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">›</span>
              Our team delivers scalable, secure, and user-friendly websites using modern technologies to boost your online presence.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">›</span>
              We serve clients globally—including Bangladesh, India, Japan, and Finland—with top-performing web design solutions.
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <Image
              src="/Hero.png"
              alt="Web Design Illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
