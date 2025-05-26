import React from 'react'
import "../../styles/calendarStyles/calendar.css"
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";
import calendarData from '../../data/calendar';

const Calendar = () => {
  return (
    <div className='calendarContainer'>
      <div className='calendarText'>
      <h4 className='month'>October 2021</h4>
      <TiArrowLeftThick />
      <TiArrowRightThick />
      </div>
      {calendarData.map((data,index)=>
      (<div className='calendarDays' key={index}>
        <li className={data.class}>{data.column1}</li>
        <li className={data.class} id={data.cellClass}>{data.column2}</li>
        <li className={data.class}>{data.column3}</li>
        <li className={data.class}>{data.column4}</li>
        <li className={data.class}>{data.column5}</li>
        <li className={data.class}>{data.column6}</li>
        <li className={data.class}>{data.column7}</li>
      </div>))}

    </div>
  )
}

export default Calendar