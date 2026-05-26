import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {

  const [isTaskInputOpen, setTaskInput] = useState(false)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')

  const [tasks, setTasks] = useState([])

  function handleAddTask(){

    if(taskTitle.trim().length === 0){
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      createdAt: new Date().toLocaleDateString(),
      dueDate: taskDate,
      completed:false
    }

    setTasks([...tasks, newTask])

    setTaskTitle('')
    setTaskDate('')

    setTaskInput(false)
  }

  function handleDeleteTask(id){

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(updatedTasks)
  }

  return (

    <div className='dashboard'>

      <div className='dashboard-header'>

        <h1>My Tasks</h1>

        <p>
          Organize your productivity and manage your workflow.
        </p>

      </div>

      <div className='dashboard-content'>

        {
          isTaskInputOpen ?

          <div className='task-input-box'>

            <input
              type='text'
              placeholder='Enter task title...'
              className='task-input'
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />

            <input
              type='date'
              className='task-input'
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />

            <div className='task-buttons'>

              <button
                className='add-btn'
                onClick={handleAddTask}
              >
                Add Task
              </button>

              <button
                className='cancel-btn'
                onClick={() => setTaskInput(false)}
              >
                Cancel
              </button>

            </div>

          </div>

          :

          <div
            onClick={() => setTaskInput(true)}
            className='task-input-placeholder'
          >
            + Add New Task
          </div>
        }

        <div className='task-list-placeholder'>

          {
            tasks.map((task) => (

              <div className='task-card' key={task.id}>

                <div className='task-card-top'>

                  <h3>{task.title}</h3>

                  <button
                    className='delete-btn'
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>

                </div>

                <div className='task-details'>

                  <p>
                    Created At:
                    <span> {task.createdAt} </span>
                  </p>

                  <p>
                    Due Date:
                    <span> {task.dueDate || 'No Date'} </span>
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  )
}

export default Dashboard