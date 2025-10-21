"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What makes MostaSoft web design different?",
    answer:
      "Our web design services are fully customized to your brand and business goals. We focus on responsive design, user experience, and conversion optimization to make your website stand out.",
  },
  {
    question: "Do you provide responsive and mobile-friendly designs?",
    answer:
      "Yes! Every website we create is fully responsive and mobile-friendly, ensuring it looks perfect on all devices.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can revamp your existing website to improve its aesthetics, usability, and performance while keeping your brand identity intact.",
  },
  {
    question: "How long does a web design project typically take?",
    answer:
      "The timeline depends on the scope and complexity of the project, but most projects are completed within 4-8 weeks.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we provide post-launch support and maintenance to ensure your website remains secure, up-to-date, and fully functional.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0071CE]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4">
            We specialize in creating modern, responsive, and high-performing websites. 
            Here are some common questions about our web design services.
          </p>

          {/* FAQ Items */}
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 cursor-pointer shadow-sm hover:shadow-md transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-[#0071CE]">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-[#00A3FF]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Illustration) */}
        <div className="flex justify-center">
          <img
            src="/Hero.png"
            alt="Web Design FAQ Illustration"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}
