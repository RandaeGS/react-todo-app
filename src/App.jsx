import "./App.css"
import TodoList from "./TodoList"

function App() {

  const handleActiveClick = () => {

  }

  const handleDoneClick = () => {

  }

  return (
    <div className="container text-center" id="container">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="text-center">Todo App</h1>
          <button type="button" className="btn btn-primary mx-2" onClick={handleActiveClick}>Active</button>
          <button type="button" className="btn btn-secondary" onClick={handleDoneClick}>Done</button>

          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
