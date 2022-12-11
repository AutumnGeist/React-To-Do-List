//component for individual tasks
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onCheck}) => {
  return (
    /*if the task's complete is true, set className to task.complete, else nothing */
    <div className={`task ${task.complete ? "complete" : ""}`}>
        <h3>
            <input 
                type="checkbox" 
                className="checkBox" 
                onClick={() => onCheck(task.id)}>
            </input>
            {task.text}
            <FaTimes 
                    style={{color:'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}
            />
        </h3>
    </div>
  )
}

export default Task