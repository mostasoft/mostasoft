import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
  <div>
    <div className='text-xl pt-8 pb-8 md:text-2xl bg-gray-100 lg:text-3xl xl:text-4xl font-bold flex items-center justify-center'>About MostaSoft</div>
    <div>
      <div className='grid grid-cols-1 bg-gray-100 justify-between lg:grid-cols-2'>
      <div className='p-6 flex'>
       <div className='pl-20 '>
         <Image src="/CEO2.jpg" className='w-50 rounded-xl' width={400} height={400} alt='CEO'/>
        <div className='font-bold flex items-center justify-center'>Mostakin Haque</div>
        <div className='flex font-semibold items-center justify-center'>Founder & The CEO</div>
       </div>
      </div>
      <div className=''>
       <div className='p-4 space-y-4'>
        <div className='font-bold flex lg:block justify-center md:text-2xl lg:text-3xl'>What Runs In Our DNA</div>
        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam a provident inventore rerum hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero totam earum, maiores porro veritatis sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus qui rerum assumenda similique! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, eos. Temporibus, blanditiis?</p>
        <div className='space-x-4 flex'>
           <button className="btn-glass hover:translate-x-2 text-red-500">More About MostaSoft</button>
           <button className="btn-glass hover:translate-x-2 text-red-500">Contact The CEO</button>
        </div>
      </div>
     </div>
    </div>
    </div>
  </div>
  )
}

export default about
