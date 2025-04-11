import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'
import { Data } from './data'
import { TabsComponent } from '@/components/tabs/tabs'

const Aviation = () => {
  const tabHeaders = [
    'AIRCRAFT LEASING',
    'AIRLEGISLATIONCOMPLIANCE',
    'SAFETY PLANNING & COMPLIANCE'
  ]
  const tabBodies = [
    <div className='px-8 w-full  '>
         <p className='py-3 text-justify'>
        We provide aircraft on ACMI Wet or dry Lease basis for both Airlines and Oil & Gas clients.
        Aircraft leasing accounts for nearly half of the world's commercial fleet. The ownership and
        management aircraft can be a challenging process. We offer full technical support along the
        whole chain from single services to the most-complex engineering consultancy support for the
        aircraft and engines. We support you with the airworthiness of your leased asset.
      </p>
    </div>,
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>
          Engineering & Maintenance (MRO – Part 145 Compliance){' '}
        </p>
        <p className='text-justify'>
          Our team of highly experienced technical experts in this field have worked previously at
          senior level in commercial aviation; MROs, design and engineering, component support,
          engine overhaul, and national regulators. Based on this wide-ranging experience and
          expertise, we are able to provide specialist support by identifying your exact needs and
          requirements and providing fully compliant and effective solutions.
        </p>
      </div>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>
          Engineering & Maintenance Personnel Training (Part 66 & Part 147 Compliance){' '}
        </p>
        <p className='text-justify'>
          Our experienced team boasts of tons of years of experience in conducting personnel
          training and running a fully compliant part 147 organizations of large reputable
          organisations. We can assist you with ensuring your personnel are appropriately qualified
          and remain in compliance at all times. From Mechanics, Technicians, Fully Licensed
          Aircraft Engineers at supervisory and Fleet management levels to High Level Aviation
          Engineering Management, we can assist at all levels.
        </p>
      </div>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>Airline CAMO Compliance</p>
        <p className='text-justify'>
          Our consultants will walk you through every step of compliance to keep your organization
          within the confines of stringent aviation regulations and law.
        </p>
      </div>
    </div>,
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>
          Airline Set-Up - Technical Consultancy & Operations Advice
        </p>
        <p>
          (including fleet selection) - our approach to fleet selection is based on our unique
          insight into the commercial drivers of profitability and our deep technical knowledge of
          aircraft and their performance. We offer a range of commercial, technical and financial
          advice to operators, owners and investors at each stage of the fleet ownership process.
        </p>
      </div>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>National Aviation Sector Technical Advice</p>
        <p>
          Our consultants offer technical advice and guidance to governments and transport
          ministries. We can offer long-term attaché support to a government or state institution
          providing important ongoing technical advice to administrators and policy leaders for as
          long as required.
        </p>
      </div>
      <div className='bg-gray-100 p-8 rounded-lg'>
        <p className='text-base font-bold py-4'>Supporting Government Aircraft</p>
        <p>
          We provide all round support for government aircraft providing excellent technical and
          logistical support. All parts, overhauls, maintenance programs and regulatory compliance
          will be seamlessly managed to ensure officials have peace of mind to conduct government
          business.
        </p>
      </div>
    </div>
  ]
  return (
    <div className=''>
      <div className='w-full  md:px-12'></div>
      <FeaturesGrid data={Data} />

      <div className='pt-4 pb-24'>
        <div className='pb-12'>
          <TabsComponent headers={tabHeaders} bodies={tabBodies} />
        </div>
      </div>
    </div>
  )
}

export default Aviation
