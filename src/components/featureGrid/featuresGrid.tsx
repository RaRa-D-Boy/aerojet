import { FC } from 'react'

interface Props {
  id: number,
  image?: string,
  content?: () => React.ReactNode;
  link?: React.ReactNode,
}

interface data {
  data: Props[]
}
export const FeaturesGrid: FC<data> = ({ data }) => {
  return (
    <div className='bg-[#01468B] lg:py-12 '>
      {data.map((item: Props, key: number) => (
        <div className='grid grid-cols-1 lg:grid-cols-2  px-4 lg:px-0 items-center' key={key}>
          <div className={`order-2  py-6 px-4 lg:p-12 ${item.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          {item.content && item.content()}
            <div className='my-3'>{item?.link}</div>
          </div>
          <div className={`order-1  py-6 px-4 lg:p-12 ${item.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <img
              src={item.image}
              alt=''
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              className={`h-full w-full object-cover rounded-2xl  ${item.id % 2 === 0 ? 'lg:rounded-tr-2xl lg:rounded-br-2xl' : 'lg:rounded-tl-2xl lg:rounded-bl-2xl'} `}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
