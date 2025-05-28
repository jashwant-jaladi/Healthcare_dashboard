
import './App.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardOverview from './components/Dashboard/DashboardOverview'
import CalendarOverview from './components/CalendarOverview/CalenderOverview'
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div className='App'>
      <GiHamburgerMenu className='hamburger' onClick={() => setToggle(prev => !prev)}/>
      <div className={`sidebar-container ${toggle ? 'mobile-visible' : ''}`}>
        <Sidebar />
      </div>
      
      <DashboardOverview />
      <CalendarOverview />
    </div>
  )
}

export default App