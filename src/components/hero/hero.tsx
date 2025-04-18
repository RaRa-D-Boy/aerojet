import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  img?: string
  cardTitle?: string
  cardBody?: React.ReactNode
  cardNavLink?: string
  cardNavText?: string
}

const HeroSection: FC<Props> = ({ img, cardTitle, cardBody, cardNavLink, cardNavText }) => {
  const linkAvailability = cardNavLink || ''
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If it's an external link, let it navigate normally
    if (targetId.startsWith('http')) {
      window.location.href = targetId;
      return;
    }
    
    // Extract the section ID from the link (e.g., '/mro' -> 'mro')
    const sectionId = targetId.replace('/', '');
    
    // Find the element with the matching ID
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found, navigate to the link
      window.location.href = targetId;
    }
  };
  
  return (
    <div className='relative h-screen xl:h-full w-full rounded-lg xl:pt-20 '>
      <img
        src={img}
        alt='heroImg'
        data-aos='fade-up'
        className='h-full xl:max-h-[800px] w-full object-cover object-right lg:objext-center rounded-2xl '
      />
      <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/75 to-transparent py-8 rounded-2xl shadow max-w-screen-lg px-8 md:hidden block'></div>
      <div
        data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='absolute bottom-5  md:bottom-0 left-0 md:m-8 bg-transparent md:bg-white py-8 rounded-2xl shadow max-w-screen-lg mx-auto md:w-[450px] px-8'
      >
        <h2 className='text-2xl md:text-4xl font-bold md:text-black text-white'>
          {cardTitle}
        </h2>
        <div className=' text-sm md:text-lg py-5 text-justify md:text-black text-white'>{cardBody}</div>
        <div>
          {linkAvailability !== '' && (
            <a
              href='#'
              onClick={(e) => handleScrollTo(e, cardNavLink || '#')}
              className=' text-white bg-[#2880B9] px-6 py-2 rounded-full text-xs'
            >
              {' '}
              {cardNavText}{' '}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
