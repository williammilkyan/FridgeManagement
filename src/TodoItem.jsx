

export function TodoItem ({ completed, id, title, quantity, location, expire, timeStamp, toggleTodo, deleteTodo }) {
    return (
        <li>
          <label>
            <input type="checkbox" checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
           />
            {title}-q:{quantity}-l:{location}-s:{timeStamp}-e:{expire}
          </label>
          <button
           onClick={() => deleteTodo(id)}
           className="btn btn-danger">Delete</button>  
        </li>
    )
}