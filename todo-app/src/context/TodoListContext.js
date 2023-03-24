import React, { useState, createContext } from 'react';

export const TodoListContext = createContext();

export const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

function handleEdit (updatedTodo) {

    const todoIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);
    const updatedTodos = [
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
    ];

    setTodos(updatedTodos);

};

function handleDelete (id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id)

    setTodos(updatedTodos);
};

function handleAdd (newTodo) {

    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    const addedTodo = { ...newTodo, id: newId };

    setTodos([...todos, addedTodo]);
};  

return (
    <TodoListContext.Provider value = {{todos, handleEdit, handleDelete, handleAdd }}>
        {children}
    </TodoListContext.Provider>
);

};

export default TodoListContext;
