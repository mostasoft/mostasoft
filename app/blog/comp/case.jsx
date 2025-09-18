// app/components/RecentProjects.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Education Consultancy Platform",
    description: "Business automation for international education consultancies.",
    image: "/Hero.png",
    url: "/works/detailedCase/project1"
  },
  {
    title: "WAFIMA – Tour & Travel Website",
    description: "Multilingual tour platform tailored for outbound Chinese travelers.",
    image: "/Hero.png",
    url: "/works/detailedCase/project2"
  },
  {
    title: "Classter – Education Tech Platform",
    description: "Modernizing education management with integrated tech solutions.",
    image: "/Hero.png",
    url: "/works/detailedCase/project3"
  },
  {
    title: "Cryptomus Payment Gateway",
    description: "Secure crypto payment solutions for modern businesses.",
    image: "/Hero.png",
    url: "/works/detailedCase/project4"
  },
  {
    title: "Sharp Archive – eDiscovery Platform",
    description: "Digital legal discovery and archiving made simple.",
    image: "/Hero.png",
    url: "/works/detailedCase/project5"
  },
  {
    title: "Nova Overseas – Nova Group",
    description: "Global engineering and contracting firm with international reach.",
    image: "/Hero.png",
    url: "/works/detailedCase/project6"
  },
];

export default function RecentProjects() {
  return (
    <section  className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’ve worked on innovative platforms across industries including education, crypto, travel, and business automation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
