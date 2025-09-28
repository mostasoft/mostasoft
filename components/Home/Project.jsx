// app/components/RecentProjects.tsx
import Image from "next/image";

const projects = [
  {
    title: "Car Dealership Website",
    description: "Business automation for international education consultancies.",
    image: "/car.png",
  },
  {
    title: "Personal Portfolio Website",
    description: "Multilingual tour platform tailored for outbound Chinese travelers.",
    image: "/personal brand.png",
  },
  {
    title: "Food Business Website",
    description: "Modernizing education management with integrated tech solutions.",
    image: "/foodwebiste.png",
  },
  {
    title: "Blog Website",
    description: "Secure crypto payment solutions for modern businesses.",
    image: "/blog.png",
  },
  {
    title: "Sharp Archive – eDiscovery Platform",
    description: "Digital legal discovery and archiving made simple.",
    image: "/sharp.png",
  },
  {
    title: "E-Commerce Business for MostaShop",
    description: "Global engineering and contracting firm with international reach.",
    image: "/e-commerce.png",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’ve worked on innovative platforms across industries including education, crypto, travel, and business automation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
