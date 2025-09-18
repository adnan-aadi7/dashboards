import React from 'react'
import Cards from '../components/Cards'
import ActiveUserChart from '../components/ActiveUserChart'

const BusinessDashboard = () => {
  return (
    <>
     <div className='flex bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white text-xl p-2 -mt-5'>
  <h3>BUSINESS MODEL</h3>
</div>
<div className='mt-10'>
    <Cards/>
</div>

{/* <ActiveUserChart/> */}
    
    
    
    </>
  )
}

export default BusinessDashboard
