
import HHero from "./detailedCmp/Hero"
import Challenge from './detailedCmp/Challange'
import Approach from './detailedCmp/approach'
import KeyFeatures from './detailedCmp/keyFeatures'
import Result from './detailedCmp/result'
import RelatedCases from './detailedCmp/relatedCase'
import ContactForm from './detailedCmp/CTA'

const page = () => {
  return (
    <div>
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
