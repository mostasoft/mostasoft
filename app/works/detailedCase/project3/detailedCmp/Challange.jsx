// components/Challenge.js
import Image from 'next/image';

export default function Challenge() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-2xl text-blue-700 font-semibold mb-6">Challenge</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mb-4">
            In the energy industry, which is under the development of a more flexible and intelligent energy infrastructure, 
            ERP implementation provides the possibility to optimize business processes and control project execution.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Handle multiple challenges, poor scalability, and performance limitations.</li>
            <li>Difficulties in resource planning.</li>
            <li>Existing solutions were not enough to cover the business needs.</li>
            <li>Poor usability of the old interface.</li>
            <li>Need for new UI and more scalable architecture.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src="/Hero.png" alt="Challenge Illustration" width={400} height={300} />
        </div>
      </div>
    </section>
  );
}
