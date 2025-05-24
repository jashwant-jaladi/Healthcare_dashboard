import React from 'react'
import SearchBar from './Dashboard/SearchBar'
import AnatomySection from './Dashboard/AnatomySection'
import ActivityFeed from './Dashboard/ActivityFeed'
import HealthStatusCard from './Dashboard/HealthStatusCard'
import "../styles/dashboardStyles/dashboardOverview.css"

const DashboardOverview = () => {
  return (
    <div className='overview'>
      <SearchBar/>
      <div className='dashboard'>
      <AnatomySection/>
      <HealthStatusCard/>
      </div>
      <ActivityFeed/>
    </div>
  )
}

export default DashboardOverview