"use client";

import Image from "next/image";

const webDesignProjects = [
  {
    title: "Corporate Website Redesign",
    description: "Modern, responsive, and visually engaging corporate website redesign.",
    image: "/Hero.png",
  },
  {
    title: "E-commerce Platform",
    description: "User-friendly online store with seamless checkout and responsive design.",
    image: "/Hero.png",
  },
  {
    title: "Portfolio Website",
    description: "Showcase your brand and projects with a clean, professional design.",
    image: "/Hero.png",
  },
  {
    title: "SaaS Landing Page",
    description: "Conversion-focused landing page to drive product signups.",
    image: "/Hero.png",
  },
  {
    title: "Agency Website",
    description: "Interactive and visually appealing website for creative agencies.",
    image: "/Hero.png",
  },
  {
    title: "Blog & Content Platform",
    description: "Responsive and SEO-friendly platform for blogging and content sharing.",
    image: "/Hero.png",
  },
];

export default function RecentWebDesignProjects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0071CE] mb-4">
          Our Recent Web Design Projects
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We craft stunning websites that are responsive, user-friendly, and tailored to each client’s brand and goals.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDesignProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#E6F0FF] shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#0071CE] mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
