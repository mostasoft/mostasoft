// components/HowToStartSection.tsx

export default function HowToStartSection() {
  const steps = [
    {
      title: "1. You Ask",
      description:
        "Share your ideas and expectations with us, specify the project requirements or send an RFP, RPI, RFQ. We are always ready to sign your non-disclosure agreement or can provide you with ours.",
    },
    {
      title: "2. We Proceed",
      description:
        "Our engineering team has a deep overview of the customer requirements to come up with the best UI/UX, architecture and technology stack alternatives.",
    },
    {
      title: "3. Negotiate",
      description:
        "We discuss with client project requirements and clarify the details, outline the project roadmap and conduct interviews with software engineers if needed.",
    },
    {
      title: "4. You get",
      description:
        "Commercial project estimation in terms of time and cost, suggestions on architecture, technology platforms, tools, and methodologies.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">How to Start</h2>
        <p className="text-gray-700 mb-12 max-w-3xl">
          At SCAND we implement an individual approach to each customer as the project scope and requirements may vary.
          Some clients turn to us with a brief project description, while others – with comprehensive information on
          the project (documentation, design, mockups, wireframes). No matter what requirements you have, we are always
          ready to help you. Learn how to start working with us:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white font-semibold px-6 py-4">{step.title}</div>
              <div className="p-6 text-gray-700">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
