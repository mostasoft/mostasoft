"use client";

import { 
  FaHeartbeat, FaShoppingCart, FaCar, FaGraduationCap, FaBuilding, FaHotel, 
  FaTshirt, FaCapsules, FaPlane, FaLaptopCode, FaMoneyCheckAlt, FaPlus 
} from "react-icons/fa";

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
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Decorative Green Blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -top-24 -right-40 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      <div className="absolute -bottom-20 -left-24 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-blob animation-delay-1500"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Industries <span className="text-[var(--MostUsed-color)]">We Serve</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Bridge Your Business with the Virtual World
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 transition transform duration-300"
            >
              <div className="text-3xl text-[var(--MostUsed-color)] mb-3">{item.icon}</div>
              <p className="font-medium text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
