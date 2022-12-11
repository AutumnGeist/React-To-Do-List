import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
  //state for task text value
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        //validate there is text (a task) to submit
        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text})   
        setText('')
    }
  
    return (
    <form className="addForm" onSubmit={onSubmit}>
        <label>Add a Task:</label>
        <input 
            type="text" 
            placeholder='Task' 
            value={text} 
            onChange={(e) => setText(e.target.value)}>
        </input>
        <input type='submit' value='Save Task'></input>
    </form>
  )
}

export default AddTask