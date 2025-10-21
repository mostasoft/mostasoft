"use client";

import { useState } from "react";
import Image from "next/image";

const graphicProjects = [
  { title: "Brand Identity", description: "Logo and brand assets for a startup.", image: "/graphic1.png", category: "Branding" },
  { title: "Social Media Campaign", description: "Engaging social media graphics.", image: "/graphic2.png", category: "Social Media" },
  { title: "Marketing Collateral", description: "Flyers, posters, and promotional designs.", image: "/graphic3.png", category: "Marketing" },
  { title: "UI Design", description: "User interface design for web and mobile.", image: "/graphic4.png", category: "UI/UX" },
  { title: "Illustrations", description: "Custom illustrations and vector art.", image: "/graphic5.png", category: "Illustration" },
  { title: "Packaging Design", description: "Creative packaging for product branding.", image: "/graphic6.png", category: "Packaging" },
];

const graphicCategories = ["All", "Branding", "Social Media", "Marketing", "UI/UX", "Illustration", "Packaging"];

export default function GraphicDesignProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = graphicProjects
    .filter((project) => selectedCategory === "All" ? true : project.category === selectedCategory)
    .filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Graphic Design Projects</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Explore our recent graphic design projects across branding, marketing, and illustration.</p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search graphic design projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-8"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {graphicCategories.map((category) => (
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
          {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-full h-48 relative">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <span className="text-blue-600 font-semibold text-sm">{project.category}</span>
              </div>
            </div>
          )) : <p className="text-gray-500 col-span-full mt-4">No projects found.</p>}
        </div>
      </div>
    </section>
  );
}
