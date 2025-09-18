export default function ContactHero() {
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
          Contact<br className="hidden md:block" /> Us
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8">
         Please feel free to get in touch with us via any convenient means (phone, email, skype or submit a contact form). We will be glad to answer your questions as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Book A Free Consultation
          </button>
         
        </div>
      </div>
    </section>
  );
}
