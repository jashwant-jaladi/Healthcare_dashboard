import React from 'react'
import "../../styles/dashboardStyles/bar.css"
import bar_design from '../../data/bar.js'

const Bar = () => {
  return (
    <>
      
        <div className='bar-container' >
{bar_design.map((bar, index) => (
        <div key={index} className="bar-section">
          {bar.split?
          <div className='firstbar-container'>
            <div className='first-bar-one' style={{ backgroundColor: bar.firstBarOne }}></div>
            <div className='first-bar-two' style={{ backgroundColor: bar.firstBarTwo }}></div>
          </div>
          :
          <div className='first-bar' style={{ backgroundColor: bar.firstBar }}></div>}
          <div className='second-bar' style={{ backgroundColor: bar.secondBar }}></div>
          <div className='third-bar-container'>
            <div className='third-one' style={{ backgroundColor: bar.thirdBarOne }}></div>
            <div className='third-two' style={{ backgroundColor: bar.thirdBarTwo }}></div>
          </div>
          <div className='fourth-bar' style={{ backgroundColor: bar.fourthBar }}></div>
        </div>

      ))}
      </div>
    </>
  )
}

export default Bar