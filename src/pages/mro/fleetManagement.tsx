import { FleetGirl, FleetPL } from '@/assets'

const FleetManagement = () => {
  return (
    <section className='pt-16 pb-2 bg-white'>
      <div className=' px-4'>
        <div className='text-start mb-12'>
          <h2 className='text-3xl font-bold mb-4 '>
            Our services include the below and any other maintenance and technical support you may
            need{' '}
          </h2>
          <p className=' text-slate-600 '>
            We take care of your fleet so you can focus on your core business of running the
            airline:
          </p>
        </div>
        <div className='relative h-auto'>
          <img
            src={FleetPL}
            alt='Tamale Hangar'
            className='min-h-[300px] md:min-h-[600px] max-h-[300px] rounded-lg w-full object-cover my-3'
          />
        </div>
        <div className=' mx-auto mb-12 px-4'>
          <ul>
            <li className='list-disc'>Configuration management</li>
            <li className='list-disc'>Fleet maintenance planning</li>
            <li className='list-disc'>Maintenance production organization</li>

            <li className='list-disc'>Entry into service solutions</li>
            <li className='list-disc'>Aircraft transition management</li>
            <li className='list-disc'>
              Cabin and avionics modifications, engineering and implementation programs
            </li>
            <li className='list-disc'>Accurately predicting maintenance needs</li>
          </ul>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-start'>
          <div className=' order-2 lg:order-1'>
            <div className=' mx-auto mb-12 px-4'>
              <h2 className='text-3xl font-bold mb-4'>Aircraft Data and Record Management</h2>

              <ul>
                <li className='list-disc'>Digital scanning and archiving of aircraft documents</li>
                <li className='list-disc'>
                  Online access of aircraft documents for lessor and regulatory bodies review
                </li>
                <li className='list-disc'>
                  Aircraft online data export, mass search and download services
                </li>

                <li className='list-disc'>
                  Onsite inspection and audit of aircraft and component documents during aircraft
                  deliveries and redeliveries
                </li>
                <li className='list-disc'>
                  Giving status of aircraft and Components complied AD, complied SB, LLP, Hard Time
                  and OC/CM lists
                </li>
                <li className='list-disc'>
                  Cabin and avionics modifications, engineering and implementation programs
                </li>
              </ul>
            </div>
            <div className=' mx-auto mb-12 px-4'>
              <h2 className='text-3xl font-bold mb-4'>
                Aircraft Maintenance Planning & Record Controls
              </h2>
              <ul>
                <li className='list-disc'>
                  Define yearly aircraft maintenance requirement based on the flight schedule (level
                  of operation) for budget year
                </li>
                <li className='list-disc'>
                  Coordinate with Passenger and Cargo commercial to arrange ground time for aircraft
                  maintenance checks.
                </li>
                <li className='list-disc'>Engine Overhaul and Inventory Management</li>
              </ul>
            </div>
          </div>

          <div className='relative h-auto order-1 lg:order-2'>
            <img
              src={FleetGirl}
              alt='Tamale Hangar'
              className='min-h-[300px] lg:min-h-[650px]   rounded-lg w-full object-cover lg:object-left my-3'
            />
          </div>
        </div>

        {/* Services Tabs */}
      </div>
    </section>
  )
}

export default FleetManagement
