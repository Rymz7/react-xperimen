
import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function addTodo() {
    if (task.trim() === '') return

    setTodos([...todos, task])
    setTask('')
  }

  return (
    <div className="bg-slate-800 text-white p-8 m-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        My To-do List
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          className="p-2 rounded text-black flex-1"
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="bg-blue-500 px-4 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
