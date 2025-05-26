import React from 'react'
import Tablet from './Tablet'
import "../../styles/calendarStyles/appointmentsContainer.css"
import appointment from '../../data/appointment' 

const Appointments = () => {
  return (
    <>
    <div className='appointments-container'>
      {appointment.map((item, index) => (
        <div  key={index} className={item.order}>
          <Tablet 
          title={item.title}
          image={item.image}
          time={item.time}
          name={item.name} />
        </div>
      ))}
      </div>
    </>
  );
}

export default Appointments