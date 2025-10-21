"use client";

import { FaClipboardList, FaDraftingCompass, FaServer, FaLaptopCode, FaCogs, FaHeadset } from "react-icons/fa";

const webDesignSteps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description:
      "We gather all website requirements, target audience insights, and project goals to start every project on the right path.",
    icon: <FaClipboardList className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We create visually stunning and user-friendly website designs that align with your brand identity.",
    icon: <FaDraftingCompass className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Prototype",
    description:
      "We develop interactive prototypes so you can see the website structure and user flow before development begins.",
    icon: <FaServer className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Our team builds fully responsive, modern, and fast-loading websites using the latest technologies.",
    icon: <FaLaptopCode className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Testing & Deployment",
    description:
      "We rigorously test your website for performance, responsiveness, and cross-browser compatibility before launch.",
    icon: <FaCogs className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "We provide ongoing website maintenance and support to ensure security, updates, and smooth operation.",
    icon: <FaHeadset className="text-blue-500 text-4xl mb-4" />,
  },
];

export default function WebDesignProcess() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-[#0071CE]">
          Web Design Process We Follow
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {webDesignSteps.map((step) => (
            <div
              key={step.id}
              className="bg-[#E6F0FF] p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-black text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
