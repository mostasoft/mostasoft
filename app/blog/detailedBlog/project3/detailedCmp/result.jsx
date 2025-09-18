// components/Result.js
import Image from 'next/image';

export default function Result() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/Hero.png" // Replace with your actual image path
            alt="Result Illustration"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="text-gray-700">
            <h2 className="text-2xl text-blue-700  font-semibold mb-6">Result</h2>
          <p className="mb-4">
            As a result of our ERP development efforts, the energy company gained a flexible, modular, and highly scalable system that automates most of its business processes.
          </p>
          <p className="mb-4">
            The platform enabled better resource planning, improved performance monitoring, and streamlined operations.
          </p>
          <p>
            With modern architecture and updated UI/UX, the company can now easily expand system functionality while maintaining excellent usability and integration capabilities.
          </p>
        </div>
        
      </div>
    </section>
  );
}
