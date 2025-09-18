import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterSalesLayout from './afterSalesDashboard/layout/Layout'
import Dashboard from './afterSalesDashboard/pages/Dashboard'
import DashboardHealthCare from './HealthCareContractPhase/pages/Dashboard';
import GrowthModelLayout from './growthModel/layout/Layout';
import GrowthModelDashboard from './growthModel/pages/GrowthModelDashboard';
import BusinessDashboard from './BusinessModel/pages/BusinessDashboard';





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

      {/* growth model dashboard */}
      <Route
      path="/growthmodel/dashboard"
      element={
        <GrowthModelLayout>
          <GrowthModelDashboard />
        </GrowthModelLayout>
      }
      />

      <Route
        path="/businessmodel/dashboard"
        element={
          <GrowthModelLayout>
            <BusinessDashboard />
          </GrowthModelLayout>
        }
      />


      
      </Routes>


  </Router>
   
   </>
  )
}

export default App