import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

function TodoCard(props) {
    const { todo } = props;

    const { handleDelete, handleEdit, handleComplete } = useContext(TodoListContext);
  
    const handleDeleteClick = () => {
      handleDelete(todo.id);
    };
  
    const handleEditClick = () => {
      const updatedTodoName = prompt('Enter New Todo:', todo.todoName);
      if (updatedTodoName) {
        handleEdit(task.id, { todoName: updatedTodoName });
      }
    };
  
    const handleCompleteClick = () => {
      handleComplete(todo.id);
    

    };

  return (
    <div className="card mt-5 ms-10">
      <h3>{todo.todoName}</h3>
      <p>Due Date: {todo.dueDate}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
      
    </div>
  );

}

export default TodoCard;