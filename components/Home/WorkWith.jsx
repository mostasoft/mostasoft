// components/WhoWeWorkWith.tsx

export default function WhoWeWorkWith() {
  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who we work with
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            As a leading IT service company in Finland, Japan, India we've worked with over 2,000 
            businesses, from startups to enterprises, to deliver industry-leading solutions. 
            Our team at DataPollex offers a comprehensive range of IT services tailored to meet 
            your business requirements.
          </p>
          <p className="text-sm leading-relaxed opacity-90 mt-4">
            With a focus on innovation, we use the latest technologies and tools to develop 
            mobile applications that are engaging, user-friendly, and reliable. Our goal is to 
            help our clients achieve their business objectives by developing customized solutions 
            that meet their unique requirements.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[var(--MostUsed-color)] hover:bg-red-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
            Start Up Business
          </div>
          <div className="bg-[var(--MostUsed-color)] hover:bg-red-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
            Enterprise
          </div>
          <div className="bg-[var(--MostUsed-color)] hover:bg-red-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md col-span-2">
            We Have 50+ Successful Freelancers
          </div>
          <div className="bg-[var(--MostUsed-color)] hover:bg-red-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
            Small & Medium Business
          </div>
          <div className="bg-[var(--MostUsed-color)] hover:bg-red-700 transition text-center text-white font-semibold p-6 rounded-md shadow-md">
            Agencies
          </div>
        </div>
      </div>
    </section>
  );
}
