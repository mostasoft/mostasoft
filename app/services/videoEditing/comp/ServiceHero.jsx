export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background glow (optional) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-orange-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="text-center max-w-3xl z-10">
        <p className="text-sm text-orange-400 mb-4 tracking-wide uppercase">
          Manage Your Finances
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Web Design<br className="hidden md:block" /> Services
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8">
          At MostaSoft, we work with clients to shape software solutions across the full development lifecycle — from business analysis to delivery and support — and help modernize legacy systems or provide expert advisory at any stage of SDLC.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Get Started Free
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.368v5.264a1 1 0 001.156.98l4.596-2.65a1 1 0 000-1.764z"
              />
            </svg>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
