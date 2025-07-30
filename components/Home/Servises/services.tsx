import React from 'react'
import ServiceCard from './serviceCard';

const services = () => {
  return (
    <div className='pt-16 pb-16'>
    <div className="w-[80%] mx-auto">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div>
          <p className='text-xl sm:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>What We Provide </p>
          <p className='text-xl sm:text-3xl mt-1 md:text-4xl font-bold '>Provide high quality software service for all industry</p>
        </div>
         <div className='lg:ml-auto'>
        <a href="#" className='w-full py-3 px-9 md:auto text-base sm:text-lg md:text-xl text-center text-white font-bold bg-blue-600 duration-300 rounded-full hover:bg-amber-200 '>All Services</a>
      </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center mt-16'>
        <div>
          <ServiceCard image= "/Images/s1.png" title = "Custom Software Development"/>
        </div>
        <div>
          <ServiceCard image= "/Images/s2.png" title = "Custom Software Development"/>
        </div>
        <div>
          <ServiceCard image= "/Images/s3.png" title = "Custom Software Development"/>
        </div>
        <div>
          <ServiceCard image= "/Images/s4.png" title = "Custom Software Development"/>
        </div>
        <div>
          <ServiceCard image= "/Images/s5.png" title = "Custom Software Development"/>
        </div>
        <div>
          <ServiceCard image= "/Images/s6.png" title = "Custom Software Development"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default services
