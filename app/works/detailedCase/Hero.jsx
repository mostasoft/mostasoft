// components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-400 text-white py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm mb-2">Case / ERP Solution For The Energy Company</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ERP Software For Energy Industry
          </h1>
          <p className="mb-6">
            SCAND developed ERP system for the energy industry and built a system of automation tools
            to support enterprise resource planning and digitize internal business processes.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm">ERP Software</button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm">Custom ERP Development</button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {['ERP', 'Energy', 'Java', 'Spring', 'JPA', 'Hibernate', 'Maven', 'MySQL', 'React', 'JavaScript', 'Redux'].map((tag) => (
              <span key={tag} className="bg-white text-blue-700 px-3 py-1 rounded-md font-medium">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/Hero.png" alt="Hero Image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
