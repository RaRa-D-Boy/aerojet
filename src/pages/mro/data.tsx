import { CardImgService1} from '@/assets'


interface Props {
  id: number
  image?: string
  content?: () => React.ReactNode
  link?: React.ReactNode
}

export const Data: Props[] = [
  {
    id: 1,
    image: CardImgService1,
    content: () => (
      <div className='text-white'>
        <p
          className='text-xl md:text-4xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {' '}
          AIRCRAFT MAINTENANCE & REPAIRS (MRO)
        </p>

        <p
          className='py-4 text-justify font-light text-lg w-full xl:w-[80%]'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          One-stop shop for all aspects of maintaining your aircraft with line and base maintenance
          activities up to D-checks, repair, technical management of entire fleets as well as cabin
          and other modification programs.
        </p>
      </div>
    ),
  }
]
