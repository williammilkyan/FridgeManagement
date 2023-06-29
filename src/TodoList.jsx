import { TodoItem } from "./TodoItem";

export function TodoList ( { todos, toggleTodo, deleteTodo } ) {

  let others = todos.filter(todo => { return todo.location == "Others"});
  let fresh = todos.filter(todo => { return todo.location == "Fresh"});
  let frozen = todos.filter(todo => { return todo.location == "Frozen"});
    return (
      <>
      <div className="sectionBox">
        <p>Others:</p>
        <ul className="list">
        {others.length === 0 && "No Items"}
        {others.map(todo => {
          return (
          <TodoItem 
          id={todo.id} 
          quantity={todo.quantity}
          expire={todo.expire}
          completed={todo.completed}
          title={todo.title} 
          timeStamp={todo.timeStamp}
          key={todo.id} 
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          /> //{...todo} key={todo.id}
        )
        })}     
      </ul>
      </div>

      <div className="sectionBox">
        <p>Fresh:</p>
      <ul className="list">
      {fresh.length === 0 && "No Items"}
      {fresh.map(todo => {
        return (
        <TodoItem 
        id={todo.id} 
        quantity={todo.quantity}
        expire={todo.expire}
        completed={todo.completed}
        title={todo.title} 
        timeStamp={todo.timeStamp}
        key={todo.id} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        /> //{...todo} key={todo.id}
      )
      })}  
    </ul>
    </div>

    <div className="sectionBox">
      <p>Frozen:</p>
    <ul className="list">
    {frozen.length === 0 && "No Items"}
    {frozen.map(todo => {
      return (
      <TodoItem 
      id={todo.id} 
      quantity={todo.quantity}
      expire={todo.expire}
      completed={todo.completed}
      title={todo.title} 
      timeStamp={todo.timeStamp}
      key={todo.id} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      /> //{...todo} key={todo.id}
    )
    })}  
  </ul>
  </div>
  </>
    );
}