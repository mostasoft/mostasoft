"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data for each service
const faqsData = {
  wordpress: [
    {
      question: "Can WordPress handle large-scale websites?",
      answer: "Yes, WordPress can handle large-scale websites with proper hosting, caching, and optimization."
    },
    {
      question: "Can I customize WordPress themes?",
      answer: "Absolutely! Themes can be customized using the theme editor, custom CSS, or child themes for full control."
    },
    {
      question: "Is WordPress secure for e-commerce?",
      answer: "With proper security plugins, SSL, and regular updates, WordPress can be a secure platform for e-commerce."
    },
  ],
  video: [
    {
      question: "What types of videos can you edit?",
      answer: "We edit promotional, YouTube, corporate, event, and animated videos."
    },
    {
      question: "Do you provide motion graphics and animations?",
      answer: "Yes, we create motion graphics, animated intros/outros, and visual effects."
    },
    {
      question: "Can you edit videos in high resolution?",
      answer: "Absolutely! We work with 4K, Full HD, and optimized formats for web or broadcast."
    },
  ],
  graphic: [
    {
      question: "Do you offer branding services?",
      answer: "Yes, we create logos, brand assets, and complete visual identity systems."
    },
    {
      question: "What design tools do you use?",
      answer: "We use Adobe Photoshop, Illustrator, Figma, and other industry-standard tools."
    },
    {
      question: "Can you design print and digital media?",
      answer: "Yes, we create designs for social media, websites, packaging, and print collateral."
    },
  ],
};

const categories = ["WordPress", "Video Editing", "Graphic Design"];

// Map category names to faqsData keys
const categoryKeyMap = {
  "WordPress": "wordpress",
  "Video Editing": "video",
  "Graphic Design": "graphic",
};

export default function FAQAdvanced() {
  const [selectedCategory, setSelectedCategory] = useState("WordPress");
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Safely get FAQs based on selected category
  const faqs = faqsData[categoryKeyMap[selectedCategory]]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">FAQs</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Find answers to commonly asked questions about our WordPress, Video Editing, and Graphic Design services.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setOpenIndex(null); setSearchTerm(""); }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder={`Search ${selectedCategory} FAQs...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* FAQ Items */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: FAQ List */}
        <div className="space-y-4">
          {faqs.length > 0 ? faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg p-4 cursor-pointer shadow-sm"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-blue-700">{faq.question}</h3>
                <span className="text-xl text-blue-500">{openIndex === index ? "−" : "+"}</span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-gray-600 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )) : <p className="text-gray-500 mt-4">No FAQs found.</p>}
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img
            src={selectedCategory === "WordPress" ? "/Screenshot 2025-10-08 065805.png" :
                 selectedCategory === "Video Editing" ? "/Screenshot 2025-10-08 065805.png" :
                 "/Screenshot 2025-10-08 065805.png"}
            alt={`${selectedCategory} Illustration`}
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}
