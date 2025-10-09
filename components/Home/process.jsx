"use client";

import { FaClipboardList, FaDraftingCompass, FaServer, FaLaptopCode, FaCogs, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description:
      "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
    icon: <FaClipboardList className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
    icon: <FaDraftingCompass className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Prototype",
    description:
      "We deliver a prototype after designing, which our development team uses to bring your product to life.",
    icon: <FaServer className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Development",
    description:
      "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Smoothly launch your product with our efficient deployment process using the latest tools and technologies.",
    icon: <FaCogs className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "Our company offers you all support and the team is always ready to answer every query after deployment.",
    icon: <FaHeadset className="text-[var(--MostUsed-color)] text-4xl mb-4" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-16 bg-gray-50 text-black overflow-hidden">
      {/* Green decorative blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-12">Process We Follow</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border-b-4 border-green-500"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-black text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
