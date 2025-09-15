import React from 'react'
import Chart from '../components/dashboard/Chart'
import ConsectiveSteps from '../components/dashboard/ConsectiveSteps'
import Exit from '../components/dashboard/Exit'
import DealsTable from '../components/dashboard/DealsTable'

const Dashboard = () => {
  return (
    <>
    <div className="w-full flex flex-col xl:flex-row gap-0 xl:gap-6">
      <div className='w-full xl:w-2/3'>
        <Chart />
      </div>
      <div className='w-full xl:w-1/2'>
        <ConsectiveSteps />
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
