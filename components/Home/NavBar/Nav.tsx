
"use client"

import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { GrTechnology } from 'react-icons/gr'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import Image from 'next/image';






interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {

  const[navBg, setNavBg]= useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY >= 90) setNavBg(true)
        if(window.scrollY < 90) setNavBg(false)
    };

    window.addEventListener("scroll", handleScroll)

    return()=> window.removeEventListener("scroll", handleScroll)
  },[])


  return (
    <div className={`transition-all ${navBg ?  "bg-black/100" : "bg-white"} duration-1000 h-[11vh] z-[100] fixed w-full`}>
       <div className=' flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            <div className='flex items-center space-x-2'>
              <div className=''>
               <Image src="/Images/cropped_circle_image (1).png" alt='' width={55} height={55} className='rounded-full bg-cover'/>
              </div>
              <h1 className={`text-2xl ${navBg ?  "text-white" : ""} sm:block text-black font-bold`}
              >MostaSoft
              </h1>

            </div>

            {/* NavLinks */}
            <div className="hidden lg:flex items-center space-x-2">
              {NavLinks.map((link)=>{ 
                return <Link href={link.urL} key={link.id} className={`${navBg ?  "text-white" : ""}  text-black text-lg  hover:bg-black hover:text-white hover:rounded-[5px] px-3 font-bold transition-all duration-200`} >
                    {
                      <p>{link.Label}</p>
                    }
                </Link>
              })}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
              <a href="#" className=' border-[2.2px] rounded-xl bg-black text-white px-5 py-2.5 font-bold '>Create Accout
              </a>
              <ThemeToggler/>
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
            </div>
       </div>
    </div>
  )
}

export default Nav
