import React from 'react'
import "../../styles/dashboardStyles/anatomySection.css"
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const AnatomySection = () => {
  return (
    
    <div className='image-container'>
      <FaSearchPlus className='search-icon' color='#8E9499'/>
      <img src='/vecteezy_human-body-muscle-anatomy-illustration-on-transparent_49886063.png' alt="human-anatomy" className='anatomy-image'/>
      <div className='heart'>
        <FaHeart size={20} color='red'/>
        <p>Healthly Heart</p>
      </div>
       <div className='leg'>
        <img src="/leg.png" alt="leg"className='legicon'/>
        <p>Healthly Leg</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default AnatomySection