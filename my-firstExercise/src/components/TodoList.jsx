import { useState } from 'react';

function TodoList() {
  // TODO: Create state for:
  // - todos array (each todo: { id, text, completed })
  const [todos,setTodos]=useState([{id,text,completed}])

  // - inputValue string
  
  
  return (
    <div className="todo-list">
      <h2>📝 My Todos</h2>
      
      {/* Input field */}
      
      {/* Todo list */}
      <ul>
        {/* TODO: Map through todos and display */}
        {/* Each todo should have:
            - checkbox (checked = completed)
            - todo text (strikethrough if completed)
            - delete button
        */}
      </ul>
      
      {/* Stats */}
      <div>
        <p>Total: {/* count */}</p>
        <p>Completed: {/* count */}</p>
        <p>Pending: {/* count */}</p>
      </div>
      
      {/* Clear completed button (show only if any completed) */}
    </div>
  );
}

export default TodoList;