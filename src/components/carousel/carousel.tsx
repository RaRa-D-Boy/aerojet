import { HomeBg } from '@/assets'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useMeasure from 'react-use-measure'

const CARD_WIDTH = 350
const CARD_HEIGHT = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024
}


interface Props {
url:string,
category:string,
title:string,
description:string
}

const items = [
  {
    id: 1,
    url: HomeBg,
    category: 'Mice',
    title: 'Just feels right',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 2,
    url: HomeBg,
    category: 'Keyboards',
    title: 'Type in style',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 3,
    url: HomeBg,
    category: 'Monitors',
    title: 'Looks like a win',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 4,
    url: HomeBg,
    category: 'Chairs',
    title: 'Back feels great',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 5,
    url: HomeBg,
    category: 'Lights',
    title: "It's lit",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 6,
    url: HomeBg,
    category: 'Desks',
    title: 'Stand up straight',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  }
]

const CardCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <section
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
      className='bg-slate-200 rounded-2xl'
      ref={ref}
    >
      <div className='relative overflow-hidden p-4'>
        {/* CARDS */}
        <div className='w-full'>
          <p
            className='mb-4 text-2xl md:text-4xl font-semibold px-5'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <span className='text-slate-500  '>News</span>
          </p>
          <motion.div
            animate={{
              x: offset
            }}
            className='flex gap-0'
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? '0%' : '-100%'
            }}
            className='absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 py-3  pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3'
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? '0%' : '100%'
            }}
            className='absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3'
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  )
}

const Card = ({ url, category, title, description }: Props) => {
  return (
    <>
      <div
        data-aos='fade-right'
        data-aos-delay='200'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='relative shrink-0 cursor-pointer rounded-2xl bg-transparent shadow-md transition-all hover:scale-[1.015] hover:shadow-xl'
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          marginRight: MARGIN
        }}
      >
        <img src={url} alt='' className='h-full w-full object-cover rounded-2xl' />

        <div
          className='absolute inset-0 z-20 flex flex-col justify-end rounded-2xl bg-gradient-to-t from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm'
          style={{ bottom: 0 }}
        >
          <span className='text-sm font-semibold uppercase text-[#2880B9]'>{category}</span>
          <p className='my-2 text-xl md:text-2xl font-bold'>{title}</p>
          <p className='text-sm text-slate-300'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardCarousel
