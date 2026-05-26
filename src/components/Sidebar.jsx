import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (

    <div className='sidebar'>

      <div className='top-section'>

        <h3 className='sidebar-title'>
          Workspace
        </h3>

        <a className='active-item' href='#'>
          Dashboard
        </a>

        <a href='#'>
          Tasks
        </a>

        <a href='#'>
          Notes
        </a>

        <a href='#'>
          Analytics
        </a>

      </div>

      <div className='bottom-section'>

        <a href='#'>
          Settings
        </a>

        <a href='#'>
          Profile
        </a>

      </div>

    </div>

  )
}

export default Sidebar;