import React from 'react'
import TechWeWorkWith from './comp/TechWeWorkWith'
import ServiceHero from './comp/ServiceHero'
import CliectScetion from './comp/ClientsSection'
import ServiceDeveloperSce from './comp/serviceDeveloperSec'
import WhyMostaSoft from './comp/whyMostaSoft'
import ProcessWeFollow from './comp/ProcessWeFollow'
import Projects from './comp/Projects'
import Faq from './comp/FAQ'
import Start from './comp/Start'
import { FaArrowUp } from 'react-icons/fa';

const page = () => {
  return (
    <div>
      <ServiceHero/>
      <CliectScetion/>
      <ServiceDeveloperSce/>
      <TechWeWorkWith/>
      <WhyMostaSoft/>
      <ProcessWeFollow/>
      <Projects/>
      <Faq/>
      <Start/>
    </div>
  )
}

export default page
