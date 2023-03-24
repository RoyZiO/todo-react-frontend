//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/Register';
import Register from './pages/Register'

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
       {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
   
  );
}

export default App;
