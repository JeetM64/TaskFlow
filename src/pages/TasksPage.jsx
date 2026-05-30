import React, { useEffect, useState } from 'react'

const TasksPage = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = window.localStorage.getItem('flowSyncTasks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem('flowSyncTasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = () => {
    if (!taskTitle.trim()) return

    const newTask = {
      id: Date.now(),
      title: taskTitle.trim(),
      dueDate: taskDate || 'No date',
      completed: false,
    }

    setTasks((current) => [newTask, ...current])
    setTaskTitle('')
    setTaskDate('')
  }

  const handleToggleComplete = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleDeleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <div className='page-section'>
      <div className='page-header'>
        <h1>Tasks</h1>
        <p>Manage your tasks here. Add, complete, and remove tasks to stay organized.</p>
      </div>

      <div className='task-box'>
        <div className='task-form'>
          <input
            type='text'
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder='Enter a new task title'
            className='task-input'
          />
          <input
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='task-input'
          />
          <button className='add-btn' onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <div className='task-list'>
          {tasks.length === 0 ? (
            <div className='empty-task'>No tasks yet. Add one to start tracking.</div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className={`task-card ${task.completed ? 'completed-task' : ''}`}>
                <div className='task-card-top'>
                  <div className='task-left-section'>
                    <button className={`complete-btn ${task.completed ? 'done-btn' : ''}`} onClick={() => handleToggleComplete(task.id)}>
                      ✓
                    </button>
                    <h3>{task.title}</h3>
                  </div>

                  <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </div>

                <div className='task-details'>
                  <p>
                    Due Date: <span>{task.dueDate}</span>
                  </p>
                  <p>
                    Status: <span>{task.completed ? 'Completed' : 'Pending'}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TasksPage;
