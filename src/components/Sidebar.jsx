import React from 'react'
import "../styles/sidebar.css"
import { MdDashboard } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaCalendarPlus } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";





const Sidebar = () => {

  const sidebarData = [
    {
      icon: <MdDashboard/>,
      headerName:"Dashboard"
    },
     {
      icon: <LuArrowUpDown />,
      headerName:"History"
    },
    {
      icon: <SlCalender />,
      headerName:"Calendar"
    },
    {
      icon: <FaCalendarPlus />,
      headerName:"Appointments"
    },
    {
      icon: <FcStatistics />,
      headerName:"Statistics"
    },
    
   
  ]
  return (
    <div className='sidebar'>
      <h2 className='title-health'>Health<span className='title-care'>care.</span></h2>
      <h5 className='general'>General</h5>
      {sidebarData.map((data, key) => {
        const isDashboard = data.headerName === "Dashboard";
        return (
          <div key={key} className={`general-item ${isDashboard ? "dashboard-highlight" : ""}`}>
            {data.icon}
            <p>{data.headerName}</p>
          </div>
        );
      })}
      <h5 className='tools'>Tools</h5>

      <div >
        <div className='tool-item'>
          <IoChatbubbleEllipsesOutline />
          <p>Chat</p>
        </div>
        <div className='tool-item'>
          <FaPhoneAlt />
          <p>Support</p>
        </div>

      </div>
        <div className='tool-item' id='settings'>
          <CiSettings size={20}/>
          <p>Settings</p>
        </div>

    </div>
  )
}

export default Sidebar