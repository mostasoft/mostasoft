// components/MostasoftHistory.jsx
"use client";

const timeline = [
  {
    year: "2015",
    title: "Mostasoft Founded",
    description: "Mostasoft was founded with a vision to deliver top-notch web development and digital marketing solutions.",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Completed our first big e-commerce project, gaining recognition in the local market.",
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Expanded our team and started offering UI/UX and frontend development services.",
  },
  {
    year: "2020",
    title: "Freelance Success",
    description: "Our team became active on Upwork and Fiverr, completing 50+ projects worldwide.",
  },
  {
    year: "2022",
    title: "Digital Marketing Services",
    description: "Launched digital marketing services including SEO, Google Ads, and social media campaigns.",
  },
  {
    year: "2025",
    title: "Mostasoft Today",
    description: "Now a full-service web and digital solutions company, serving clients globally with expertise in modern web tech.",
  },
];

export default function MostasoftHistory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-green-400 h-full -translate-x-1/2"></div>

          <div className="flex flex-col space-y-12 md:space-y-24">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="flex flex-col md:flex-row items-center justify-between md:items-start"
                >
                  {/* Left content */}
                  <div
                    className={`md:w-5/12 ${
                      isLeft ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-green-600">{item.year}</h3>
                    <h4 className="text-lg font-bold mt-2">{item.title}</h4>
                    <p className="mt-1 text-gray-700">{item.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="flex justify-center md:order-1">
                    <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-md"></div>
                  </div>

                  {/* Right content */}
                  <div
                    className={`md:w-5/12 ${
                      !isLeft ? "md:text-left md:pl-8" : "md:order-3 md:pr-8"
                    } hidden md:block`}
                  >
                    {/* Empty on alternate side */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
