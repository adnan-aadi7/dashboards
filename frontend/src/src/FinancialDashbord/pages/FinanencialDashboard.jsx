import React from 'react'
import Cards from '../components/dashboard/Cards'
import Analytics from "../components/dashboard/Analytic"

const FinanencialDashboard = () => {
  return (
   <>
    {/* Header */}
    <div className='flex bg-gradient-to-r from-[#000000] to-[#20A804] rounded-xl text-white text-xl p-2'>
      <h3>FINANCIAL MODEL</h3>
    </div>

    {/* Main Section */}
    <div className='bg-[#181C3A] w-full'>
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Cards full width */}
          <div className='col-span-12'>
            <Cards />
          </div>

          {/* Analytics full width but inside 3 cards */}
          <div className='col-span-12 mt-4'>
            <Analytics />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default FinanencialDashboard
