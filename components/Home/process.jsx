"use client";

import { FaClipboardList, FaDraftingCompass, FaServer, FaLaptopCode, FaCogs, FaHeadset } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description: "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
    icon: <FaClipboardList className="text-cyan-400 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
    icon: <FaDraftingCompass className="text-red-400 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Prototype",
    description: "We deliver a prototype after designing, which our development team uses to bring your product to life.",
    icon: <FaServer className="text-purple-400 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Development",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-green-400 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Deployment",
    description: "Smoothly launch your product with our efficient deployment process using the latest tools and technologies.",
    icon: <FaCogs className="text-blue-400 text-4xl mb-4" />,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "Our company offers you all support and the team is always ready to answer every query after deployment.",
    icon: <FaHeadset className="text-yellow-400 text-4xl mb-4" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">Process We Follow</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.id}. {step.title}</h3>
              <p className="text-black text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
