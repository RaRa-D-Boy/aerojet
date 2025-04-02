import { HomeBg } from '@/assets'
import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'
import HeroSection from '@/components/hero/hero'
import { Data } from './data'


const MRO = () => {
  return (
    <div className=''>
      <div className='w-full  md:px-12'>
        <HeroSection
          img={HomeBg}
          cardTitle={'AIRCRAFT MAINTENANCE & REPAIRS (MRO)'}
          cardBody={
            <div>
              <p>
                Whether you are a flag carrier, a lessor or a low-cost airline, whether you operate
                an Airbus, a Boeing or a regional aircraft fleet – we are your one-stop shop for all
                aspects of maintaining your aircraft.
              </p>
              <p className='py-4'>
                In Aerojet you will have a truly reliable African partner with a unique position at
                the heart of technical operations on the continent supporting fleets of every size
                and composition.
              </p>
              <p>
                Our range of capabilities covers line and base maintenance activities at our home
                base in Ghana. Our technicians are properly equipped with the the right tooling and
                logistics to support both scheduled and unplanned servicing. Our services encompass
                aircraft overhaul including heavy maintenance up to D-checks, repair, technical
                management of entire fleets as well as cabin and other modification programs.
              </p>
            </div>
          }
        />
      </div>
      <FeaturesGrid data={Data} />
    </div>
  )
}

export default MRO
