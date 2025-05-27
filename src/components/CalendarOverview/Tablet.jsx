import React from 'react'
import '../../styles/calendarStyles/tablet.css'

const Tablet = ({title,image,time,name}) => {
  return (
    <div>
        <div className='tablet-header'>
            <h2 className='title-tablet'>{title}</h2>
            <img src={image} className='tablet-image'/>
        </div>
        <p className='tablet-text'>{time}</p>
        <p className='tablet-text'>{name}</p>
    </div>
  )
}

export default Tablet