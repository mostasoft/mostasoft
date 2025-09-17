import React from 'react'
import Hero from "./comp/Hero"
import Case from "./comp/case"
import HHero from "./detailedCase/Hero"
import Challenge from './detailedCase/Challange'
import Approach from './detailedCase/approach'
import KeyFeatures from './detailedCase/keyFeatures'
import Result from './detailedCase/result'
import RelatedCases from './detailedCase/relatedCase'
import ContactForm from './detailedCase/CTA'

const page = () => {
  return (
    <div>
      <Hero/>
      <Case/>
      <HHero/>
      <Challenge/>
      <Approach/>
      <KeyFeatures/>
      <Result/>
      <RelatedCases/>
      <ContactForm/>
    </div>
  )
}

export default page
