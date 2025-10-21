import Image from "next/image";

// components/WhyChooseDatapollex.jsx
export default function WhyChooseDatapollex() {
  return (
    <section className="bg-blue-800 text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h3 className="text-red-500 font-semibold flex items-center gap-2 uppercase tracking-wide">
            <span className="border border-red-500 w-4 h-4 inline-block"></span>
            Why Choose MostaSoft
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            For Website Development?
          </h2>
          <ul className="mt-6 space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-500">›</span>
              Based on high recruitment standards, we help companies extend their IT talent by providing highly skilled engineers on Website.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">›</span>
              Our development team builds scalable, secure, and user-friendly applications on next-gen technologies. DataPollex has been recognized as a leading software company.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">›</span>
              Development company in Finland, Japan, India, Bangladesh with high performance on Website applications.
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center gap-6">
         
          <div className="flex gap-6">
            <Image src="/Hero.png" alt="alt" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
