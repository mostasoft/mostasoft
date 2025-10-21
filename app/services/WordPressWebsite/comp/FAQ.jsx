// components/FAQWordPress.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Development & Setup",
    question: "Can you build a WordPress website from scratch?",
    answer:
      "Yes! We create custom WordPress websites tailored to your business needs, including themes, plugins, and functionality from the ground up.",
  },
  {
    category: "Themes & Plugins",
    question: "Do you customize themes and plugins?",
    answer:
      "Absolutely. We can modify existing themes and plugins or develop custom ones to match your design and functionality requirements.",
  },
  {
    category: "SEO & Performance",
    question: "Will my WordPress site be SEO-friendly and fast?",
    answer:
      "Yes. We optimize WordPress websites for SEO, speed, and responsiveness to ensure better rankings and user experience.",
  },
  {
    category: "Maintenance & Support",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "We offer website maintenance, updates, backups, and security monitoring to keep your WordPress site running smoothly.",
  },
];

export default function FAQWordPress() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">FAQ - WordPress Services</h2>
          <p className="text-gray-600 mt-4">
            From building custom websites to maintaining and optimizing them, our WordPress services cover all your business needs. Check out our frequently asked questions.
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
                    <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-blue-500">
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

        {/* Right Side (Illustration / Screenshot) */}
        <div className="flex justify-center">
          <img
            src="/wordpress.png"
            alt="WordPress FAQ Illustration"
            className="max-w-sm w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
