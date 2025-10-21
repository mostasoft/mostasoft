"use client";

import { FaRegLightbulb, FaPenFancy, FaHandshake, FaRocket } from "react-icons/fa";

export default function HowToStartGraphicDesign() {
  const steps = [
    {
      title: "1. Share Your Idea",
      description:
        "Tell us about your project vision, including brand style, colors, formats, and examples. You can provide sketches, references, or mood boards.",
      icon: <FaRegLightbulb className="text-white w-6 h-6" />,
      color: "bg-green-600",
    },
    {
      title: "2. We Plan",
      description:
        "Our design team reviews your requirements and proposes concepts, styles, layouts, and timelines to match your brand identity.",
      icon: <FaPenFancy className="text-white w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      title: "3. Review & Feedback",
      description:
        "We present initial designs for your feedback, refine concepts, and make adjustments until the designs meet your expectations.",
      icon: <FaHandshake className="text-white w-6 h-6" />,
      color: "bg-green-600",
    },
    {
      title: "4. Delivery",
      description:
        "Receive the final designs in your preferred formats (JPEG, PNG, PDF, SVG) ready for print, social media, or web use.",
      icon: <FaRocket className="text-white w-6 h-6" />,
      color: "bg-green-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">How to Start</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Starting a graphic design project is simple! Share your ideas and references, and our creative team will handle the planning, design, and final delivery. Follow these steps to get started with us:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className={`${step.color} flex items-center px-6 py-4 gap-3`}>
                <div className="rounded-full p-2 bg-green-800">{step.icon}</div>
                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
              </div>
              <div className="p-6 text-gray-700">{step.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
            Start Your Design Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
