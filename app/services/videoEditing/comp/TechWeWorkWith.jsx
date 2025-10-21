"use client";

import { motion } from "framer-motion";
import { FaVideo, FaFilm } from "react-icons/fa";
import { SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";

const videoServices = [
  { name: "Video Editing", icon: <FaVideo size={32} className="text-red-500" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects size={32} className="text-purple-600" /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro size={32} className="text-pink-500" /> },
  { name: "Film Production", icon: <FaFilm size={32} className="text-yellow-500" /> },
];

export default function VideoEditingServices() {
  return (
    <section className="bg-gray-50 py-20 text-center px-4">
      <h3 className="uppercase text-xl font-bold tracking-wide text-gray-500 mb-2">
        Video Editing Services
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Create Stunning <span className="text-red-500">Videos</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {videoServices.map((service, i) => (
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
