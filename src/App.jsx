
import './App.css'
import Sidebar from './components/Sidebar'
import DashboardOverview from './components/DashboardOverview'
import CalendarOverview from './components/CalenderOverview'

function App() {


  return (

    <div className='App'>
      <Sidebar />
      <DashboardOverview />
      <CalendarOverview />
    </div>


  )
}

export default App
