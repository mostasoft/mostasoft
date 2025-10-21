"use client";

import { useState } from "react";
import Image from "next/image";

const allProjects = [
  {
    title: "Education Consultancy Platform",
    description: "Business automation for international education consultancies.",
    image: "/Hero.png",
    category: "Web Development",
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "Multilingual tour platform tailored for outbound Chinese travelers.",
    image: "/Hero.png",
    category: "Web Development",
  },
  {
    title: "Classter – Education Tech Platform",
    description: "Modernizing education management with integrated tech solutions.",
    image: "/Hero.png",
    category: "Web Development",
  },
  {
    title: "Cryptomus Payment Gateway",
    description: "Secure crypto payment solutions for modern businesses.",
    image: "/Hero.png",
    category: "Crypto",
  },
  {
    title: "Sharp Archive – eDiscovery Platform",
    description: "Digital legal discovery and archiving made simple.",
    image: "/Hero.png",
    category: "Enterprise",
  },
  {
    title: "Nova Overseas – Nova Group",
    description: "Global engineering and contracting firm with international reach.",
    image: "/Hero.png",
    category: "Corporate",
  },
];

const categories = ["All", "Web Development", "Crypto", "Enterprise", "Corporate"];

export default function RecentProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We’ve worked on innovative platforms across industries including education, crypto, travel, and business automation.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl"
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <span className="text-blue-600 font-semibold text-sm">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
