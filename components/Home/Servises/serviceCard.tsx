import React from 'react'
import Image
from 'next/image'


type props = {
  image : string;
  title: string;
}

const serviceCard = ({image, title}:props) => {
  return (
    <div className=' bg-gray-100 p-6 cursor-pointer transition-all duration-500 group relative shadow rounded-xl hover:bg-blue-800 '>
      <Image src={image} alt={title} width={60} height={90} />
      <h1 className='text-xl  mt-5 font-semibold group-hover:text-white transition-all duration-500'>{title}</h1>
      <p className='mt-4 font-medium text-gray-500 group-hover:text-gray-300 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit repellat sequi ratione, explicabo fugiat.</p>
      <div className=''>
        learn more
      </div>
    </div>
  )
}

export default serviceCard
