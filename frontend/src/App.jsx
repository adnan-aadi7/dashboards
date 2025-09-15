import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterSalesLayout from './afterSalesDashboard/layout/Layout'
import Dashboard from './afterSalesDashboard/pages/Dashboard'

const App = () => {
  return (
   <>
  <Router>
  <Routes>
    <Route
      path="/afterSales/dashboard"
      element={
        <AfterSalesLayout>
          <Dashboard />
        </AfterSalesLayout>
      }
    />
    <Route
      path="*"
      element={
        <AfterSalesLayout>
          <Dashboard />
        </AfterSalesLayout>
      }
    />
  </Routes>

  </Router>
   
   </>
  )
}

export default App
