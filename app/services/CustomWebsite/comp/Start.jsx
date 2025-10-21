"use client";

import { FaRegLightbulb, FaTools, FaHandshake, FaRocket } from "react-icons/fa";

export default function HowToStartSection() {
  const steps = [
    {
      title: "1. You Ask",
      description:
        "Share your ideas and expectations with us, specify the project requirements or send an RFP, RPI, RFQ. We are always ready to sign your non-disclosure agreement or can provide you with ours.",
      icon: <FaRegLightbulb className="text-white w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "2. We Proceed",
      description:
        "Our engineering team has a deep overview of the customer requirements to come up with the best UI/UX, architecture and technology stack alternatives.",
      icon: <FaTools className="text-white w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "3. Negotiate",
      description:
        "We discuss with client project requirements and clarify the details, outline the project roadmap and conduct interviews with software engineers if needed.",
      icon: <FaHandshake className="text-white w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "4. You Get",
      description:
        "Commercial project estimation in terms of time and cost, suggestions on architecture, technology platforms, tools, and methodologies.",
      icon: <FaRocket className="text-white w-6 h-6" />,
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">How to Start</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          At SCAND we implement an individual approach to each customer as the project scope and requirements may vary.
          Some clients turn to us with a brief project description, while others – with comprehensive information on
          the project (documentation, design, mockups, wireframes). No matter what requirements you have, we are always
          ready to help you. Learn how to start working with us:
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
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
