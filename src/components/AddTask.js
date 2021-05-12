import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert('Please add a task')
      return
    } 

    onAdd({ text, day, reminder})

    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input 
          type="text" 
          placeholder='Add Task' 
          value={text} 
          onChange={(e) => {setText(e.currentTarget.value)}}/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input 
          type="text" 
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => {setDay(e.currentTarget.value)}}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input 
          type="checkbox"
          value={reminder}
          onChange={(e) => {setReminder(e.currentTarget.checked)}}
          />

        <input className='btn btn-block' type="submit" value='Save Task'/>
      </div>
    </form>
  )
}

export default AddTask
