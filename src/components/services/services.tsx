import { CardImgService1, CardImgService2, CardImgService4 } from '@/assets'

interface Props {
  img: string
  title: string
  body: string
  link: string
}

const Items = [
  {
    img: CardImgService1,
    title: 'AIRCRAFT MAINTENANCE & REPAIRS (MRO)',
    body: 'Your one-stop shop for maintaining all your assets',
    link: '/mro'
  },
  {
    img: CardImgService4,
    title: 'TECHNICAL TRAINING & CERTIFICATION',
    body: 'provides first class aviation certification and skills training for the African continent.',
    link: 'https://aerojet-academy.com/'
  },
  {
    img: CardImgService2,
    title: 'DEFENSE & SECURITY',
    body: 'Enhancing security and defence operational readiness with efficient technical support',
    link: '/defense'
  },
  // {
  //   img: CardImgService3,
  //   title: 'AVIATION CONSULTANCY',
  //   body: 'The Aerojet Consulting Team adopts a structured and meticulous approach to ensuring the effective implementation of your goals. Our work would usually begin with a high-level review of the existing situation to uncover potential issues and identify areas of improvement. A well though through and sustainable improvement plan will then be developed and put forward with and for you in each of the relevant areas.',
  //   link: '/aviation'
  // },
  
]
export const ServicesSection = () => {
  return (
    <div className='service-bg lg:p-12 py-12 px-4' id='service-section'>
      <div className='py-12'>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className='text-2xl text-[#2880B9] md:text-4xl font-bold'
        >
          OUR SERVICES
        </p>
       
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        {Items.map((list: Props, key: number) => (
          <a
            href={list.link}
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className='bg-[#2880B9] group rounded-2xl flex flex-col h-full'
            key={key}
          >
            <img
              src={list.img}
              alt=''
              className='min-h-[250px] max-h-[250px] font-light rounded-2xl w-full object-cover'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            />
            <span
              className='px-8 pt-4 pb-8 text-white flex-grow font-bold'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              {list.title}
              <p className='pb-1 text-sm  font-normal text-justify'>{list.body}</p>
            </span>
            <span
              className='mt-auto hidden text-white hover:text-blue-950 hover:font-semibold text-sm group-hover:flex flex-col px-8 pb-3'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              Learn more
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
