import React from 'react'
import SearchBar from './SearchBar'
import AnatomySection from './AnatomySection'
import ActivityFeed from './ActivityFeed'
import HealthStatusCard from './HealthStatusCard'
import "../../styles/dashboardStyles/dashboardOverview.css"

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