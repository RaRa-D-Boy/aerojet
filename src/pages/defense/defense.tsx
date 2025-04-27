import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'
import { Data } from './data'
import { TabsComponent } from '@/components/tabs/tabs'
import { Advance, DefenceImg, IntelSecurity, Unmanned } from '@/assets'

const Defense = () => {
  const tabHeaders = [
    'MILITARY AVIATION TECHNICAL SUPPORT ',
    'UNMANNED SYSTEMS ',
    'INTELLIGENT SECURITY & SURVEILLANCE ',
    'ADVANCE TRAINING & SIMULATION SYSTEMS',
    'CERTIFICATION TRAINING and MEDICALS'
  ]
  const tabBodies = [
    <div className='px-8 w-full  '>
      <img
        src={DefenceImg}
        alt='Tamale Hangar'
        className='min-h-[300px] md:min-h-[600px] max-h-[300px] rounded-lg w-full object-cover my-3'
      />
      <p className='py-3 text-justify text-sm md:text-lg'>
        <span className='underlined text-blue-500'>Aerojet Defense Technical </span>prides itself in
        serving African and International Military Forces to ensure maximum operational readiness.
        As a provider of technical support for military aircraft, our unique expertise in the fields
        of maintenance, repair, overhaul and logistics ensure maximum operational readiness for our
        partners. We support missions into and wsithin Africa.
      </p>
      <p className='text-justify'>
        <span className='underlined text-blue-500 text-sm md:text-lg'>
          Special Air Operations Unit{' '}
        </span>{' '}
        – We provide all round support for government aircraft providing excellent technical and
        logistical support. From modifications and conversions that turn civilian aircraft into
        government planes, these operations are typically conducted in partnership with the Ministry
        of Defense of a country or territory.
      </p>
    </div>,
    <div className='px-8 w-full  text-justify text-sm md:text-lg'>
      <img
        src={Unmanned}
        alt='Tamale Hangar'
        className='min-h-[300px] md:min-h-[600px] max-h-[300px] rounded-lg w-full object-contain my-3'
      />
      Aerojet’s Unmanned Systems division custom manufactures tactical drones for African military
      forces. Due to the varying needs, operational environments and specific threats faced by
      various countries in our sub region, an off-the-shelf product often fails to meet operational
      needs for African countries. Our drones are carefully developed based on a detailed review of
      each country’s peculiar needs and the existing capabilities or lack thereof of its military.
      In addition, products manufactured from western providers do not come with adequate local
      technical support, which often renders the equipment obsolete after a few years, due to the
      pace of technology.
    </div>,
    <div className='px-8 w-full text-sm md:text-lg'>
      <img
        src={IntelSecurity}
        alt='Tamale Hangar'
        className='min-h-[300px] md:min-h-[600px] max-h-[300px] rounded-lg w-full object-cover my-3'
      />
      <ul>
        <li className='list-disc'>Camera, access control, base camp monitoring solutions.</li>
        <li className='list-disc'>
          AI Facial Recognition and Number plate reading – intruder/unauthorized access detection.
        </li>
      </ul>
    </div>,
    <div className='px-8 w-full  text-sm md:text-lg'>
      <img
        src={Advance}
        alt='Tamale Hangar'
        className='min-h-[300px] md:min-h-[700px] max-h-[300px] rounded-lg w-full object-cover my-3'
      />
      <ul>
        <li className='list-disc'>Warfare & Mission Planning Training</li>
        <li className='list-disc'>
          Tactical Weapons Training (scenario based) Close quarters combat, Low light shooting,
          Barricade, etc.
        </li>
        <li className='list-disc'>Air Traffic Control and Flight Simulation Recurring Training</li>
      </ul>
    </div>,
    <div className='px-8 w-full  text-sm md:text-lg'>
      <ul>
        <li className='list-disc'>BOSIET/ HUET/Sea Survival Training</li>
        <li className='list-disc'>Aircraft Emergency Escape </li>
        <li className='list-disc'>Aeromedicals</li>
        <li className='list-disc'>Offshore Medicals</li>
      </ul>
    </div>
  ]
  return (
    <div id='defense-section'>
      <div className='w-full  md:px-12'></div>
      <FeaturesGrid data={Data} />

      <div className='pt-12 pb-24 lg:px-24'>
        <div className='pb-12'>
          <TabsComponent headers={tabHeaders} bodies={tabBodies} />
        </div>
      </div>
    </div>
  )
}

export default Defense
