import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
       <div>
          <Image src="/Images/about.png" alt="image" width={700} height={700} />
       </div>
       <div>
         <p className='text-sm sm:text-base md:text-xl font-bold '>About Us</p>
         <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>Inovetions Exelance Buliding Digital Future Together</h1>
         <p className='mt-3  text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a
          doloribus vero animi, nulla quidem. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <div className=' mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
            <div className='flex items-center gap-4'>
                <Image src="/Images/a1.png" alt="alt" width={50} height={50} />
                <h1 className='text-xl sm:text-xl font-bold leading-5'>IT Infrastcture Manegment</h1>
            </div>
            <div className='flex items-center gap-4'>
                <Image src="/Images/a2.png" alt="alt" width={50} height={50} />
                <h1 className='text-xl sm:text-xl font-bold leading-5'>Cloud Integration Services</h1>
            </div>
           
          </div>
          <div className=' mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
            <div className='flex items-center gap-4'>
                <Image src="/Images/a3.png" alt="alt" width={50} height={50} />
                <h1 className='text-xl sm:text-xl font-bold leading-5'>Costom Software Development </h1>
            </div>
            <div className='flex items-center gap-4'>
                <Image src="/Images/a4.png" alt="alt" width={50} height={50} />
                <h1 className='text-xl sm:text-xl font-bold leading-5'>Instant Support and Querys</h1>
            </div>
           
          </div>
          <div className='mt-12'>
           <a href="#_ " className='w-full py-4 text-base text-center text-white transition-colors font-semibold duration-500 bg-blue-800 rounded-xl px-9 hover:bg-black ease md:w-auto'> About More</a>
          </div>
       </div>
      </div>
    </div>
  )
}

export default About