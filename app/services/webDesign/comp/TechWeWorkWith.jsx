"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaWordpress,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact size={32} className="text-white" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-white" /> },
  { name: "MySQL", icon: <SiMysql size={32} className="text-white" /> },
  { name: "Python", icon: <FaPython size={32} className="text-white" /> },
  { name: "WordPress", icon: <FaWordpress size={32} className="text-white" /> },
  { name: "AWS", icon: <FaAws size={32} className="text-white" /> },
];

export default function Technologies() {
  return (
    <section className="bg-green-500 py-20 text-center px-4 text-white">
      <h3 className="uppercase text-xl font-bold tracking-wide text-white/80">
        <span className="text-white">Technologies</span> We Use 💡
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 leading-snug">
        Powering Web Design with{" "}
        <span className="text-white underline decoration-white/40">
          Modern Tools
        </span>
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
            className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:bg-white/20 transition"
          >
            {tech.icon}
            <p className="mt-3 font-semibold text-white/90">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
