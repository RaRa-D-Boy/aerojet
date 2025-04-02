import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import { Footer } from '@/components/footer/footer'

const Root = () => {
  return (
    <div className='bg-white items-center relative h-auto'>
      <Navbar />
      <div className=' w-full '>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Root
