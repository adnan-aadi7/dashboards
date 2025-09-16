import React from 'react'
import DurationQuarter from '../components/dashboard/DurationQuarter'
import DurationDeadline from '../components/dashboard/DurationDeadline'
import AveragePurchase from '../components/dashboard/AveragePurchase'
import Exit from '../components/dashboard/Exit'
import ActiveDealsTable from '../components/dashboard/ActiveDealsTable'

const DashboardHealthCare = () => {
  return (
    <>
    <div className="w-full">
        <p className='text-white text-xl lg:text-2xl font-semibold pb-5'>DURATION CONSECUTIVE STEPS</p>
        <div className='flex  w-full bg-[#090D28] px-3'>

        <DurationQuarter />
        <DurationDeadline />
      
        
      
          
        
        </div>

        
    </div>
    <AveragePurchase/>
    <Exit />
    <ActiveDealsTable/>
    </>
  )
}

export default DashboardHealthCare
