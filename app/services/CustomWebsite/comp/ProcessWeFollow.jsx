"use client";

import { FaClipboardList, FaDraftingCompass, FaServer, FaLaptopCode, FaCogs, FaHeadset } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description: "We collect your web project requirements, goals, and resources to ensure a smooth start.",
    icon: <FaClipboardList className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Our designers craft modern, user-friendly, and responsive web interfaces tailored to your audience.",
    icon: <FaDraftingCompass className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Prototype",
    description: "We create interactive prototypes that visualize your website and validate the user experience.",
    icon: <FaServer className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Development",
    description: "Our developers build high-performance, secure, and scalable websites using modern technologies.",
    icon: <FaLaptopCode className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Deployment",
    description: "We launch your website efficiently with optimized performance, security, and SEO readiness.",
    icon: <FaCogs className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "We provide ongoing support, updates, and troubleshooting to keep your website running smoothly.",
    icon: <FaHeadset className="text-blue-500 text-4xl mb-4" />,
  },
];

export default function WebDevProcessSection() {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">Web Development Process</h2>

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
