import React from 'react'
import Hero from './Hero/Hero'
import Services from './Servises/services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'

const Home = () => {
  return (
    <div className='overflow-hidden' >
      <Hero/>
      <Services/>
      <About/>
      <WhyChoose/>
    </div>
  )
}

export default Home
