import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Tasks from './components/Tasks';
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment',
        day: 'May 10th May, 13.30',
        reminder: true, 
    },
    {
        id: 2, 
        text: 'Makers Workshop',
        day: '10th May, 15.30',
        reminder: true, 
    },
    {
        id: 3, 
        text: 'Coffee with James',
        day: '11th May, 9.30',
        reminder: false, 
    },
])

// Delete Task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => ))
}

  return (
    <div className="container">
   <Header />
   {tasks.length > 0 ? (
   <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
   ) : (
    'No tasks to show'
   )}
    </div>
  )
}

export default App;
