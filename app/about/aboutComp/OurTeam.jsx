// components/OurTeamSection.jsx
"use client";

export default function OurTeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
          {/* Employees */}
          <div>
            <div className="text-3xl font-bold">250+ <span className="text-base font-normal">employees</span></div>
            <div className="mt-4 border-t border-green-500"></div>
            <div className="flex justify-between mt-4 text-sm md:text-base">
              <span>51% seniors</span>
              <span>29% middle</span>
              <span>20% juniors</span>
            </div>
          </div>

          {/* Specialists */}
          <div>
            <div className="text-3xl font-bold">50+ <span className="text-base font-normal">specialists</span></div>
            <div className="mt-4 border-t border-green-500"></div>
            <p className="mt-4 text-sm md:text-base">have worked in Belitsoft for 7+ years</p>
          </div>

          {/* Years */}
          <div>
            <div className="text-3xl font-bold">4 <span className="text-base font-normal">years</span></div>
            <div className="mt-4 border-t border-green-500"></div>
            <p className="mt-4 text-sm md:text-base">average employee tenure at Belitsoft</p>
          </div>
        </div>
      </div>
    </section>
  );
}
