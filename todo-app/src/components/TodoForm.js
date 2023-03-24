import React, { useState, useContext } from "react";
import { TodoListContext } from '../context/TodoListContext'

function TodoForm () {
    const [todo, setTodo] = useState('');
    const [dueDate, setDueDate] = useState('');

    const { handleAdd } = useContext(TodoListContext);

    function handleSubmit (e) {
        e.preventDefault();
        if (todo.trim()) {
            handleAdd({ todo, dueDate });
            setTodo('');
            setDueDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    );

}
export default TodoForm;