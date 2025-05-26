import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";

import "../../styles/calendarStyles/calendarHeader.css";

const CalendarHeader = () => {
  return (
    <div className='calendarHeader-container'>
      <button className='avatar'><GrUserManager  size={25} color='black'/></button>
      <button className='add'><FaPlus size={25} color='white'/></button>
    </div>
  )
}

export default CalendarHeader