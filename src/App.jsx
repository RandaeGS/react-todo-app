function App() {

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="text-center">Todo App</h1>
          <div className="text-center">
            <input type="text" placeholder="Type task" id="create"></input>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
