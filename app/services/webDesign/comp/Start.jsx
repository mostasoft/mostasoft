"use client";

export default function HowToStartSection() {
  const steps = [
    {
      title: "1. Share Your Vision",
      description:
        "Tell us about your website ideas, goals, and requirements. You can send us your project brief, inspirations, or existing site references. We are happy to sign an NDA if needed.",
    },
    {
      title: "2. We Plan",
      description:
        "Our web design team analyzes your requirements and proposes the best layout, user experience, and design concepts tailored to your brand.",
    },
    {
      title: "3. Review & Feedback",
      description:
        "We share wireframes, mockups, and prototypes for your review. Your feedback helps us refine the design and align it perfectly with your expectations.",
    },
    {
      title: "4. Launch & Support",
      description:
        "Once approved, we develop and launch your website. Post-launch, we provide support, maintenance, and optimizations to keep your website running smoothly.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0071CE] mb-6">
          How to Start Your Web Design Project
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl">
          Starting a web design project with MostaSoft is simple and tailored to your needs. 
          We guide you through each step—from concept to launch—ensuring your website reflects your brand perfectly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#F0F8FF] rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0071CE] text-white font-semibold px-6 py-4">
                {step.title}
              </div>
              <div className="p-6 text-gray-700">{step.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Website?
          </h3>
          <p className="text-gray-600 mb-6">
            Let’s create a website that truly represents your brand and engages your audience.
          </p>
          <a
            href="#contact" 
            className="inline-block px-8 py-4 bg-[#0071CE] text-white font-semibold rounded-xl shadow-lg hover:bg-[#005bb5] transition-colors duration-300"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
