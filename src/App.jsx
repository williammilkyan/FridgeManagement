import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { IntroPlate } from "./IntroPlate";
export default function App() {
  

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null ) return [];
    return JSON.parse(localValue);
  })

  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, []);

  function refreshClock() {
    setTime(new Date());
  }


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, quantity, location, expire) {
    const timeStamp = `M:${time.getMonth()}/D:${time.getDate()}/Y:${time.getFullYear()}`;
   setTodos(currentTodos => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, quantity, location, expire, completed: false, timeStamp },
          ]
        })
  }
 

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  function clear() {
    setTodos([]);
  }

  return (
    <div>
      <IntroPlate time={time} clear={clear}/>
      <NewTodoForm  onSubmit={addTodo} time={time}/>
      
      <TodoList 
      todos={todos} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo} 
      />
  </div>
  )
}