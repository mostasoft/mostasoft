// components/FAQVideoEditing.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Video Editing Basics",
    question: "What software do you use for video editing?",
    answer:
      "We use professional tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve to deliver high-quality videos tailored to your needs.",
  },
  {
    category: "Advanced Editing",
    question: "Can you add visual effects and motion graphics?",
    answer:
      "Absolutely! Our team can incorporate VFX, motion graphics, animations, and transitions to make your videos stand out.",
  },
  {
    category: "Delivery & Formats",
    question: "In which formats will I receive the final video?",
    answer:
      "We provide videos in MP4, MOV, and other popular formats, optimized for social media, YouTube, or professional presentations.",
  },
  {
    category: "Revisions & Feedback",
    question: "How many revisions can I request?",
    answer:
      "We offer up to 3 rounds of revisions to ensure your vision is perfectly realized. Additional revisions can be arranged if needed.",
  },
];

export default function FAQVideoEditing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">FAQ - Video Editing Services</h2>
          <p className="text-gray-600 mt-4">
            Whether you need simple editing, advanced motion graphics, or full post-production, our team provides tailored solutions to bring your vision to life. Explore common questions below to learn more.
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
                    <h3 className="text-lg md:text-xl font-semibold text-purple-700">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-purple-500">
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

        {/* Right Side (Illustration / Video Thumbnail) */}
        <div className="flex justify-center">
          <img
            src="/video-editing.png"
            alt="Video Editing FAQ Illustration"
            className="max-w-sm w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
