import React from 'react'
import Hero from './Hero/Hero'
import Services from './Servises/services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'
import MySwiper from './autoplay/autoplay'
const Home = () => {
  return (
    <div className='overflow-hidden' >
      <Hero/>
       <MySwiper/>
      <Services/>
      <About/>
      <WhyChoose/>
    
    </div>
  )
}
export default Home
