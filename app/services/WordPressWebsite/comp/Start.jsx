"use client";

import { FaRegLightbulb, FaWordpressSimple, FaHandshake, FaRocket } from "react-icons/fa";

export default function HowToStartWordPress() {
  const steps = [
    {
      title: "1. Share Your Requirements",
      description:
        "Tell us your website goals, features, preferred design, and functionality. You can provide wireframes, reference sites, or detailed specifications.",
      icon: <FaRegLightbulb className="text-white w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "2. We Plan",
      description:
        "Our team evaluates your requirements, recommends themes, plugins, and technical solutions, and creates a roadmap for your WordPress project.",
      icon: <FaWordpressSimple className="text-white w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "3. Review & Feedback",
      description:
        "We share prototypes or initial builds, collect your feedback, and refine the site to ensure it meets your expectations and branding needs.",
      icon: <FaHandshake className="text-white w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "4. Delivery",
      description:
        "Receive your fully functional WordPress website, optimized for speed, SEO, and responsiveness, ready to go live.",
      icon: <FaRocket className="text-white w-6 h-6" />,
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">How to Start</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Starting a WordPress website project is simple! Share your requirements, and our team will handle the planning, development, and delivery. Follow these steps to get your website up and running:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className={`${step.color} flex items-center px-6 py-4 gap-3`}>
                <div className="rounded-full p-2 bg-blue-800">{step.icon}</div>
                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
              </div>
              <div className="p-6 text-gray-700">{step.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
            Start Your WordPress Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
