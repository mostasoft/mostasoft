// app/components/CaseStudyCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaReact, FaAws } from "react-icons/fa";
import { SiSpring, TbBrandMysql, SiAngular } from "react-icons/si";

const projects = [
  {
    title: "A System for At-Home Fertility Testing",
    description: "",
    image: "/Hero.png",
    url: "/blog/detailedBlog/project1",
    tags: ["Healthcare", "Web", "United States"],
    technologies: [SiAngular, SiSpring,  FaAws],
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "",
    image: "/Hero.png",
    url: "/blog/detailedBlog/project2",
    tags: ["Travel", "Web", "China"],
    technologies: [FaReact, SiSpring,  FaAws],
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "",
    image: "/Hero.png",
    url: "/blog/detailedBlog/project2",
    tags: ["Travel", "Web", "China"],
    technologies: [FaReact, SiSpring,  FaAws],
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "",
    image: "/Hero.png",
    url: "/blog/detailedBlog/project2",
    tags: ["Travel", "Web", "China"],
    technologies: [FaReact, SiSpring,  FaAws],
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "",
    image: "/Hero.png",
    url: "/blog/detailedBlog/project2",
    tags: ["Travel", "Web", "China"],
    technologies: [FaReact, SiSpring,  FaAws],
  },
];

export default function CaseStudyCard() {
  return (
      <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 bg-gray-50 p-6 rounded-xl shadow-md ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left or Right: Image */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right or Left: Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag === "United States" && (
                      <img
                        src="/flags/us.png"
                        alt="US Flag"
                        className="w-4 h-4"
                      />
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {project.title}
              </h2>

              {/* Technologies */}
              <p className="font-semibold mt-2">TECHNOLOGIES:</p>
              <div className="flex items-center gap-2 text-2xl">
                {project.technologies.map((Icon, i) => (
                  <Icon key={i} className="text-gray-700" />
                ))}
              </div>

              {/* Button */}
              <Link
                href={project.url}
                className="mt-6 w-max px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Case Study Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
