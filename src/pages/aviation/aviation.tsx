import { HomeBg } from '@/assets'
import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'
import HeroSection from '@/components/hero/hero'
import { Data } from './data'

const Aviation = () => {
  

  return (
    <div className=''>
      <div className='w-full  md:px-12'>
        <HeroSection
          img={HomeBg}
          cardTitle={'AVIATION CONSULTANCY'}
          cardBody={
            <div>
              <p className='py-5'>
                The Aerojet Consulting Team adopts a structured and meticulous approach to ensuring
                the effective implementation of your goals. Our work would usually begin with a
                high-level review of the existing situation to uncover potential issues and identify
                areas of improvement. A well though through and sustainable improvement plan will
                then be developed and put forward with and for you in each of the relevant areas.
              </p>
            </div>
          }
        />
      </div>

      <FeaturesGrid data={Data} />
    </div>
  )
}

export default Aviation
