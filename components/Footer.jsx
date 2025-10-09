// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative green blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-green-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -top-24 -right-40 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-blob animation-delay-1500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand Column */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-green-400">
              MostaSoft
            </h2>
            <p className="text-sm opacity-90 leading-relaxed">
              Building modern, responsive, and scalable web solutions for businesses and individuals worldwide.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {["Home", "About Us", "Services", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg shadow-md bg-green-500 text-white text-sm transition-transform transform hover:scale-105 hover:bg-green-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Services</h3>
            <ul className="flex flex-col gap-3">
              {["Web Development", "UI/UX Design", "E-Commerce", "SEO & Marketing"].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg shadow-md bg-green-500 text-white text-sm transition-transform transform hover:scale-105 hover:bg-green-600"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Get in Touch</h3>
            <p className="text-sm mb-1">📧 support@yourbrand.com</p>
            <p className="text-sm mb-4">📞 +880 1234 567 890</p>

            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full transition-transform transform hover:scale-125 text-white shadow-lg hover:shadow-green-400 bg-green-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm mt-10 opacity-80 border-t border-green-600 pt-6 text-green-400">
          © {new Date().getFullYear()} MostaSoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
