//Tasks Component, used to generate a list of current tasks
import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onCheck}) => {
    
  
    return (
    <div>
        <div className="subheadings">
            <p>Done</p>
            <p>Task</p>
            <p>Delete</p>
        </div>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onCheck={onCheck} />
        ))}
    </div>
  )
}

export default Tasks