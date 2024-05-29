import { useState } from "react";
import TodoItem from "./TodoItem";

const Input = (estado) => {

  return (
    <div>
      <form>

        <button type="submit" className="btn btn-secondary" disabled={estado}>Add</button>
      </form>

    </div>
  )
}

function TodoList(props) {

  // False indicates to show done tasks
  // True indicates to show undone tasks
  // Always starts as false
  const showDoneTasks = props.showDoneTasks;
  const [undoneTasks, setUndoneTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  if (!showDoneTasks) {
    return (
      <div>

        <Input estado={false}></Input>

        <div>
          <ul>
            {
              undoneTasks.map((item) => {
                <li>{item}</li>
              })
            }
          </ul>

        </div>
      </div>
    )
  }

  return (
    <div>

    </div>
  )
}

export default TodoList;
