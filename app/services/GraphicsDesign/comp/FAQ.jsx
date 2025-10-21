// components/FAQGraphicDesign.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Design Tools",
    question: "Which software do you use for graphic design?",
    answer:
      "We use industry-standard tools like Adobe Photoshop, Illustrator, Figma, and Affinity Designer to create stunning visuals and layouts.",
  },
  {
    category: "Branding & Identity",
    question: "Can you create logos and brand identity?",
    answer:
      "Absolutely! We design logos, brand guidelines, typography, color palettes, and other elements to build a cohesive brand identity.",
  },
  {
    category: "Print & Digital",
    question: "Do you design for both print and digital media?",
    answer:
      "Yes! We design marketing materials, social media graphics, banners, brochures, posters, and web visuals optimized for digital or print use.",
  },
  {
    category: "Revisions & Feedback",
    question: "How do revisions work for graphic design projects?",
    answer:
      "We provide up to 3 rounds of revisions to ensure your design aligns with your vision. Additional revisions can be arranged if needed.",
  },
];

export default function FAQGraphicDesign() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">FAQ - Graphic Design Services</h2>
          <p className="text-gray-600 mt-4">
            From branding to marketing materials, we provide creative graphic design solutions that make your business stand out. Explore our most common questions below.
          </p>

          {/* FAQ Items */}
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-xl p-5 cursor-pointer shadow hover:shadow-lg transition-shadow duration-300 bg-white"
                onClick={() => toggleFAQ(index)}
                layout
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400 italic">{faq.category}</p>
                    <h3 className="text-lg md:text-xl font-semibold text-green-700">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-green-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-3 text-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side (Illustration / Design Thumbnail) */}
        <div className="flex justify-center">
          <img
            src="/graphic-design.png"
            alt="Graphic Design FAQ Illustration"
            className="max-w-sm w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
