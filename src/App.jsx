import Navbar from './components/MainLayout/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/MainLayout/Dashboard.jsx'

import './App.css';


function App() {

  return (
    <div className='container'>
     <Navbar/> 

     <div className = 'mini-container'>
      <Sidebar/>
      <Dashboard/>
     </div>
     
    </div>
  )
}

export default App;
