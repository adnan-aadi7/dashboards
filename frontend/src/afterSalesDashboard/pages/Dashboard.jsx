import React from 'react'
import Chart from '../components/dashboard/Chart'
import ConsectiveSteps from '../components/dashboard/ConsectiveSteps'
import Exit from '../components/dashboard/Exit'
import DealsTable from '../components/dashboard/DealsTable'
import AfterSalesPilar from '../components/dashboard/AfterSalesPilar'
import TotalPilar from '../components/dashboard/TotalPilar'

const Dashboard = () => {
  return (
    <>
    <div className="w-full grid grid-cols-17 gap-1 ">
      {/* Single row: Chart + three pillars */}
      <div className='col-span-9 xl:col-span-8'>
         <Chart />
      </div>
      <div className='col-span-15 xl:col-span-1 order-1'>
        <TotalPilar/>
      </div>
      <div className='col-span-15 xl:col-span-7 order-2 min-w-0 overflow-hidden'>
        <ConsectiveSteps />
      </div>
      <div className='col-span-15 xl:col-span-1 order-3'>
        <AfterSalesPilar/>
      </div>
    </div>

    <div className='bg-[#090D28] py-5 px-6 mt-10 rounded-lg'>
    <Exit />
    <DealsTable />
    </div>
    </>
  )
}

export default Dashboard
