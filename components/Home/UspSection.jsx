import React from 'react'
import { RiTeamFill } from 'react-icons/ri'

const UspSection = () => {
  return (
    
    <div className='p-6 bg-gray-100 space-y-3'>
     <div className='flex font-bold text-xl justify-center items-center'>USP Of MostaSoft</div>
     <div className='grid grid-cols-1 space-y-2  space-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
      <div className=' p-4 btn-glass'>
        <div className='space-y-2'>
            <div className='flex items-center space-x-2'>
            <RiTeamFill className='' />
            <div className='text-xl font-bold'>Dedicated Team</div>
            </div>
        
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque.</div>
        <button className='btn-glass'>Start Now</button>
        </div>
      </div>
      <div className=' p-4 btn-glass'>
        <div className='space-y-2'>
        <div className='text-xl font-bold'>Dedicated Team</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque.</div>
        <button className='btn-glass'>Start Now</button>
        </div>
      </div>
      <div className=' p-4 btn-glass'>
        <div className='space-y-2'>
        <div className='text-xl font-bold'>Dedicated Team</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque.</div>
        <button className='btn-glass'>Start Now</button>
        </div>
      </div>
      <div className=' p-4 btn-glass '>
        <div className='space-y-2'>
        <div className='text-xl font-bold'>Dedicated Team</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque.</div>
        <button className='btn-glass'>Start Now</button>
        </div>
      </div>
     

      
     
    </div>
    </div>
  )
}

export default UspSection
