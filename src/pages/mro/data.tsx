import { HomeBg } from '@/assets'
import { Link } from 'react-router-dom'

interface Props {
  id: number,
  image?: string,
  content?: () => React.ReactNode;
  link?: React.ReactNode,
}


export const Data:Props[]= [
  {
    id: 1,
    image: HomeBg,
    content: () => (
      <div className='text-white'>
        <p
          className='text-xl md:text-2xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {' '}
          AIRFRAME MAINTENANCE AND OVERHAUL{' '}
        </p>
        <div className='rounded-2xl my-2'>
          <p
            className='text-lg text-[#b2e0ff] font-semibold '
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            Heavy/Base Maintenance{' '}
          </p>
          <p
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            World-Class Base Maintenance Facility in Accra Ghana.
          </p>
        </div>

        <p
          className='py-4 text-justify font-light'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          We provide high quality services from Africa to the world, from C-checks to conversions,
          upgrades and modifications. We also support end-of lease programs for lessors. At Aerojet
          Engineering we are constantly learning and developing our skills and know-how to ensure we
          are up to date on new technology and techniques. Our aim is to provide you best-in-class
          services that meet your technical requirements and ensures the highest safety standards.
        </p>
      </div>
    ),
    link: (
      <Link
        to='#'
        data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className=' text-white bg-[#2880B9] px-6 py-2 rounded-full text-xs'
      >
        Learn more
      </Link>
    )
  },
  {
    id: 2,
    image: HomeBg,
    content: () => (
      <div className='text-white'>
        <p
          className='text-xl md:text-2xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          LINE MAINTENANCE & AOG
        </p>
        <div
          className='rounded-2xl my-2'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Heavy/Base Maintenance </p> */}
          <p>Accra is our home...Who better to look after you as a guest.</p>
        </div>

        <p
          className='py-4 text-justify font-light'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          We turn you around safely and on time.
        </p>
        <ul
          className='space-y-2'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <li className='list-disc'>
            Fulltechnicalhandling(Transit/Pre-flightCheck,dailycheck,weeklycheck,etc)
          </li>
          <li className='list-disc'>Assistance(Fuel,Headsets,etc)</li>
          <li className='list-disc'>On-CallHandling</li>
          <li className='list-disc'>TotalcareuptoA-check</li>
          <li className='list-disc'>OnwingBorescope&NDTinspection</li>
        </ul>
        <p
          className='py-3'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          We operate and deliver excellent line maintenance support for a broad range of aircraft
          types, including new generations such as Airbus A320neo, A350, Boeing 737 Max and Boeing
          787. Our highly qualified workforce is ready to provide you with a 24/7 technical support
          and to release your aircraft according to EASA 145 and other National Aviation Authority
          approvals.
        </p>
        <p
          className='text-xl md:text-2xl font-bold'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          Casualty / AOG Support{' '}
        </p>
        <p
          className='py-3'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          We understand how damage to an aircraft without prompt response and attention can cause
          significant inconvenience to airline operations and revenue. To tackle these operational
          challenges Aerojet’s AOG Response Team comprising of highly qualified engineers are
          available 24/7 to meet up with the relevant aircraft with the necessary tools and
          equipment to rescue your grounded aircraft.
        </p>
      </div>
    )
  },
  {
    id: 3,
    image: HomeBg,
    content: () => (
      <div className='text-white'>
        <p
          className='text-xl md:text-2xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          FLEET MANAGEMENT AND MAINTENANCE SUPPORT(CAMO)
        </p>
        <div
          className='rounded-2xl my-2'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Heavy/Base Maintenance </p> */}
          <p>
            Our services include the below and any other maintenance and technical support you may
            need
          </p>
        </div>

        <p
          className='py-4 text-justify font-light'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          We take care of your fleet so you can focus on your core business of running the airline:
        </p>
        <ul
          className='space-y-2'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <li className='list-disc'>Configuration management</li>
          <li className='list-disc'>Fleet maintenance planning</li>
          <li className='list-disc'>Maintenance production organization</li>
          <li className='list-disc'>Entry into service solutions</li>
          <li className='list-disc'>Aircraft transition management</li>
          <li className='list-disc'>
            Cabin and avionics modifications, engineering and implementation programs
          </li>
          <li className='list-disc'>Accurately predicting maintenance needs</li>
        </ul>
        <p
          className='py-3 font-semibold'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          Aircraft Data and Record Management
        </p>
        <ul
          className='space-y-2'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <li className='list-disc'>
            Define yearly aircraft maintenance requirement based on the flight schedule (level of
            operation) for budget year
          </li>
          <li className='list-disc'>
            Coordinate with Passenger and Cargo commercial to arrange ground time for aircraft
            maintenance checks.
          </li>
          <li className='list-disc'>
            Aircraft online data export, mass search and download services
          </li>
          <li className='list-disc'>Engine Overhaul and Inventory Management</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    image: HomeBg,
    content: () => (
      <div className='text-white'>
        <p
          className='text-xl md:text-2xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {' '}
          TECHNICAL TRAINING & CERTIFICATION{' '}
        </p>
        <div
          className='rounded-2xl my-2'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Aerojet Aviation Training Academy </p> */}
          <p>Aerojet Aviation Training Academy.</p>
        </div>

        <p
          className='py-4 text-justify font-light'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          provides first class aviation certification and skills training for the region. Our
          engineering programs target every level from skilled mechanics and Technicians to Licensed
          Aircraft Engineers (LAE’s). Additional courses such as Type Ratings, continuation training
          and Aviation Management courses.
        </p>
      </div>
    )
  }
]
