import React from 'react'
import "../../styles/dashboardStyles/searchbar.css"
import { FaSearch } from "react-icons/fa";
import { HiMiniBell } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";




const SearchBar = () => {
  return (
    <>
    <div className='searchbar-container'>
      <FaSearch className='searchme-icon' size={20} color='#6E6F83'/>
      <input name='Search' placeholder='Search' />
      <HiMiniBell className='bell-icon' size={25} color='#3D33A1' />
    </div>
    <div className='dashboard-container'>
    <h4 className='dashboard-text'>Dashboard</h4>
    <div className='week-container'>
    <h6 className='week-text'>This Week</h6>
    <IoIosArrowDown />
    </div>
    </div>


    </>
  )
}

export default SearchBar