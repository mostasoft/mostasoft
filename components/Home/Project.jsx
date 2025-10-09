// app/components/RecentProjects.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Car Dealership Website",
    description:
      "Business automation for international education consultancies.",
    image: "/car.png",
    caseStudy: "#",
    liveLink: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Multilingual tour platform tailored for outbound Chinese travelers.",
    image: "/personal brand.png",
    caseStudy: "#",
    liveLink: "#",
  },
  {
    title: "Food Business Website",
    description:
      "Modernizing education management with integrated tech solutions.",
    image: "/foodwebiste.png",
    caseStudy: "#",
    liveLink: "#",
  },
  {
    title: "Blog Website",
    description: "Secure crypto payment solutions for modern businesses.",
    image: "/blog.png",
    caseStudy: "#",
    liveLink: "#",
  },
  {
    title: "Sharp Archive – eDiscovery Platform",
    description: "Digital legal discovery and archiving made simple archiving made simple.",
    image: "/sharp.png",
    caseStudy: "#",
    liveLink: "#",
  },
  {
    title: "E-Commerce Business for MostaShop",
    description:
      "Global engineering and contracting firm with international reach.",
    image: "/e-commerce.png",
    caseStudy: "#",
    liveLink: "#",
  },
];

export default function RecentProjects() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -top-24 -right-40 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Recent Projects
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’ve worked on innovative platforms across industries including
          education, crypto, travel, and business automation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              <div className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[var(--MostUsed-color)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4 mt-2">
                  <Link
                    href={project.caseStudy}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700"
                  >
                    Case Study
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
                  >
                    Live Link
                  </Link>
                </div>
              </div>

              {/* Floating decorative dots */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-green-500 rounded-full animate-slow-ping"></div>
              <div className="absolute bottom-2 right-3 w-2 h-2 bg-green-400 rounded-full animate-slow-ping-delay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
