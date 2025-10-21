import React from 'react'
import AbHero from './aboutComp/AbHero';
import MostasoftHistory from './aboutComp/History';
import OurTeamSection from './aboutComp/OurTeam';
import MeetTheExperts from './aboutComp/MeetTheExperts';
import ReliableSoftwareSection from './aboutComp/ReliableSoftwareSection';
import ContactFormSection from './aboutComp/CTA';
import ABHero from './aboutComp/AbHero';

const page = () => {
  return (
    <div className='mt-20'>
      <ABHero/>
      <MostasoftHistory/>
      <OurTeamSection/>
      <MeetTheExperts/>
      <ReliableSoftwareSection/>
      <ContactFormSection/>
    </div>
  )
}

export default page
