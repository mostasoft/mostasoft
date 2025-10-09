"use client";

import { FaClipboardList, FaDraftingCompass, FaServer, FaLaptopCode, FaCogs, FaHeadset } from "react-icons/fa";

const steps = [
  {
    title: "Web Design",
    description: "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
    icon: <FaClipboardList className="text-red-400 text-4xl mb-4" />,
  },
  {
    title: "WordPress",
    description: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
    icon: <FaDraftingCompass className="text-red-400 text-4xl mb-4" />,
  },
  {
    title: "Front End",
    description: "We deliver a prototype after designing, which our development team uses to bring your product to life.",
    icon: <FaServer className="text-red-400 text-4xl mb-4" />,
  },
  {
    title: "Backend",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-red-400 text-4xl mb-4" />,
  },
  {
    title: "E-Commerce",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-red-400 text-4xl mb-4" />,
  },
  {
  
    title: "Woo-Commerce",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-red-400 text-4xl mb-4" />,
  },
  {
   
    title: "Health Care",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-red-400 text-4xl mb-4" />,
  },
  {
    
    title: "Food Business",
    description: "Development of mobile applications, web platforms & blockchain started using latest tools and technologies with transparency.",
    icon: <FaLaptopCode className="text-red-400 text-4xl mb-4" />,
  },
];

export default function WebServices() {
  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
       <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Rwliable Services <br/> <span className="text-red-600">We Offer</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
            key={step.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2"> {step.title}</h3>
              <p className="text-black text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
       <div className=" flex justify-center p-5">
        <button className="btn-glass bg-red-400 hover:translate-x-2 font-bold text-white"> Load More Services</button></div>
    </section>
  );
}
