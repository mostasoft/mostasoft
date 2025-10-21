import React from 'react'
import AbHero from './aboutComp/AbHero';
import MostasoftHistory from './aboutComp/History';
import OurTeamSection from './aboutComp/OurTeam';
import MeetTheExperts from './aboutComp/MeetTheExperts';
import ReliableSoftwareSection from './aboutComp/ReliableSoftwareSection';
import ContactFormSection from './aboutComp/CTA';

const page = () => {
  return (
    <div className='mt-20'>
      <AbHero/>
      <MostasoftHistory/>
      <OurTeamSection/>
      <MeetTheExperts/>
      <ReliableSoftwareSection/>
      <ContactFormSection/>
    </div>
  )
}

export default page
