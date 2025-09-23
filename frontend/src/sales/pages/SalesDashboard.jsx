import React from 'react'
import Cards from '../components/Cards'
import Table from '../components/Table'
import Charts from '../components/Charts'

const SalesDashboard = () => {
  return (
    <>
    <div className=''>
    <Cards />
    </div>
    <div className='grid grid-cols-2 gap-4 mt-5'>
    <Table />
    <Charts />
    </div>
    

    
    </>
  )
}

export default SalesDashboard
