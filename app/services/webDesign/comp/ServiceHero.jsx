"use client";

import Image from "next/image";
import { FaReact } from "react-icons/fa";

export default function ServiceHero() {
  return (
    <section className="w-full relative overflow-hidden px-6 md:px-12 lg:px-20 py-20 bg-white">
      {/* Decorative Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-sm text-green-600 mb-2 tracking-wide uppercase">
            Empower Your Business
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight bg-clip-text bg-gradient-to-r from-green-500 via-green-400 to-green-600">
            Web Design <br className="hidden md:block" /> Services
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            At MostaSoft, we create user-centric web experiences and
            performance-driven designs that reflect your brand, attract users,
            and convert visitors into loyal customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 pt-6">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-600 hover:to-green-700">
              Get Started Free
            </button>
            <button className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-600">
              Watch Demo
            </button>
          </div>

          {/* Key Features */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "💻",
                title: "UI/UX Design",
                desc: "Modern, conversion-focused, and user-friendly interfaces.",
              },
              {
                icon: "⚡",
                title: "Responsive Design",
                desc: "Looks perfect across devices and screen sizes.",
              },
              {
                icon: "🌐",
                title: "SEO Friendly",
                desc: "Optimized for better visibility and performance.",
              },
              {
                icon: "🛡️",
                title: "Fast & Secure",
                desc: "Built for speed, reliability, and long-term stability.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-green-500 text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative flex flex-col items-center md:items-end">
          {/* Floating Shapes behind image */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-200/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

          {/* Main Image */}
          <div className="relative z-10 drop-shadow-2xl">
            <Image
              src="/WebDesign.jpg"
              alt="Web design service illustration"
              width={1000}
              height={1000}
              className="w-[500px] h-auto object-contain rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Tech Icons Row */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-8 z-10 relative">
            {[<FaReact />, "💡", "🧠", "🎨", "⚙️", "📱"].map((icon, idx) => (
              <div
                key={idx}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-500 text-2xl shadow-md 
                 hover:scale-125 transition-transform duration-500 animate-pulse"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
