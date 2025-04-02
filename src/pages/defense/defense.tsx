import { HomeBg } from '@/assets'
import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'
import HeroSection from '@/components/hero/hero'
import { Data } from './data'

const Defense = () => {
 

  return (
    <div className=''>
      <div className='w-full  md:px-12'>
        <HeroSection
          img={HomeBg}
          cardTitle={'DEFENSE & SECURITY'}
          cardBody={
            <div>
              <p className='py-5'>
                Aerojet Defense Technical prides itself in serving African and International
                Military Forces to ensure maximum operational readiness.
              </p>
            </div>
          }
        />
      </div>

      <FeaturesGrid data={Data} />
    </div>
  )
}

export default Defense
