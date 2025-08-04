import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaRegFileCode } from 'react-icons/fa'
import { GrResources } from 'react-icons/gr'
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
                <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-700 uppercase'>Why Choose Us ? </p>
                <h1 className='text-2xl md:text-3xl lg:text-5xl  mt-3  font-bold leading-[1.8rem] md:leading-[3rem]'>Inovation Excelence Building Digital Future Together</h1>
                <div className='mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-white'></div>
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                     <div className='flex items-center h-16 w-16 outline-2 outline-gray-200 dark:text-white rounded-full flex-col justify-center'>
                        <FaRegFileCode className='w-8 h-8 text-blue-500'/>
                     </div>
                     <div className='flex-1'>
                        <h1 className='text-xl font-bold' >Free Integration </h1>
                        <p className='mt-2 text-gray-900 w-[70%] dark:text-blue-400'>Completely leverage existing top-line technology maximizie cost effective service done</p>
                     </div>
                </div>
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                     <div className='flex items-center h-16 w-16 outline-2 outline-gray-200 dark:text-gray-300 rounded-full flex-col justify-center'>
                        <GrResources className='w-8 h-8 text-blue-500'/>
                     </div>
                     <div className='flex-1'>
                        <h1 className='text-xl font-bold' >Premium Resources</h1>
                        <p className='mt-2 text-gray-900 w-[70%] dark:text-blue-400'>Completely leverage existing top-line technology maximizie cost effective service done</p>
                     </div>
                </div>
                <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                     <div className='flex items-center h-16 w-16 outline-2 outline-gray-200 dark:text-gray-300 rounded-full flex-col justify-center'>
                        <BiSupport className='w-8 h-8 text-blue-500'/>
                     </div>
                     <div className='flex-1'>
                        <h1 className='text-xl font-bold' >Unlimited Support</h1>
                        <p className='mt-2 text-gray-900 w-[70%] dark:text-blue-400'>Completely leverage existing top-line technology maximizie cost effective service done</p>
                     </div>
                </div>
            </div>
            <div>
                <Image src="/Images/wc.png" alt="alt" width={800} height={800} />
            </div>
        </div>
    </div>
  )
}

export default WhyChoose
