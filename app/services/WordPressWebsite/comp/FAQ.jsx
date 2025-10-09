// components/FAQ.jsx
"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How is custom software development different from off-the-shelf solutions?",
    answer:
      "Custom software development is tailored to your business needs, while off-the-shelf solutions are generic and designed for mass use. Custom software offers more flexibility, scalability, and long-term efficiency.",
  },
  {
    question: "What advantages does custom development offer?",
    answer:
      "Custom development ensures unique solutions, better integration, scalability, and alignment with your specific goals.",
  },
  {
    question: "How can I select the best custom software development company?",
    answer:
      "Check their portfolio, client reviews, technical expertise, and ability to understand your business requirements before choosing.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">FAQ</h2>
          <p className="text-gray-600 mt-4">
            We offer a wide range of software development services: mobile app
            development, desktop development, enterprise software development,
            and web development services. For more than 20 years we have
            accumulated experience in various spheres: banking, finance,
            healthcare, logistics, education, and many more. Our software
            development team is ready to provide you with expert advice or
            assist with the creation of custom solutions for you.
          </p>

          {/* FAQ Items */}
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 cursor-pointer shadow-sm"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-blue-700">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-blue-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Illustration) */}
        <div className="flex justify-center">
          <img
            src="/Hero.png"
            alt="FAQ Illustration"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}
