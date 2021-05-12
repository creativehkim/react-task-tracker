import React, { useState } from 'react' 
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:20pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Study React',
      day: 'Feb 6th at 8:00am',
      reminder: true,
    },
    {
      id:3,
      text: 'Cut Elsa nails',
      day: 'Feb 7th at 12:20pm',
      reminder: false,
    }

  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }
  

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 
      'No Tasks To Show'}
    </div>
  );
}

export default App;
