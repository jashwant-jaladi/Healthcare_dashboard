import React from 'react'
import "../../styles/calendarStyles/calendar.css"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";


const Calendar = ({data}) => {
  return (
    <div className='calendarContainer'>
      <div className='calendarText'>
        <h4 className='month'>October 2021</h4>
        <TiArrowLeftThick />
        <TiArrowRightThick />
      </div>

      <div className='calendarDaysContainer'>
        {data.map((row, rowIndex) => (
          <div className='calendarRow' key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`calendarCell row-${rowIndex} col-${colIndex} ${rowIndex === 3 && colIndex === 3 || rowIndex === 2 && colIndex === 5 || rowIndex === 2 && colIndex === 6 ? 'highlightCell hasDot' : ''
                  }`}
              >
                {cell}
              </div>

            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;
