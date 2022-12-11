import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
    <div className="header">
        <h1>To-Do List</h1>
        <Button 
            color={showAdd ? "red" : "cornflowerblue"}
            text={showAdd ? 'Close Form' : 'Add Task'}
            onClick={onAdd}>
        </Button>
    </div>
  )
}

export default Header


