import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 items-center justify-center bg-gray-200 ">
      <div className=" space-y-9">
        <Link href="#">
          <div className="flex hover:translate-x-2 transition duration-300 hover:text-red-500 items-center  gap-2 font-bold text-sm md:text-2xl lg:text-2xl xl:text-2xl">
            <Image src="/Logo.png" width={40} height={40} alt="Logo" />
            <h1>MostaSoft</h1>
          </div>
        </Link>

        <div className="">
            <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ut
          voluptatibus hic nesciunt.
        </p>
        </div>
        <div className="flex gap-4">
            <button className="btn-glass">hello</button>
            <button className="btn-glass">hello</button>
        </div>
         <div className=' w-full  flex space-x-4'>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaLinkedin /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><AiFillInstagram /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaSquareFacebook /></Link>
          <Link href="#" className='bg-white  hover:text-red-500 hover:translate-x-2 transition duration-300 rounded-xl p-2 rounded-xlbackdrop-blur-2xl shadow-3xl'><FaXTwitter /></Link>
        </div>
        
      </div>
      
       <div className="space-y-3 w-full">
        <div className="btn-glass font-bold text-xl   hover:text-red-500 hover:translate-x-2  "> 
        <Link href="#">Company</Link></div>
        <div className="btn-glass w-50 hover:text-red-500 hover:translate-x-2 "> <Link href="#" >About</Link></div>
        <div className="btn-glass w-40 hover:text-red-500 hover:translate-x-2 "><Link href="#">Case Studies</Link></div>
        <div className="btn-glass w-30  hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Blog</Link></div>
        <div className="btn-glass  w-20 hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Teams</Link></div>
       </div>
      
      <div className="space-y-3 w-full">
        <div className="btn-glass text-xl font-bold  hover:text-red-500 hover:translate-x-2  "> 
        <Link href="#">Services</Link></div>
        <div className="btn-glass w-50 hover:text-red-500 hover:translate-x-2 "> <Link href="#" >WordPress</Link></div>
        <div className="btn-glass w-40 hover:text-red-500 hover:translate-x-2 "><Link href="#">Web Design</Link></div>
        <div className="btn-glass w-30  hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Front End</Link></div>
        <div className="btn-glass  w-25 hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Back End</Link></div>
       </div>
      
      <div className="space-y-3 w-full">
        <div className="btn-glass  text-xl font-bold hover:text-red-500 hover:translate-x-2  "> 
        <Link href="#">Industries</Link></div>
        <div className="btn-glass w-50 hover:text-red-500 hover:translate-x-2 "> <Link href="#" >E-commerce</Link></div>
        <div className="btn-glass w-40 hover:text-red-500 hover:translate-x-2 "><Link href="#">Healthcare</Link></div>
        <div className="btn-glass w-30  hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Real Estate</Link></div>
        <div className="btn-glass  w-20 hover:text-red-500 hover:translate-x-2 "><Link href="#"  className="  ">Food</Link></div>
       </div>
      
    </div>
  );
};

export default Footer;
