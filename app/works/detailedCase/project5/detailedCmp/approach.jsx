// components/Approach.js
import Image from 'next/image';

export default function Approach() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-2xl text-blue-700 font-semibold mb-6">Approach</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-1">
          <Image
            src="/Hero.png" // Replace with your actual image path
            alt="Approach Illustration"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="md:order-1 text-gray-700">
          <p className="mb-4">
            The development of a comprehensive ERP system required hiring 20+ experts, including CRM, billing, ERP, forecasting, administration, video data management, web, location management, equipment, telephony, portals, accounting, statistics, micro-export system tools, workflows.
          </p>
          <p>
            The modular nature of ERP system allowed increased scalability and adaptability to complex projects with high speed and unlimited tasks capabilities.
          </p>
          <p>
            The combination of process automation, ERP processing, and additional strength of powerful reporting and dashboard processes.
          </p>
          <p>
            User-friendly, product of the system and team control continuous update of features, data, and user experience contribute especially for performance, automation of service, fast decisions, and easy installation allowing up to 40% of features to be ready in a short time without complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
