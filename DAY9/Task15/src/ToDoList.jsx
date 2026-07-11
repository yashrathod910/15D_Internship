import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
     let [todos, setTodos] = useState([{ task: "sample-data", id: uuidv4(), isDone: false }])
     let [newTodo, setNewTodos] = useState("")

     let updateTodo = (event) => {
          setNewTodos(event.target.value);
     }

     let AddNewTask = () => {
          setTodos((prevTask) => {
               return [...prevTask, { task: newTodo, id: uuidv4(), isDone: false }]
          })
          setNewTodos("")
     }

     let deleteTodo = (id) => {
          setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id))
     }

     let markAsDone = (id) => {
          setTodos((prevTodo) =>
               prevTodo.map((todo) => {
                    if (todo.id == id) {
                         return {
                              ...todo,
                              isDone: true
                         }
                    }
                    else {
                         return todo
                    }
               })
          )
     }

     return (
          <>
               <div>
                    <input type="text" placeholder="Add a task..." onChange={updateTodo} value={newTodo} />
                    <button onClick={AddNewTask}>Add</button>
               </div>
               <div>
                    <ul>
                         {
                              todos.map((todo) => (
                                   <li key={todo.id}>
                                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                                   </li>
                              ))
                         }
                    </ul>
               </div>

          </>
     )
}
