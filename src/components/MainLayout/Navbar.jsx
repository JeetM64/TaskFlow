import { NavLink } from 'react-router-dom'
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
        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active-link' : ''}>
          Home
        </NavLink>
        <NavLink to='/tasks' className={({ isActive }) => isActive ? 'active-link' : ''}>
          Tasks
        </NavLink>
        <NavLink to='/notes' className={({ isActive }) => isActive ? 'active-link' : ''}>
          Notes
        </NavLink>
        <NavLink to='/analytics' className={({ isActive }) => isActive ? 'active-link' : ''}>
          Analytics
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar;