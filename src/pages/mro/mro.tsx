import { FeaturesGrid } from '@/components/featureGrid/featuresGrid'

import { Data } from './data'
import { TabsComponent } from '@/components/tabs/tabs'
import { tabBodies, tabHeaders } from './constants'

const MRO = () => {
  return (
    <div className=''>
      <div className='w-full  md:px-12'></div>
      <FeaturesGrid data={Data} />

      <div className='pt-4 pb-24'>
        <TabsComponent headers={tabHeaders} bodies={tabBodies} />
      </div>
    </div>
  )
}

export default MRO
