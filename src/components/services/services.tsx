import { HomeBg } from '@/assets'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
  img: string
  title: string
  body: string
  link: string
}

const Items = [
  {
    img: HomeBg,
    title: 'AIRCRAFT MAINTENANCE & REPAIRS (MRO)',
    body: 'One-stop shop for all aspects of maintaining your aircraft with line and base maintenance activities up to D-checks, repair, technical management of entire fleets as well as cabin and other modification programs.',
    link: '/mro'
  },
  {
    img: HomeBg,
    title: 'DEFENSE & SECURITY',
    body: 'Aerojet Defense Technical prides itself in serving African and International Military Forces to ensure maximum operational readiness.',
    link: '/defense'
  },
  {
    img: HomeBg,
    title: 'AVIATION CONSULTANCY',
    body: 'The Aerojet Consulting Team adopts a structured and meticulous approach to ensuring the effective implementation of your goals. Our work would usually begin with a high-level review of the existing situation to uncover potential issues and identify areas of improvement. A well though through and sustainable improvement plan will then be developed and put forward with and for you in each of the relevant areas.',
    link: '/aviation'
  },
  {
    img: HomeBg,
    title: 'TECHNICAL TRAINING & CERTIFICATION',
    body: 'provides first class aviation certification and skills training for the region. Our engineering programs target every level from skilled mechanics and Technicians to Licensed Aircraft Engineers (LAEs). Additional courses such as Type Ratings, continuation training and Aviation Management courses.',
    link: '#'
  }
]
export const ServicesSection = () => {
  return (
    <div className='service-bg lg:p-12 py-12 px-4'>
      <div className='py-12'>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className='text-2xl text-[#2880B9] md:text-4xl font-bold'
        >
          OUR SERVICE
        </p>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className='w-full md:max-2-screen-md text-justify text-sm text-black'
        >
          Whether you are a flag carrier, a lessor or a low-cost airline, we are your one-stop shop
          for all aspects of maintaining your aircraft.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
        {Items.map((list: Props, key: number) => (
          <div
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className='bg-[#2880B9] rounded-2xl flex flex-col h-full'
            key={key}
          >
            <img
              src={list.img}
              alt=''
              className='min-h-[250px] font-light rounded-2xl w-full object-cover'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            />
            <div
              className='p-4 text-white flex-grow'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              <p className='py-3 font-bold'>{list.title}</p>
              <p className='pb-1 text-sm text-justify'>{list.body}</p>
            </div>
            <div
              className='mt-auto flex flex-col p-4'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              <Link to={list.link} className='text-sm text-white flex gap-3 items-center'>
                Learn more <IoIosArrowForward className=' text-white' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
