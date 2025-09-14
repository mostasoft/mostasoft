import React from 'react'
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Hero from './../components/Home/Hero';
import UspSection from './../components/Home/UspSection';
import About from './../components/Home/about';

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <UspSection/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Page

