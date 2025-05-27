import React from 'react'
import '../../styles/dashboardStyles/activityFeed.css'
import Bar from './Bar'
import bar_design from '../../data/bar.js'

const ActivityFeed = () => {
  return (
    <div className='activity-feed'>
      <div className='activity-feed-header'>
      <h3 className='activity-title'>Activity</h3>
      <p>3 appointments on this week</p>
      </div>
      <Bar data={bar_design}/>
      <div >
       <ul className='week'>
        <li>Mon</li>
        <li>Tues</li>
        <li>Wed</li>
        <li>Thurs</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
       </ul>
      </div>
    </div>
  )
}

export default ActivityFeed