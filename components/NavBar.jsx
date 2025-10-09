"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMicroblog,
  FaPhone,
} from "react-icons/fa";
import { FaUserGear, FaXTwitter } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCall, IoHome } from "react-icons/io5";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";
import { CgMail } from "react-icons/cg";

const MobileDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-bold flex justify-between items-center py-2 px-2 rounded-lg hover:bg-[var(--MostUsed-color)]/10 transition"
      >
        <span className="flex items-center gap-1">
          <MdMiscellaneousServices />
          {title}
        </span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          ▶
        </span>
      </button>
      {isOpen && <div className="flex flex-col pl-6 mt-2 gap-1">{children}</div>}
    </div>
  );
};

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const toggler = () => setIsMobileOpen((prev) => !prev);
  const handleLinkClick = () => setIsMobileOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setHideTopBar(currentScrollY > lastScrollY && currentScrollY > 80 ? true : false);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Green Gradient Bar */}
      <div
        className={`w-full flex px-5 justify-between h-8 items-center fixed left-0 z-[60] transition-all duration-500 ease-in-out bg-gradient-to-r from-green-400 via-green-500 to-green-600 ${
          hideTopBar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 top-0"
        }`}
      >
        <div className="flex gap-4 items-center">
          <a href="" className="hidden md:flex items-center text-sm text-white gap-1">
            <FaPhone /> +8801305009243
          </a>
          <a href="" className="flex items-center text-sm text-white gap-1">
            <CgMail size={18} /> OrganicFood@gamail.com
          </a>
        </div>
        <div className="flex gap-4 text-white text-sm">
          <Link href="https://www.linkedin.com/company/mostasoft2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com/mostasoft" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61577960994285" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="#"><FaXTwitter /></Link>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`fixed left-0 w-full z-[50] flex justify-between items-center px-8 py-4 transition-all duration-500 ease-in-out ${
          hideTopBar ? "top-0" : "top-8"
        } ${isScrolled ? "shadow-lg bg-white/60 backdrop-blur-lg" : "bg-green-50"}`}
      >
        
        {/* Logo */}
        <Link href="#">
          <div className="flex hover:text-[var(--MostUsed-color)] hover:translate-x-2 transition duration-300 items-center gap-2 font-bold text-sm md:text-2xl">
            <Image src="/Logo.png" width={40} height={40} alt="Logo" />
            MostaSoft
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-5 text-[18px] font-semibold items-center relative">
          <Link
            href="/"
            className="flex items-center gap-1 justify-center text-black hover:text-[var(--MostUsed-color)] hover:translate-x-2 transition duration-300 rounded-2xl p-2"
          >
            <IoHome /> Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className="flex items-center gap-1 justify-center rounded-2xl p-2 hover:text-[var(--MostUsed-color)] transition">
              <FaUserGear /> Services
            </button>
            <div
              className={`absolute top-full left-0 w-56 rounded-2xl bg-gray-200 shadow-lg z-50 py-2 transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              {["Web Design","Custom Website","WordPress Website","Graphics Design","Video Editing"].map((item,i)=>(
                <Link key={i} href={`/services/${item.replace(/\s+/g,'')}`} className="block px-4 py-2 rounded-2xl hover:text-[var(--MostUsed-color)]">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/works" className="flex items-center gap-1 hover:text-[var(--MostUsed-color)] transition duration-300 rounded-2xl p-2">
            <GrServices /> Works
          </Link>
          <Link href="/blog" className="flex items-center gap-1 hover:text-[var(--MostUsed-color)] transition duration-300 rounded-2xl p-2">
            <FaMicroblog /> Blog
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-[var(--MostUsed-color)] transition duration-300 rounded-2xl p-2">
            <FcAbout /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-[var(--MostUsed-color)] transition duration-300 rounded-2xl p-2">
            <MdContactPhone /> Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden md:flex font-bold text-sm md:text-xl bg-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-2 hover:text-[var(--MostUsed-color)] hover:translate-x-2 transition duration-300"
        >
          Free Consultation
        </Link>

        {/* Mobile Menu Icon */}
        <FaBars onClick={toggler} className="lg:hidden md:hidden cursor-pointer" />
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && <div onClick={toggler} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"></div>}

      {/* Mobile Nav */}
      <div className={`fixed top-25  left-0 h-full w-3/4 max-w-xs bg-green-100 shadow-lg z-40 transform transition-transform duration-500 ease-in-out ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close Icon */}
        <div className="absolute top-2 right-2 z-50">
          <IoMdCloseCircle onClick={toggler} className="text-2xl cursor-pointer" />
        </div>

        <div className="px-6 relative flex flex-col gap-4 mt-10">
          <Link onClick={handleLinkClick} href="/" className="flex items-center gap-1 font-bold p-2 hover:bg-[var(--MostUsed-color)]/20 rounded-lg">
            <IoHome /> Home
          </Link>
          <MobileDropdown title="Services">
            {["Web Design","Custom Website","WordPress Website","Graphics Design","Video Editing"].map((item,i)=>(
              <Link key={i} onClick={handleLinkClick} href={`/services/${item.replace(/\s+/g,'')}`} className="p-2 font-semibold hover:bg-[var(--MostUsed-color)]/20 hover:text-white rounded-lg">
                {item}
              </Link>
            ))}
          </MobileDropdown>
          <Link onClick={handleLinkClick} href="/works" className="flex items-center gap-1 font-bold p-2 hover:bg-[var(--MostUsed-color)]/20 rounded-lg"><FaUserGear /> Works</Link>
          <Link onClick={handleLinkClick} href="/blog" className="flex items-center gap-1 font-bold p-2 hover:bg-[var(--MostUsed-color)]/20 rounded-lg"><FaMicroblog /> Blog</Link>
          <Link onClick={handleLinkClick} href="/about" className="flex items-center gap-1 font-bold p-2 hover:bg-[var(--MostUsed-color)]/20 rounded-lg"><FcAbout /> About</Link>
          <Link onClick={handleLinkClick} href="/contact" className="flex items-center gap-1 font-bold p-2 hover:bg-[var(--MostUsed-color)]/20 rounded-lg"><IoCall /> Contact</Link>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[40px]" />
    </>
  );
};

export default NavBar;
