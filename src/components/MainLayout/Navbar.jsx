import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className='navbar-left'>

        <div className='logo-container'>
          <div className='logo'>
            FS
          </div>

          <h1 className='logo-text'>
            FlowSync
          </h1>
        </div>

      </div>

      <div className='navbar-right'>
        <a className='active-link' href='#'>Home</a>
        <a href='#'>Tasks</a>
        <a href='#'>Notes</a>
        <a href='#'>Analytics</a>
      </div>

    </nav>
  )
}

export default Navbar;