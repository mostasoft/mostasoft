import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' bg-cover relative bg-[url("/Images/image.jpg")]  h-[100vh] flex justify-center flex-col'>
     <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-3 gap-10'>
      <div className=''>
         <p className='text-sm sm:text-base md:text-2xl font-bold text-white '>MostaSoft Indusry LTD</p>

         <h1 className=' text-xl md:text-7xl lg:text-6xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[4rem]'>
          providing software solution for your any <span className='text-yellow-300'>bussiness</span>
          </h1>
          <p className='text-sm sm:text-base font-medium md:text-shadow-lg text-gray-200 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, vitae. Lorem ipsum dolor sit amet.</p>
         <button className='mt-6 px-5 py-3 bg-amber-300 font-semibold hover:bg-black hover:text-white  rounded-lg transition-all duration-500'>
           More
         </button>
      </div>

      <div className='mx-auto hidden  xl:block '>
        <Image src="/Images/hero.png" alt="alt" width={900} height={900} />
      </div>

      <div className=''>
         <video autoPlay={true} muted ={true}  src="/Images/WhatsApp Video 2025-08-08 at 22.23.15_af70c103.mp4" />
      </div>
      
     </div>
    </div>
  )
}

export default Hero
