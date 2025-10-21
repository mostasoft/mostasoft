"use client";

import { useState } from "react";
import Image from "next/image";

const wordpressProjects = [
  { title: "Corporate Website", description: "Professional WordPress site for a corporate client.", image: "/wordpress1.png", category: "Business" },
  { title: "E-commerce Store", description: "WooCommerce online store for retail business.", image: "/wordpress2.png", category: "E-commerce" },
  { title: "Portfolio Website", description: "Showcase website for creative professionals.", image: "/wordpress3.png", category: "Portfolio" },
  { title: "Blog Website", description: "WordPress blog for travel and lifestyle.", image: "/wordpress4.png", category: "Blog" },
  { title: "Educational Platform", description: "Online learning platform built with WordPress LMS plugins.", image: "/wordpress5.png", category: "Education" },
  { title: "Restaurant Website", description: "Restaurant website with menu, booking, and gallery.", image: "/wordpress6.png", category: "Food" },
];

const wordpressCategories = ["All", "Business", "E-commerce", "Portfolio", "Blog", "Education", "Food"];

export default function WordPressProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = wordpressProjects
    .filter((project) => selectedCategory === "All" ? true : project.category === selectedCategory)
    .filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">WordPress Projects</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Explore our recent WordPress development projects across various industries.</p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search WordPress projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-8"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {wordpressCategories.map((category) => (
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
