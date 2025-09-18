// components/RelatedCases.js
export default function RelatedCases() {
  const projects = [
    "Business Process Management System",
    "Custom Document Management System",
    "Cost-Effective Solution for File Utility Translation",
    "Order Management in Retail",
    "HR Management System",
    "Insurance Software",
    "Time Tracking for Freelancers"
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Related Cases</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((title, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <p className="font-medium text-sm text-gray-800">{title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Discover More Projects</button>
      </div>
    </section>
  );
}
