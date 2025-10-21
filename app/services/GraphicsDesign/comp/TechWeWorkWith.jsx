"use client";

import { motion } from "framer-motion";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaPaintBrush, FaPalette } from "react-icons/fa";

const designServices = [
  { name: "Graphic Design", icon: <FaPaintBrush size={32} className="text-purple-500" /> },
  { name: "Photoshop", icon: <DiPhotoshop size={32} className="text-blue-600" /> },
  { name: "Illustrator", icon: <DiIllustrator size={32} className="text-orange-500" /> },
  { name: "Creative Branding", icon: <FaPalette size={32} className="text-green-500" /> },
];

export default function GraphicDesignServices() {
  return (
    <section className="bg-gray-50 py-20 text-center px-4">
      <h3 className="uppercase text-xl font-bold tracking-wide text-gray-500 mb-2">
        Graphic Design Services
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Creative <span className="text-purple-500">Designs</span> That Stand Out
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {designServices.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            {service.icon}
            <p className="mt-3 font-semibold text-gray-700">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
