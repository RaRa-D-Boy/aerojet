import {  Military} from '@/assets'

export const Data = [
  {
    id: 1,
    image: Military,
    content: () => (
      <div className='text-white'>
        <div className='rounded-2xl my-2'>
        <p
          className='text-xl md:text-4xl font-bold my-4'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {' '}
        DEFENSE & SECURITY
        </p>
          <p
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className='text-sm md:text-lg font-normal'
          >
            Aerojet Defense Technical prides itself in serving African and International Military
            Forces to ensure maximum operational readiness.
          </p>
        </div>
      </div>
    )
  }
]
