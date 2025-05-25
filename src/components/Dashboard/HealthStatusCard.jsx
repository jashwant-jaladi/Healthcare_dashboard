import React from 'react'
import Card from './Card'
import '../../styles/dashboardStyles/healthStatusCard.css'
import { FaLongArrowAltRight } from "react-icons/fa";


const HealthStatusCard = () => {
  return (
    <div className='health-status-card'>
      <Card/>
      <p className='details'>Details<span><FaLongArrowAltRight color='#2634ad' />
</span></p>
    </div>
  )
}

export default HealthStatusCard