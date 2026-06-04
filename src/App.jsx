import Navbar from './components/MainLayout/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage.jsx'
import TasksPage from './pages/TasksPage.jsx'
import NotesPage from './pages/NotesPage.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'

import ProfilePage from './pages/ProfilePage.jsx'


import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import './App.css'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>

      <div className='container'>

        <Navbar />

        <div className='mini-container'>

          <Sidebar />

          <main className='page-content'>
            <Routes>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/notes' element={<NotesPage />} />
              <Route path='/analytics' element={<AnalyticsPage />} />
              <Route path='*' element={<Navigate to='/dashboard' replace />} />
              <Route path='/profile' element = {<ProfilePage/>}/>
            </Routes>
          </main>

        </div>

      </div>

    </BrowserRouter>
    </Provider>
  )
}

export default App