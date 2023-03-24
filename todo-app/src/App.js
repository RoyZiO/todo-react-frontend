//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
//import SignUp from './pages/Register';
import Register from './pages/Register';
import TodoList from './components/TodoList';
import TodoListContext from './context/TodoListContext';

function App() {

  const [currentForm, setCurrentForm] = useState('login');
  const [todos, setTodos] = useState([]);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://api.npoint.io/4cadff2a0a703c2407f3/')
      .then(response => response.json())
      .then(data => {
        const todos = data.slice(0, 5).map(todo => ({
          id: todo.id,
          todo: todo.title,
          dueDate: todo.dueDate,
        }));
        setTodos(todos);
      })
      .catch(error => console.log(error));
  }, []);

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);

  };

  const handleEdit = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, updatedTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <TodoListContext.Provider value={{ todos, handleAdd, handleDelete, handleEdit }}>
    <div className='App'>
       {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <TodoList/>
    </div>
    </TodoListContext.Provider>
  );
}

export default App;
