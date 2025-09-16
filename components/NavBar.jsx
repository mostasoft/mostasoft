"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggler = () => setIsMobileOpen((prev) => !prev);

  return (
    <div>
      {/* Top Bar */}
      <div className="p-2 bg-gray-100 flex justify-between">
        <div className="hidden md:flex justify-end w-full">
          You Will Find The Latest News Here
        </div>
        <div className="w-full px-8 flex space-x-4 justify-center md:justify-end">
          <Link
            href="https://www.linkedin.com/company/mostasoft2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 shadow-3xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/mostasoft"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 shadow-3xl"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61577960994285"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 shadow-3xl"
          >
            <FaSquareFacebook />
          </Link>
          <Link
            href="#"
            className="bg-white hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 shadow-3xl"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center p-7 bg-gray-200 relative">
        {/* Logo */}
        <Link href="#">
          <div className="flex hover:translate-x-2 transition duration-300 hover:text-red-500 items-center gap-2 font-bold text-sm md:text-2xl">
            <Image src="/Logo.png" width={40} height={40} alt="Logo" />
            <h1>MostaSoft</h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-9 text-xl font-bold items-center relative">
          <Link
            href="/"
            className="hover:bg-white/30 hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:bg-white/30 hover:text-red-500 rounded-2xl p-2">
              Services
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0  w-56 rounded-2xl bg-gray-200 shadow-lg z-50 py-2 transition-all duration-500 ease-in-out
              ${isDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}`}
            >
              <div className="mt-5"><Link
                href="/services/webDesign"
                className="block px-4 py-2  rounded-2xl hover:text-red-500"
              >
                Web Design
              </Link>
              <Link
                href="/services/CustomDev"
                className="block px-4 py-2  rounded-2xl hover:text-red-500"
              >
                Custom Website
              </Link>
              <Link
                href="/services/WordPress"
                className="block px-4 py-2  rounded-2xl hover:text-red-500"
              >
                WordPress Website
              </Link>
              <Link
                href="/services/webDesign"
                className="block px-4 py-2  rounded-2xl hover:text-red-500"
              >
                Graphics Design
              </Link>
              <Link
                href="/services/videoEditing"
                className="block px-4 py-2  rounded-2xl hover:text-red-500"
              >
                Video Editing
              </Link></div>
            </div>
          </div>

          <Link
            href="#"
            className="hover:bg-white/30 hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2"
          >
            Works
          </Link>
          <Link
            href="#"
            className="hover:bg-white/30 hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="hover:bg-white/30 hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="font-bold text-sm md:text-xl border-white/100 shadow-xl backdrop-blur-xl rounded-2xl p-2 bg-white/30 hover:translate-x-2 transition duration-300 hover:text-red-500"
        >
          Free Consultation
        </Link>

        {/* Mobile Menu Icon */}
        <FaBars
          onClick={toggler}
          className="lg:hidden md:hidden cursor-pointer"
        />
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={toggler}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-gray-200 shadow-lg z-50 transform transition-transform duration-500 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 relative flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>

          {/* Close Button */}
          <div className="btn-glass px-2 py-2 rounded-full absolute top-0 text-xl right-0 cursor-pointer mt-4 mr-5">
            <IoMdCloseCircle onClick={toggler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
