import { AeroJetWhite } from '@/assets'

export const Footer = () => {
  return (
    <section className='py-20 bg-[#2C3E50] '>
      <div className=' px-4 md:px-24 '>
        <div className='w-full'>
          {/* <div className='pb-10 mb-10 border-b border-gray-700 items-center'>
            <div className='flex flex-wrap -mx-4 items-center'>
              <div className='w-full lg:w-1/2 px-4 mb-4 lg:mb-0'>
                <a className='inline-block' href='#'>
                  <img className='h-15' src='saturn-assets/logos/logo-saturn-light.svg' alt='' />
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='sm:flex -mb-4 items-center lg:justify-end'>
                  <span className='inline-block text-white mb-4 mr-8'>
                    Ready to get collaborate?
                  </span>
                  <a
                    className='relative group inline-block w-full sm:w-auto py-3 px-5 mb-4 text-center text-sm font-semibold text-orange-50 hover:text-orange-900 bg-orange-900 rounded-md overflow-hidden transition duration-300'
                    href='#'
                  >
                    <div className='absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-105 transition duration-500'></div>
                    <span className='relative'>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className='grid grid-cols-1 md:grid-cols-3 -mx-4 mb-18'>
            <div className='w-full lg:w-2/5 px-4 mb-12 lg:mb-0'>
              <div className='xs:max-w-xs'>
                <img src={AeroJetWhite} alt='' className='w-[150px] h-[50px] object-cover' />
              </div>
            </div>
            <div className='w-full px-4 mb-8 sm:mb-0'>
              <h5 className='text-lg font-semibold text-gray-50 mb-4'>Services</h5>
              <ul>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='/mro'>
                    Aircraft Maintenance & Repairs (MRO)
                  </a>
                </li>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='/defense'>
                   Defense & Security
                  </a>
                </li>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='/aviation'>
                    Aviation Consultation
                  </a>
                </li>
                <li>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                   Technical Training & Certification
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className='w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0'>
              <h5 className='text-lg font-semibold text-gray-50 mb-3'>About</h5>
              <ul>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    Our Story
                  </a>
                </li>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    Benefits
                  </a>
                </li>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    Team
                  </a>
                </li>
                <li>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    Careers
                  </a>
                </li>
              </ul>
            </div> */}
            <div className='w-full sm:w-1/3 lg:w-1/5 px-4'>
              <h5 className='text-lg font-semibold text-gray-50 mb-4'>Help</h5>
              <ul>
                <li className='mb-4'>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='sm:flex items-center justify-between'>
            <div className='sm:flex mb-6 sm:mb-0 items-center'>
              <a className='inline-block mr-6 sm:mr-12 text-gray-300 hover:text-gray-200' href='#'>
                Terms & Conditions
              </a>
              <a className='inline-block text-gray-300 hover:text-gray-200' href='#'>
                Privacy Policy
              </a>
            </div>
            <div className='flex items-center'>
              <a className='inline-block mr-9 p-1 hover:bg-gray-800 rounded-md' href='#'>
                <img src='saturn-assets/images/footers/outline-facebook.svg' alt='' />
              </a>
              <a className='inline-block mr-9 p-1 hover:bg-gray-800 rounded-md' href='#'>
                <img src='saturn-assets/images/footers/outline-socialmedia.svg' alt='' />
              </a>
              <a className='inline-block p-1 hover:bg-gray-800 rounded-md' href='#'>
                <img src='saturn-assets/images/footers/outline-linkedin.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
