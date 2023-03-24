import React, { useState, useContext } from 'react';
import TodoCard from "./TodoCard";
import { TodoListContext } from "../context/TodoListContext";
import TodoForm from "./TodoForm";
import { useNavigate } from "react-router-dom";

function TodoList() {
    const { todos, handleDelete, handleEdit } = useContext(TodoListContext);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogout = () => {
      setIsLoggedIn(false);
      navigate('/');
    };

    return (
        <div className = "card w-75 mx-auto mb-3">
             {isLoggedIn && <TodoForm/>}
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='list-container'>
                {todos.map((todo) => (
            <div className='card' key={todo.id}>
                <TodoCard
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
            </div>
      ))}
    </div>
  
    </div>  

    );
}

export default TodoList;