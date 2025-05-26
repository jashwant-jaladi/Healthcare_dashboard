import React from 'react'
import Tablet from "./Tablet"
import "../../styles/calendarStyles/upcomingSchedule.css"
import { upcomingData_Sat, upcomingData_Thurs } from '../../data/upcomingSchedule'

const UpcomingSchedule = () => {
  return (
    <div className='upcoming-schedule'>
      <h1 className='upcoming-header'>The Upcoming Schedule</h1>
      <h4 className='appointment-days'> On Thursday</h4>
      <div className='thursday-appointment'>
      {upcomingData_Thurs.map((appointment,index) => (
        <div className={appointment.order} key={index}>
        <Tablet
          
          title={appointment.title}
          image={appointment.image}
          time={appointment.time}
          name={appointment.name}
        />
        </div>
      ))}
      </div>
      <h4 className='appointment-days'>On Saturday</h4>
      <div className='saturday-appointment'>
      {upcomingData_Sat.map((appointment, index) => (
        <div className={appointment.order} key={index}>
        <Tablet
          
          title={appointment.title}
          image={appointment.image}
          time={appointment.time}
          name={appointment.name}
        />
        </div>
      ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule