import React from 'react'
import "../../styles/calendarStyles/CalendarOverview.css"
import CalendarHeader from './CalendarHeader'
import Calendar from './Calendar'
import Appointments from './Appointments'
import UpcomingSchedule from './UpcomingSchedule'

const CalendarOverview = () => {
  return (
    <div className='calendarOverview'>
      <CalendarHeader />
      <Calendar />
      <Appointments />
      <UpcomingSchedule />
    </div>
  )
}

export default CalendarOverview