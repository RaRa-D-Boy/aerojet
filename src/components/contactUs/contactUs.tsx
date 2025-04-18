import { HomeBg, Contact } from '@/assets'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  return (
    <div className='mb-2'>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='grid grid-cols-1 md:grid-cols-2 p-4 bg-slate-200 rounded-2xl items-center'
      >
        <div className=' px-4 py-6 md:p-12 order-2 md:order-1'>
          <p
            className='text-2xl md:text-4xl font-bold'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            Ready to experience African Aviation Excellence?
          </p>
          <p
            className='text-justify py-4 max-w-screen-sm text-sm md:text-lg'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            Contact us today to discuss your maintenance needs and discover why we are the leading
            provider of aircraft maintenance in West & Central Africa.
          </p>
          <div
            className='text-sm pt-2'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <Link
              to=''
              className='rounded-2xl py-2 text-white px-6 bg-[#2880B9]'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className='order-1 md:order-2 '>
          <img
            src={Contact}
            alt='contactUsImg'
            className='min-h-[350px] w-full rounded-2xl object-cover'
          />
        </div>
      </div>
    </div>
  )
}
