"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const allProjects = [
  // Video Editing
  {
    category: "Video Editing",
    title: "Promo Video for Startup",
    description: "High-quality promotional video for a tech startup.",
    image: "/Screenshot 2025-10-08 065805.png",
  },
  {
    category: "Video Editing",
    title: "YouTube Content Editing",
    description: "Editing YouTube content with cinematic effects.",
    image: "/Screenshot 2025-10-08 065805.png",
  },

  // WordPress
  {
    category: "WordPress",
    title: "Corporate Website",
    description: "Professional WordPress site for a corporate client.",
    image: "/Screenshot 2025-10-08 065805.png",
  },
  {
    category: "WordPress",
    title: "E-commerce Website",
    description: "WooCommerce based online store for  based online storretail business.",
    image: "/Screenshot 2025-10-08 065805.png",
  },

  // Graphic Design
  {
    category: "Graphic Design",
    title: "Brand Identity Design",
    description: "Logo, brand colors, brand colors, and assets for a startup.",
    image: "/Screenshot 2025-10-08 065805.png",
  },
  {
    category: "Graphic Design",
    title: "Social Media Campaign",
    description: "Engaging graphics for Instagram and Facebook campaigns.",
    image: "/Screenshot 2025-10-08 065805.png",
  },
];

const categories = ["All", "Video Editing", "WordPress", "Graphic Design"];

export default function RecentProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = allProjects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Recent Projects</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our projects across Video Editing, WordPress Development, and Graphic Design.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white  shadow-md rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform"
            >
              <div className="w-full h-56 relative">
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
                <span className="inline-block mt-3 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-500">
                  {project.category}
                </span>
              </div>
              <div className="bg-black mb-0">
                <Link href='#' className="bg-black w-full text-white">View</Link>
              </div>
            </motion.div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-gray-500 col-span-full mt-4">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
