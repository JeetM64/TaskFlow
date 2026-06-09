
import { useState } from 'react'

const AnalyticsPage = () => {
  const [tasks] = useState(() => {
    try {
      const storedTasks = window.localStorage.getItem('flowSyncTasks')
      return storedTasks ? JSON.parse(storedTasks) : []
    } catch {
      return []
    }
  })
  const [notes] = useState(() => {
    try {
      const storedNotes = window.localStorage.getItem('flowSyncNotes')
      return storedNotes ? JSON.parse(storedNotes) : []
    } catch {
      return []
    }
  })

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length

  return (
    <div className='page-section'>
      <h1>Analytics</h1>
      <p>Review your productivity trends, completed tasks, and progress charts.</p>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>Task Completion</h3>
          <p>{totalTasks === 0 ? 'No tasks yet' : `${completedTasks} / ${totalTasks} tasks completed`}</p>
        </div>
        <div className='summary-card'>
          <h3>Notes Activity</h3>
          <p>{notes.length} notes created</p>
        </div>
        <div className='summary-card'>
          <h3>Productivity Score</h3>
          <p>{totalTasks === 0 ? 'Start adding tasks' : `${Math.round((completedTasks / totalTasks) * 100)}% on track`}</p>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage;