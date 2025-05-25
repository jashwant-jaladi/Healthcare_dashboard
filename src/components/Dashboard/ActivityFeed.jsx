import React from 'react'
import '../../styles/dashboardStyles/activityFeed.css'
import Bar from './Bar'

const ActivityFeed = () => {
  return (
    <div className='activity-feed'>
      <div className='activity-feed-header'>
      <h3 className='activity-title'>Activity</h3>
      <p>3 appointments on this week</p>
      </div>
      <Bar />
    </div>
  )
}

export default ActivityFeed