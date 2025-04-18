import { HomeBg , Maintenance1 , Maintenance2} from '@/assets'
import { IoLocationSharp } from 'react-icons/io5'

const Aircraft = () => {
  return (
    <section className='pt-16 pb-2 bg-white'>
      <div className=' px-4'>
        <div className='text-start mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Heavy/Base Maintenance</h2>
          <p className='text-xl text-slate-600 '>
            World-Class Base Maintenance Facility in Accra Ghana.
          </p>
        </div>

        <div className=' mx-auto mb-12'>
          <p className='text-justify text-sm md:text-lg'>
            We provide high quality services from Africa to the world, from C-checks to conversions,
            upgrades and modifications. We also support end-of lease programs for lessors. At
            Aerojet Engineering we are constantly learning and developing our skills and know-how to
            ensure we are up to date on new technology and techniques. Our aim is to provide you
            best-in-class services that meet your technical requirements and ensures the highest
            safety standards.
          </p>
        </div>

        {/* Locations */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='rounded-lg overflow-hidden '>
            <div className='relative h-auto'>
              <img src={Maintenance1} alt='Tamale Hangar' className='min-h-[300px] max-h-[300px] w-full object-cover' />
            </div>
            <div className='p-6 bg-gray-100'>
              <h3 className='text-xl font-bold mb-2 flex items-center'>
                <IoLocationSharp className='mr-2 h-5 w-5' />
                Accra Location
              </h3>
              <p className='text-slate-600 text-justify text-sm md:text-lg'>
                Our main facility located in Accra provides comprehensive maintenance services with
                state-of-the-art equipment.
              </p>
            </div>
          </div>

          <div className='rounded-lg overflow-hidden '>
            <div className='relative h-auto'>
              <img src={Maintenance2} alt='Tamale Hangar' className='min-h-[300px] max-h-[300px] w-full object-cover' />
            </div>
            <div className='p-6 bg-gray-100'>
              <h3 className='text-xl font-bold mb-2 flex items-center'>
                <IoLocationSharp className='mr-2 h-5 w-5' /> Tamale Location
              </h3>
              <p className='text-slate-600 text-justify text-sm md:text-lg'>
                Our Tamale facility extends our reach across Ghana, providing convenient maintenance
                options for our clients.
              </p>
            </div>
          </div>
        </div>

        <p className='text-start text-sm md:text-lg mb-6 font-bold'>
          Contact us to discuss your maintenance needs, you'll be glad you did.
        </p>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-3'>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <p className='text-sm md:text-lg font-bold py-4'>Cabin Modifications</p>
            <p className='text-justify text-sm md:text-lg'>
              Equip your fleet with modern appealing customized cabins that reflect your airline’s
              brand image. With our worldwide partners, we will manage the whole process from
              consulting and engineering, material and logistics, as well as installation.
            </p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <p className='text-sm md:text-lgfont-bold py-4'>Structural Repair & Composites</p>
            <p className='text-justify text-sm md:text-lg'>
              Our Structural repair shop performs maintenance repair and modification on aircraft
              structural parts. In addition, detailed works such as Replacement of fuselage panels,
              Winglet Modification, Engine strut replacement, passenger aircraft to cargo conversion
              with a major structural repair involvement.
            </p>
            <p className='text-sm md:text-lg font-bold py-4'>Composite</p>
            <p className='text-justify text-sm md:text-lg'>
              Our composite shop performs maintenance repair, on Thrust reverser, rudder, elevator
              and spoiler components including composite materials. Composite repair has quickly
              become one of the biggest elements of structural repairs on modern aircraft.
            </p>
          </div>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <p className='text-sm md:text-lg font-bold py-4'>Component Repair, Testing & Overhaul</p>
            <p className='text-justify text-sm md:text-lg'>
              Repairs and overhauls as well as modifications are all managed on your behalf. Our
              experienced engineering team works continuously on reliability improvements
            </p>
          </div>
        </div>
        {/* Services Tabs */}
      </div>
    </section>
  )
}

export default Aircraft
