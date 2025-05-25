import React from 'react'
import '../../styles/dashboardStyles/progressbar.css';
const ProgressBar = ({color}) => {
  return (
    <div className='progress-bar'>
        <div className='progress-filler' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default ProgressBar