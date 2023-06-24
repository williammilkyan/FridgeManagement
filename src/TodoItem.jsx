

export function TodoItem ({ completed, id, title, quantity, location, expire, timeStamp, toggleTodo, deleteTodo }) {
    return (
        <li>
          <label>
            <input type="checkbox" checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
           />
            {title}
          </label>
          <p>Quantity: {quantity}</p>
          <p>Location: {location}</p>
          <p>Store Date: {timeStamp}</p>
          <p>Expire Date: {expire}</p>
          <button
           onClick={() => deleteTodo(id)}
           className="btn btn-danger">Delete</button>  
        </li>
    )
}