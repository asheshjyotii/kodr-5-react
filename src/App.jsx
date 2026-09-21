import input from 'daisyui/components/input'
import React, { useState } from 'react'

const App = () => {

  const [Input, setInput] = useState("")
  let tasks = [];

  return (
    
    <div>
      <h1>hi</h1>
      <form action="">
        
        <input type="text" name="enter new task" id="task_input"  />
        
        <button onClick={(e)=>{
          e.preventDefault()
          const data =document.querySelector('#task_input').value
          tasks.push(data);
          console.log(tasks)
        }}>add</button>
        <input type="text" id="delete" />
        <button onClick={(e)=>{
          e.preventDefault()
          let val=document.querySelector('#delete').value
          let index = tasks.indexOf(val)

          tasks.splice(index,1)
          console.log(tasks)
        }} >delete</button>


        <p id='tasks'>{tasks.values()}</p>
      </form>
    </div>
  )
}

export default App