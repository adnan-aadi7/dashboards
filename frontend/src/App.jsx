import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterSalesLayout from './afterSalesDashboard/layout/Layout'
import Dashboard from './afterSalesDashboard/pages/Dashboard'
import DashboardHealthCare from './HealthCareContractPhase/pages/Dashboard';

const App = () => {
  return (
   <>
  <Router>

    {/* after sales dashboard */}
  <Routes>
    <Route
      path="/aftersales/dashboard"
      element={
        <AfterSalesLayout>
          <Dashboard />
        </AfterSalesLayout>
      }
    />
    

  {/* health care dashboard */}
  <Route
      path="/healthcare/dashboard"
      element={
        <AfterSalesLayout>
          <DashboardHealthCare />
        </AfterSalesLayout>
      }
      />
      </Routes>

  </Router>
   
   </>
  )
}

export default App
