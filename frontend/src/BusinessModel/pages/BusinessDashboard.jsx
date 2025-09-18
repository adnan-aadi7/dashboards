import React from 'react'
import Cards from '../components/Cards'
import ActiveUserChart from '../components/ActiveUserChart'
import CustomerFeedBackChart from '../components/CustomerFeedBackChart'
import Ratio from '../components/Ratio'
import TotalOverView from '../components/TotalOverView'
import Tabs from '../components/Tabs'

const BusinessDashboard = () => {
  return (
    <>
     <div className='flex bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white text-xl p-2 -mt-5'>
  <h3>BUSINESS MODEL</h3>
</div>
<div className='mt-5'>
    <Cards/>
</div>
  
<div className='mt-10 grid grid-cols-4 gap-4'>
<div className='col-span-1'>
<ActiveUserChart/>
</div>
<div className='col-span-1'>
<CustomerFeedBackChart/>
</div>
<div className='col-span-2'>
<Ratio/>
</div>

</div>
<div className='flex bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white text-xl p-2 mt-7'>
<h3>ORGANIZATIONAL MODEL</h3>
</div>

<div className='mt-8'>
  <Tabs
    heading="TOTAL OVERVIEW"
    tabs={["TOTAL OVERVIEW", "TOTAL OVERVIEW", "DEALS ZORG", "PORTFOLIO", "DEALS INDUSTRIE"]}
    defaultActive={0}
    renderContent={(active) => {
      switch (active) {
        case 0:
          return <TotalOverView/>;
        case 1:
          return <TotalOverView/>;
        default:
          return <TotalOverView/>;
      }
    }}
  />
</div>
    
    
    </>
  )
}

export default BusinessDashboard
