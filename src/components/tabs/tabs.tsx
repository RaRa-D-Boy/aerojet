// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


// interface Data {
//   headers: string[]
//   body: ReactNode[] // Allows JSX/component content
// }
import type React from "react"
import { useState } from "react"


interface TabProps {
  headers: string[]
  bodies: React.ReactNode[]
}

export const TabsComponent: React.FC<TabProps> = ({ headers, bodies }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full px-2 md:px-12">
      <div className="flex flex-nowrap overflow-x-auto space-x-1 rounded-lg bg-gray-100 p-2">
        {headers.map((header, index) => (
          <button
            key={index}
            className={
              `text-xs md:text-sm font-semibold md:font-medium py-2 px-4 rounded-lg text-nowrap uppercase transition-colors duration-300 min-w-[300px] w-auto
              ${activeTab === index ? "bg-[#2880B9] text-white" : "text-gray-500 hover:text-gray-700"}`
            }
            onClick={() => setActiveTab(index)}
          >
            {header}
          </button>
        ))}
      </div>
      <div className="mt-4">{bodies[activeTab]}</div>
    </div>
  )
}
// export const TabsComponent = () => {
//   return (
//    <section>hello world</section>
//   )
// }
