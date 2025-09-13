"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { IoMdCloseCircle } from "react-icons/io";

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const toggler = () => setIsMobileOpen((prev) => !prev)

  return (
    <div>
      <div className=' p-2 bg-gray-100 flex justify-between'>
        <div className=' hidden md:flex xl:flex lg:flex xl-flex justify-end w-full'>You Will Find The Latest News Here</div>
        <div className=' w-full px-8 flex space-x-4 justify-center md:flex-end lg:flex-end'>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaLinkedin /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><AiFillInstagram /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaSquareFacebook /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaXTwitter /></Link>
        </div>
      </div>
      <div className=' flex justify-between  items-center p-7 bg-gray-200'>
        <Link href="#">
        <div className='flex hover:translate-x-2 transition duration-300 hover:text-red-500 items-center justify-center gap-2 font-bold text-sm md:text-2xl lg:text-2xl xl:text-2xl'>
          <Image src="/Logo.png" width={40} height={40} alt='Logo'/>
          <h1>MostaSoft</h1>
        </div>
        </Link>
        <div className=" hidden md:flex lg:flex xl:flex space-x-9 text-xl font-bold">
          <Link href="#" className='hover:bg-white/30 hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2 hover:rounded-xl hover:backdrop-blur-2xl hover:shadow-xl'>Home</Link>
          <Link href="#" className='hover:bg-white/30   hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2 hover:rounded-xl hover:backdrop-blur-2xl hover:shadow-xl'>Services</Link>
          <Link href="#" className='hover:bg-white/30   hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2 hover:rounded-xl hover:backdrop-blur-2xl hover:shadow-xl'>Works</Link>
          <Link href="#" className='hover:bg-white/30  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2 hover:rounded-xl hover:backdrop-blur-2xl hover:shadow-xl'>Blog</Link>
          <Link href="#" className='hover:bg-white/30   hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-2xl p-2 hover:rounded-xl hover:backdrop-blur-2xl hover:shadow-xl'>Contact</Link>
        </div>
        <Link href="#" className=' font-bold text-sm  md:text-xl lg:text-xl  border-white/100  shadow-xl backdrop-blur-xl rounded-2xl p-2 bg-white/30  xl:text-xl hover:translate-x-2 transition duration-300 hover:text-red-500'>Free Consultation</Link>
        <FaBars onClick={toggler} className=" lg:hidden md:hidden cursor-pointer" />
      </div>

      {/* Overlay (blurry background) */}
      {isMobileOpen && (
        <div
          onClick={toggler}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Mobile Nav (half screen) */}
      <div
        className={`
          fixed top-0  left-0 h-full w-1/2 bg-gray-200 shadow-lg z-50
          transform transition-transform duration-500 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className=" p-6 relative flex flex-col gap-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
           <div className='btn-glass px-2 py-2 rounded-full absolute top-0 text-xl right-0 cursor-pointer mt-4 mr-5'>
            <IoMdCloseCircle
            className=""
            onClick={toggler}
          />
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar
