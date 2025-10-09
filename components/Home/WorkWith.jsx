"use client";

import Image from "next/image";

export default function WhoWeWorkWith() {
  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Side: Text + Bottom Image */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We Work With
          </h2>

          <p className="text-sm leading-relaxed opacity-90">
            As a leading IT service company in Finland, Japan, India we've worked with over 2,000 
            businesses, from startups to enterprises, to deliver industry-leading solutions. 
            Our team at DataPollex offers a comprehensive range of IT services tailored to meet 
            your business requirements.
          </p>
          <p className="text-sm leading-relaxed opacity-90 mt-4">
            With a focus on innovation, we use the latest technologies and tools to develop 
            mobile applications that are engaging, user-friendly, and reliable. Our goal is to 
            help our clients achieve their business objectives by developing customized solutions 
            that meet their unique requirements.
          </p>

          {/* Added Image at the bottom */}
          <div className="relative w-full h-48 md:h-70 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Hero.png" // replace with your new image path
              alt="Team in action"
              fill
              className="object-contain h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Image + Cards */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Existing Image */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg -translate-y-8">
            <Image
              src="/Hero.png" // existing right-side image
              alt="Team at work"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="bg-[var(--MostUsed-color)] hover:bg-green-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
              Start Up Business
            </div>
            <div className="bg-[var(--MostUsed-color)] hover:bg-green-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
              Enterprise
            </div>
            <div className="bg-[var(--MostUsed-color)] hover:bg-green-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md col-span-2">
              We Have 50+ Successful Freelancers
            </div>
            <div className="bg-[var(--MostUsed-color)] hover:bg-green-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
              Small & Medium Business
            </div>
            <div className="bg-[var(--MostUsed-color)] hover:bg-green-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
              Agencies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
