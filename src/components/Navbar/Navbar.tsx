import { FC, useState, useEffect } from 'react'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { useLocation } from 'react-router-dom'
import { AeroJet } from '@/assets'
import { TbMenu } from 'react-icons/tb'
import { IoCloseOutline } from 'react-icons/io5'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  FlyoutContent?: React.FC
}
const Navbar = () => {
  return (
    <>
      <FlyoutNav />
    </>
  )
}

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 250 ? true : false)
  })

  const [location, setLocation] = useState('/')
  useEffect(() => {
    const path = window.location.pathname
    setLocation(path)
  }, [])

  return (
    <nav
      className={`${location === '/' ? 'fixed' : 'sticky'}  top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out 
      ${scrolled ? 'bg-white py-4' : 'bg-white py-4 shadow-none'}`}
    >
      <div className='px-8 flex   items-center justify-between'>
        <Logo />
        <div className='hidden gap-6 lg:flex w-full '>
          <Links />
          {/* <CTAs /> */}
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <a href="/">
      <img src={AeroJet} className='w-[150px] h-[50px] object-cover' />
      </a>
      </div>
      
  )
}

const Links = () => {
  return (
    <>
      <div className='flex gap-2 w-full items-center justify-end'>
        {/* <div className=''>logo here</div> */}

        {LINKS.map((l) => (
          <div className='items-end' key={l.text}>
            <NavLink href={l.href} FlyoutContent={l.component}>
              {l.text}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}

const NavLink: FC<NavLinkProps> = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation() // Get the current pathname

  const showFlyout = FlyoutContent && open
  
  // Check if the current path matches any of the service routes
  const isServiceRoute = ['/mro', '/defense', '/aviation'].includes(pathname)
  
  // Set isActive to true if it's the "What We Do" link and we're on a service route
  const isActive = (href === '#' && children === 'What We Do' && isServiceRoute) || pathname === href

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative '
    >
      <div className=''>
        <a
          href={href}
          data-aos='fade-down'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className={`relative flex px-4 py-2 text-sm rounded-full transition-colors duration-300 ${isActive ? 'bg-[#2880B9] text-white' : 'text-black font-semibold hover:bg-gray-200 '}`}
        >
          {children}
          <span
            style={{
              transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)'
            }}
            className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 '
          />
        </a>
      </div>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
            {typeof FlyoutContent === 'function' ? <FlyoutContent /> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// const CTAs = () => {
//   return (
//     <div className='flex items-center gap-3'>
//       <button className='flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black'>
//         <FaUserCircle />
//         <span>Sign in</span>
//       </button>
//       <button className='rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white'>
//         Schedule a Demo
//       </button>
//     </div>
//   )
// }

const AccraMRO = () => {
  return (
    <div className='grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]'>
      <div className='col-span-12 flex flex-col justify-between bg-[#2880B9] p-6 lg:col-span-4'>
        <div>
          <h2 className='mb-2 text-xl font-semibold text-white'>What We Do ?</h2>

          <div className='text-sm'>
            <p className='py-2 text-white'>EASA Part 145</p>
            <p className='text-white'>
              Approved maintenance facility providing high-quality services to keep your aircraft in
              top condition
            </p>
          </div>
        </div>
        <a href='/mro' className='flex items-center gap-1 text-xs text-white hover:underline'>
          Learn more <FiArrowRight />
        </a>
      </div>
      <div className='col-span-12 gap-3 bg-white p-6 lg:col-span-8'>
        <p className='mb-6 w-full text-sm text-neutral-600'>
          Aerojet is an aviation company focused on providing tailored and professional aviation
          services across Africa. With a range of specialist knowledge, experience, international
          exposure and a passion for aviation, we aim to deliver essential but effective services to
          clients across all our business lines.
        </p>
        <div className='col-span-12 grid grid-cols-1 grid-rows-2 gap-1 bg-white  lg:col-span-8'>
          <p className='rounded-lg  bg-white p-3 transition-colors '>
            <li className='text-xs list-disc group-hover:px-3'>
              <a href='/mro' className='hover:bg-gray-100 p-4 rounded-md w-full'>
                AIRCRAFT MAINTENANCE & REPAIRS (MRO)
              </a>
            </li>
          </p>
          <p className='rounded-lg  bg-white p-3 transition-colors '>
            <li className='text-xs list-disc group-hover:px-3'>
              <a href='/defense' className='hover:bg-gray-100 p-4 rounded-md w-full'>
                DEFENSE & SECURITY
              </a>
            </li>
          </p>
          <p className='rounded-lg  bg-white p-3 transition-colors '>
            <li className='text-xs list-disc  group-hover:px-3'>
              <a href='/aviation' className='hover:bg-gray-100 p-4 rounded-md w-full'>
                {' '}
                AVIATION CONSULTANCY
              </a>
            </li>
          </p>
          <p className='rounded-lg  bg-white p-3 transition-colors '>
            <li className='text-xs list-disc  group-hover:px-3'>
              <a href='#' className='hover:bg-gray-100 p-4 rounded-md w-full'>
                TECHNICAL TRAINING & CERTIFICATION
              </a>
            </li>
          </p>
        </div>
      </div>
    </div>
  )
}

// const PricingContent = () => {
//   return (
//     <div className='w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl'>
//       <div className='grid grid-cols-2 lg:grid-cols-1'>
//         <div className='mb-3 space-y-3'>
//           <h3 className='font-semibold'>For Individuals</h3>
//           <a href='#' className='block text-sm hover:underline'>
//             Introduction
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Pay as you go
//           </a>
//         </div>
//         <div className='mb-6 space-y-3'>
//           <h3 className='font-semibold'>For Companies</h3>
//           <a href='#' className='block text-sm hover:underline'>
//             Startups
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             SMBs
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Enterprise
//           </a>
//         </div>
//       </div>
//       <button className='w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white'>
//         Contact sales
//       </button>
//     </div>
//   )
// }

// const CareersContent = () => {
//   return (
//     <div className='grid w-full grid-cols-12 shadow-xl lg:w-[750px]'>
//       <div className='col-span-12 flex flex-col justify-between bg-[#2880B9] p-6 lg:col-span-4'>
//         <div className='mb-6'>
//           <h2 className='mb-2 text-xl font-semibold text-white'>Careers</h2>
//           <p className='text-sm text-indigo-100'>
//             Placeholder was rated a top place to work by Placeholder.
//           </p>
//         </div>
//         <a href='#' className='flex items-center gap-1 text-xs text-indigo-200 hover:underline'>
//           Careers site <FiArrowRight />
//         </a>
//       </div>
//       <div className='col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3'>
//         <div className='space-y-3'>
//           <h3 className='font-semibold'>Business</h3>
//           <a href='#' className='block text-sm hover:underline'>
//             Marketing
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Finance
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Legal
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Sales
//           </a>
//         </div>
//         <div className='space-y-3'>
//           <h3 className='font-semibold'>Engineering</h3>
//           <a href='#' className='block text-sm hover:underline'>
//             Full stack
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Dev ops
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             QA
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Data
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Machine learning
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Management
//           </a>
//         </div>
//         <div className='space-y-3'>
//           <h3 className='font-semibold'>More</h3>
//           <a href='#' className='block text-sm hover:underline'>
//             Support
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Office
//           </a>
//           <a href='#' className='block text-sm hover:underline'>
//             Other
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

interface Props {
  children: React.ReactNode
  href: string
  FoldContent?: () => React.ReactNode // Allow FoldContent to be undefined
  setMenuOpen: (arg: boolean) => void
}

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }: Props) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  return (
    <div className='relative text-neutral-950'>
      {FoldContent !== undefined ? (
        <div
          className='flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold'
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(false)
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? '180deg' : '0deg' }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(false)
          }}
          href='#'
          className='flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold'
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : '0px',
            marginBottom: open ? '24px' : '0px',
            marginTop: open ? '12px' : '0px'
          }}
          className='overflow-hidden'
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='block lg:hidden'>
      <button onClick={() => setOpen(true)} className='block text-3xl'>
        <TbMenu className='text-3xl text-neutral-950' />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='fixed left-0 top-0 flex h-screen w-full flex-col bg-white'
          >
            <div className='flex items-center justify-between py-6'>
           <Logo />
              <button onClick={() => setOpen(false)}>
                <IoCloseOutline className='text-3xl text-neutral-950' />
              </button>
            </div>
            <div className='h-screen overflow-y-scroll bg-neutral-100 p-6'>
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component ? l.component : () => null}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            {/* <div className='flex justify-end bg-neutral-950 p-6'>
              <CTAs />
            </div> */}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

const LINKS = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'What We Do',
    href: '#',
    component: AccraMRO
  },
  {
    text: 'Investor Relations',
    href: '#'
    // component: CareersContent
  },
  {
    text: 'Aerojet Consulting',
    href: '#'
  },
  {
    text: 'Careers',
    href: '#'
  }
]
