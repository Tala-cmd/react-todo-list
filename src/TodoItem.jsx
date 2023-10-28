export function TodoItem( {id, completed, title, toggleTodo, deleteTodo } ){
    return (
    <div className="todo-container">
    <li>
        <label>
        <input type='checkbox' checked={completed} 
        onChange={e => toggleTodo(id, e.target.checked)} 
        />
        {title} 
        </label>
        <button className='btn btn-danger' 
        onClick={() => deleteTodo(id)} 
        >Delete</button>
    </li>
    </div>
    )

}