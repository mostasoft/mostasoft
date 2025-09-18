import React from 'react'
import ContactHero from './contactComp/ServiceHero'
import CTA from './contactComp/CTA'
import Follow from './contactComp/Follow'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <CTA/>
      <Follow/>
    </div>
  )
}

export default page
