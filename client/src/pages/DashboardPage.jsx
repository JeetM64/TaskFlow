import { useSelector } from 'react-redux'
import { useState } from 'react'

const DashboardPage = () => {
  // Get tasks from Redux store
  const tasks = useSelector(
    (state) => state.tasks.tasks
  )
  const [notes] = useState(() => {
    try {
      const storedNotes = window.localStorage.getItem('flowSyncNotes')
      return storedNotes ? JSON.parse(storedNotes) : []
    } catch {
      return []
    }
  })

  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = tasks.length - completedTasks

  return (
    <div className='page-section'>
      <h1>Dashboard</h1>
      <p>Welcome to FlowSync. This is your productivity overview.</p>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>Tasks</h3>
          <p>{tasks.length} total tasks</p>
          <p>{completedTasks} completed, {pendingTasks} pending</p>
        </div>
        <div className='summary-card'>
          <h3>Notes</h3>
          <p>{notes.length} saved notes</p>
          <p>Capture quick ideas, reminders, and important details.</p>
        </div>
        <div className='summary-card'>
          <h3>Analytics</h3>
          <p>{tasks.length === 0 ? '0% completion' : `${Math.round((completedTasks / tasks.length) * 100)}% completion`}</p>
          <p>See progress and productivity insights in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;