"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaWordpress, FaAws } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact size={32} className="text-red-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-red-500 dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-red-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-red-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-red-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql size={32} className="text-red-500" /> },
  { name: "Python", icon: <FaPython size={32} className="text-red-500" /> },
  { name: "WordPress", icon: <FaWordpress size={32} className="text-red-500" /> },
  { name: "AWS", icon: <FaAws size={32} className="text-red-500" /> },
];

export default function Technologies() {
  return (
    <section className="bg-gray-50 py-20 text-center px-4">
      <h3 className="uppercase text-xl font-bold tracking-wide text-gray-500">
        <span className="text-red-500">Technologies</span> Behind Us
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
        Powering Innovation with <span className="text-red-500">Modern Tech</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            {tech.icon}
            <p className="mt-3 font-semibold text-gray-700">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
