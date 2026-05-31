import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (

    <div className='sidebar'>

      <div className='top-section'>

        <h3 className='sidebar-title'>
          Workspace
        </h3>

        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active-item' : ''}>
          Dashboard
        </NavLink>

        <NavLink to='/tasks' className={({ isActive }) => isActive ? 'active-item' : ''}>
          Tasks
        </NavLink>

        <NavLink to='/notes' className={({ isActive }) => isActive ? 'active-item' : ''}>
          Notes
        </NavLink>

        <NavLink to='/analytics' className={({ isActive }) => isActive ? 'active-item' : ''}>
          Analytics
        </NavLink>

      </div>

      <div className='bottom-section'>

        <a href='#'>
          Settings
        </a>


        <NavLink to='/profile' className ={({isActive}) => isActive ? 'active-item': ''}>
          Profile
        </NavLink>



      </div>

    </div>

  )
}

export default Sidebar;