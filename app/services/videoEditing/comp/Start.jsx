"use client";

import { FaRegLightbulb, FaVideo, FaHandshake, FaRocket } from "react-icons/fa";

export default function HowToStartVideoEditing() {
  const steps = [
    {
      title: "1. Share Your Idea",
      description:
        "Tell us your vision for the video, including style, duration, format, and platform. You can provide references, scripts, or a rough storyboard.",
      icon: <FaRegLightbulb className="text-white w-6 h-6" />,
      color: "bg-red-600",
    },
    {
      title: "2. We Plan",
      description:
        "Our team evaluates your requirements, suggests editing styles, motion graphics, transitions, and timelines to create a detailed production plan.",
      icon: <FaVideo className="text-white w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      title: "3. Review & Feedback",
      description:
        "We share drafts for your review, gather feedback, and refine the video until it perfectly matches your vision.",
      icon: <FaHandshake className="text-white w-6 h-6" />,
      color: "bg-red-600",
    },
    {
      title: "4. Delivery",
      description:
        "Receive the final polished video in your preferred formats, optimized for YouTube, social media, or presentations. Ready to share and impress your audience!",
      icon: <FaRocket className="text-white w-6 h-6" />,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">How to Start</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Getting a professional video edited is easy! Share your ideas, and our team will handle the planning, editing, and final delivery. Follow these simple steps to start your video editing project with us:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className={`${step.color} flex items-center px-6 py-4 gap-3`}>
                <div className="rounded-full p-2 bg-red-800">{step.icon}</div>
                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
              </div>
              <div className="p-6 text-gray-700">{step.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
            Start Your Video Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
