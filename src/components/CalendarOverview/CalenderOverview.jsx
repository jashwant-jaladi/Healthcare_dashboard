import "../../styles/calendarStyles/CalendarOverview.css"
import CalendarHeader from './CalendarHeader'
import Calendar from './Calendar'
import Appointments from './Appointments'
import UpcomingSchedule from './UpcomingSchedule'
import appointment from '../../data/appointment' 
import calendarData from '../../data/calendar';
import { upcomingData_Sat, upcomingData_Thurs } from '../../data/upcomingSchedule'

const CalendarOverview = () => {
  return (
    <div className='calendarOverview'>
      <CalendarHeader />
      <Calendar data={calendarData}/>
      <Appointments data={appointment}/>
      <UpcomingSchedule satData={upcomingData_Sat} thursData={upcomingData_Thurs}/>
    </div>
  )
}

export default CalendarOverview