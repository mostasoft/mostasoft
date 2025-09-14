"use client";

import { FaHeartbeat, FaShoppingCart, FaCar, FaGraduationCap, FaBuilding, FaHotel, FaTshirt, FaCapsules, FaPlane, FaLaptopCode, FaMoneyCheckAlt, FaPlus } from "react-icons/fa";

const industries = [
  { name: "FinTech", icon: <FaMoneyCheckAlt /> },
  { name: "Healthcare", icon: <FaHeartbeat /> },
  { name: "E-Commerce", icon: <FaShoppingCart /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Real-Estate", icon: <FaBuilding /> },
  { name: "Hospitality", icon: <FaHotel /> },
  { name: "RMG", icon: <FaTshirt /> },
  { name: "Pharmacy", icon: <FaCapsules /> },
  { name: "Aviation", icon: <FaPlane /> },
  { name: "UI/UX", icon: <FaLaptopCode /> },
  { name: "Many More", icon: <FaPlus /> },
];

export default function IndustrySection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Industries <span className="text-red-600">We Serve</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Bridge Your Business with the Virtual World
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center hover:-translate-y-3 justify-center p-6 rounded-2xl bg-neutral-100 shadow-xl hover:shadow-2xl transition"
            >
              <div className="text-3xl text-red-500 mb-3">{item.icon}</div>
              <p className="font-medium text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
