import { HomeBg } from "@/assets";


export const Data = [
    {
      id: 1,
      image: HomeBg,
      content:()=> (
        <div className='text-white'>
          <p
            className='text-xl md:text-2xl font-bold py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            {' '}
            MILITARY AVIATION TECHNICAL SUPPORT{' '}
          </p>
          <div className='rounded-2xl my-2'>
            <p
              className='text-lg text-[#b2e0ff] font-semibold py-4'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              Aerojet Defense Technical{' '}
            </p>
            <p
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              prides itself in serving African and International Military Forces to ensure maximum
              operational readiness. As a provider of technical support for military aircraft, our
              unique expertise in the fields of maintenance, repair, overhaul and logistics ensure
              maximum operational readiness for our partners. We support missions into and within
              Africa.
            </p>
          </div>

          <p
            className='text-lg text-[#b2e0ff] font-semibold '
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            Special Air Operations Unit
          </p>
          <p
            className='py-4 text-justify font-light'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            We provide all round support for government aircraft providing excellent technical and
            logistical support. From modifications and conversions that turn civilian aircraft into
            government planes, these operations are typically conducted in partnership with the
            Ministry of Defense of a country or territory.
          </p>
        </div>
      )
    },
    {
      id: 2,
      image: HomeBg,
      content: ()=>(
        <div className='text-white'>
          <p
            className='text-xl md:text-2xl font-bold py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            UNMANNED SYSTEMS
          </p>
          <div className='rounded-2xl my-2'>
            {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Heavy/Base Maintenance </p> */}
            <p
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              Aerojet’s Unmanned Systems division custom manufactures tactical drones for African
              military forces. Due to the varying needs, operational environments and specific
              threats faced by various countries in our sub region, an off-the-shelf product often
              fails to meet operational needs for African countries. Our drones are carefully
              developed based on a detailed review of each country’s peculiar needs and the existing
              capabilities or lack thereof of its military. In addition, products manufactured from
              western providers do not come with adequate local technical support, which often
              renders the equipment obsolete after a few years, due to the pace of technology.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      image: HomeBg,
      content: ()=>(
        <div className='text-white'>
          <p
            className='text-xl md:text-2xl font-bold py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            INTELLIGENT SECURITY & SURVEILLANCE
          </p>
          <div className='rounded-2xl my-2'>
            {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Heavy/Base Maintenance </p> */}
            <ul
              className='space-y-2'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              <li className='list-disc'>Camera, access control, base camp monitoring solutions.</li>
              <li className='list-disc'>
                AI Facial Recognition and Number plate reading – intruder/unauthorized access
                detection.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      image: HomeBg,
      content: ()=> (
        <div className='text-white'>
          <p
            className='text-xl md:text-2xl font-bold py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            ADVANCE TRAINING & SIMULATION SYSTEMS{' '}
          </p>
          <ul
            className='space-y-2'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <li className='list-disc'>Warfare & Mission Planning Training</li>
            <li className='list-disc'>
              Tactical Weapons Training (scenario based) Close quarters combat, Low light shooting,
              Barricade, etc.
            </li>
            <li>Air Traffic Control and Flight Simulation Recurring Training</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      image: HomeBg,
      content:()=> (
        <div className='text-white'>
          <p
            className='text-xl md:text-2xl font-bold py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            CERTIFICATION TRAINING and MEDICALS{' '}
          </p>
          <ul
            className='space-y-2'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <li className='list-disc'>BOSIET/ HUET/Sea Survival Training</li>
            <li className='list-disc'>Aircraft Emergency Escape</li>
            <li className='list-disc'>Aeromedicals</li>
            <li className='list-disc'>Offshore Medicals</li>
          </ul>
        </div>
      )
    }
  ]