import React from 'react'
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Hero from './../components/Home/Hero';
import UspSection from './../components/Home/UspSection';
import About from './../components/Home/about';
import ServiceSection from './../components/Home/services';
import IndWeHelp from './../components/Home/indWeHelp';

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <UspSection/>
      <About/>
      <ServiceSection/>
      <IndWeHelp/>
      <Footer/>
    </div>
  )
}

export default Page

