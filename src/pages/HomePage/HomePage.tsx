import { HomeBg } from '@/assets'
import CardCarousel from '@/components/carousel/carousel'
import { ContactUs } from '@/components/contactUs/contactUs'
import HeroSection from '@/components/hero/hero'
import { ServicesSection } from '@/components/services/services'
import { WhatWeDo } from '@/components/whatWeDo/whatWeDo'

const HomePage = () => {
  return (
    <section className='h-auto bg-white '>
      <div className='w-full  md:px-12'>
        <HeroSection
          img={HomeBg}
          cardTitle={'African Aviation Excellence  is here!'}
          cardBody={`We are the leading provider of aircraft maintenance, repair and overhaul services for civil, VIP, government and military aircraft in the West & Central African Region.`}
          cardNavLink={'#'}
          cardNavText={'Explore our services '}
        />
        <WhatWeDo />
        <CardCarousel />
        <ServicesSection />
        <ContactUs />
      </div>
    </section>
  )
}

export default HomePage
