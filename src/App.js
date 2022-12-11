import { useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

function App() {
  //state for tasks
  const [taskList, setTasks] = useState([
    {
      id: 1,
      text: "Cleaning",
      complete: false,
    },
    {
      id: 2,
      text: "Laundry",
      complete: false,
    },
    {
      id: 3,
      text: "Dusting",
      complete: false,
    },
  ])
  //state for show/hide task list, set to false as default
  const [showAddTask, setShowAddTask] = useState(false)

  //function to add a task
  const addTask = (task) => {
    console.log(task);
    //create a random number for the task ID
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...taskList, newTask])
  }

  //function to delete a task
  const deleteTask = (id) => {
    console.log("delete", id);
    //reset the task state by filtering out the task with the matching passed in ID
    setTasks(taskList.filter((task) => task.id !== id))
  }

  //function to set the task as complete
  const completeTask = (id) => {
    console.log("complete", id);

    //if the task id matches the id, update the task style
    setTasks(
      taskList.map((task) =>
      task.id === id ? {...task, complete: !task.complete} : task
      )
    )
  }
  
  return (
    <div className="container">
      {/*Toggle showing the Add Task Form by clicking the Add button*/}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {taskList.length > 0 ? ( <Tasks tasks={taskList} onDelete={deleteTask} onCheck={completeTask}/> ) : ("No Tasks to Show")}
    </div>
  );
}

export default App;
