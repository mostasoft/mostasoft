import React from 'react'
import TechWeWorkWith from './comp/TechWeWorkWith'
import ServiceHero from './comp/ServiceHero'
import CliectScetion from './comp/ClientsSection'
import ServiceDeveloperSce from './comp/serviceDeveloperSec'

const page = () => {
  return (
    <div>
      <ServiceHero/>
      <CliectScetion/>
      <ServiceDeveloperSce/>
      <TechWeWorkWith/>
    </div>
  )
}

export default page
