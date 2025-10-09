// components/Footer.tsx

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 4 Columns: Brand + 3 link sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold mb-2">MostaSoft</h2>
            <p className="text-sm opacity-90 leading-relaxed">
              Building modern, responsive, and scalable web solutions 
              for businesses and individuals worldwide.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  Web Development
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  E-Commerce
                </a>
              </li>
              <li>
                <a className="block bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-lg shadow-md transition" href="#">
                  SEO & Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-1">📧 support@yourbrand.com</p>
            <p className="text-sm mb-4">📞 +880 1234 567 890</p>

            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm mt-10 opacity-80 border-t border-white/20 pt-6">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
