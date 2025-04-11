const LineMaintenance = () => {
  return (
    <section className='pt-16 pb-2 bg-white'>
      <div className='px-4'>
        <div className='text-start mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Accra is our home...Who better to look after you as a guest.
          </h2>
          <p className='text-xl text-slate-600 '>We turn you around safely and on time.</p>
        </div>

        <div className=' mx-auto mb-12 px-4'>
          <ul>
            <li className='list-disc'>
              Full technical handling(Transit/Pre-flight Check,daily check,weekly check,etc) &
              Assistance(Fuel,Headsets,etc)
            </li>
            <li className='list-disc'>On-Call Handling</li>
            <li className='list-disc'>Total care up to A-check</li>

            <li className='list-disc'>On wing Borescope & NDT inspection</li>
          </ul>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className='bg-gray-100 p-8 rounded-lg'>
            {/* <p className='text-base font-bold py-4'>Cabin Modifications</p> */}
            <p>
              We operate and deliver excellent line maintenance support for a broad range of
              aircraft types, including new generations such as Airbus A320neo, A350, Boeing 737 Max
              and Boeing 787. Our highly qualified workforce is ready to provide you with a 24/7
              technical support and to release your aircraft according to EASA 145 and other
              National Aviation Authority approvals.
            </p>
          </div>

          <div className='bg-gray-100 p-8 rounded-lg'>
            <p className='text-base font-bold pb-4'>Casualty / AOG Support</p>
            <p>
              We understand how damage to an aircraft without prompt response and attention can
              cause significant inconvenience to airline operations and revenue. To tackle these
              operational challenges Aerojet’s AOG Response Team comprising of highly qualified
              engineers are available 24/7 to meet up with the relevant aircraft with the necessary
              tools and equipment to rescue your grounded aircraft.
            </p>
          </div>
        </div>
        {/* Services Tabs */}
      </div>
    </section>
  )
}

export default LineMaintenance
