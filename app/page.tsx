import React from 'react'
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Hero from './../components/Home/Hero';
import UspSection from './../components/Home/UspSection';

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <UspSection/>
      <Footer/>
    </div>
  )
}

export default Page

