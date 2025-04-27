import { AviationImg } from '@/assets'

export const Data = [
  {
    id: 1,
    image: AviationImg,
    content: () => (
      <div className='text-white'>
        <div
          className='rounded-2xl my-2 text-justify'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {/* <p className='text-lg text-[#b2e0ff] font-semibold'>Heavy/Base Maintenance </p> */}
          <p className='text-sm md:text-lg'>
            The Aerojet Consulting Team adopts a structured and meticulous approach to ensuring the
            effective implementation of your goals. Our work would usually begin with a high-level
            review of the existing situation to uncover potential issues and identify areas of
            improvement. A well though through and sustainable improvement plan will then be
            developed and put forward with and for you in each of the relevant areas.
          </p>
        </div>
      </div>
    )
  }
]
