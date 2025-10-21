// app/components/RecentProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Education Consultancy Platform",
    description: "Business automation for international education consultancies.",
    image: "/Hero.png",
    url: "/works/detailedCase/project1",
    tags: ["Education", "Business"]
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "Multilingual tour platform tailored for outbound Chinese travelers.",
    image: "/Hero.png",
    url: "/works/detailedCase/project2",
    tags: ["Travel", "Web"]
  },
  {
    title: "Classter – Education Tech Platform",
    description: "Modernizing education management with integrated tech solutions.",
    image: "/Hero.png",
    url: "/works/detailedCase/project3",
    tags: ["Education", "Tech"]
  },
  {
    title: "Cryptomus Payment Gateway",
    description: "Secure crypto payment solutions for modern businesses.",
    image: "/Hero.png",
    url: "/works/detailedCase/project4",
    tags: ["Crypto", "Business"]
  },
  {
    title: "Sharp Archive – eDiscovery Platform",
    description: "Digital legal discovery and archiving made simple.",
    image: "/Hero.png",
    url: "/works/detailedCase/project5",
    tags: ["Legal", "Tech"]
  },
  {
    title: "Nova Overseas – Nova Group",
    description: "Global engineering and contracting firm with international reach.",
    image: "/Hero.png",
    url: "/works/detailedCase/project6",
    tags: ["Engineering", "Business"]
  },
];

const allFilters = ["All", "Education", "Travel", "Tech", "Business", "Crypto", "Legal", "Engineering"];

export default function RecentProjects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = projects
    .filter(project =>
      selectedFilter === "All" ? true : project.tags.includes(selectedFilter)
    )
    .slice(0, 5); // Show max 5 projects per filter

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-12">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We’ve worked on innovative platforms across industries including education, crypto, travel, and business automation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {allFilters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
