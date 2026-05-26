import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (

    <div className='dashboard'>

      <div className='dashboard-header'>

        <h1>
          My Tasks
        </h1>

        <p>
          Organize your productivity and manage your workflow.
        </p>

      </div>

      <div className='dashboard-content'>

        <div className='task-input-placeholder'>
          + Add New Task
        </div>

        <div className='task-list-placeholder'>

          <div className='fake-task-card'>
            Complete React Dashboard UI
          </div>

          <div className='fake-task-card'>
            Build Task Input Component
          </div>

          <div className='fake-task-card'>
            Learn React State Flow
          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard