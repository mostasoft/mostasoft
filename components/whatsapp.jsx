"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+8801328562448"; // 🔴 replace with your WhatsApp number (without +)

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
    </button>
  );
}
