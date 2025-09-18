// components/KeyFeatures.js
import Image from 'next/image';

export default function KeyFeatures() {
  const features = [
    'Modular architecture for easy feature extension.',
    'Modern UI/UX with user-centric design.',
    'Flexible configuration and high scalability.',
    'Integrated data analysis and reporting tools.',
    'Third-party service integration.',
    'Advanced user and role management.',
    'Compliance with industry standards.',
    'Custom dashboards for different business roles.',
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-2xl text-blue-700 font-semibold mb-6">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Hero.png" // Replace this with your actual image path
            alt="Key Features Illustration"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
