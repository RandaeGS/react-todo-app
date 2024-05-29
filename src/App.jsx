import { useState } from "react"
import "./App.css"
import TodoList from "./TodoList"

function App() {

  const [toggle, setTogle] = useState(false)

  const handleDoneClick = (e) => {
    e.preventDefault()
    setTogle((toggle) => toggle = true)
  }

  const handleUndoneClick = (e) => {
    e.preventDefault()
    setTogle((toggle) => toggle = false)
  }

  return (
    <div className="container text-center" id="container">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="text-center">Todo App</h1>
          <button id="undone" type="button" className="btn btn-primary mx-2" onClick={handleUndoneClick} disabled={!toggle}>Undone</button>
          <button id="done" type="button" className="btn btn-secondary" onClick={handleDoneClick} disabled={toggle}>Done</button>

          <TodoList showDoneTasks={toggle} />
        </div>
      </div>
    </div>
  )
}

export default App
