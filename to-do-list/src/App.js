import './App.css';
import React, { useState } from "react";

function App() {
  // > Below array destructure syntax is equivalent to:
  // > const newTodoStateArr = useState('');  <
  // > const newTodo = newTodoStateArr[0];    <
  // > const setNewTodo = newTodoStateArr[1]; <
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      title: newTodo,
      completed: false
    };

    setTodos([...todos, todoItem]);
    setNewTodo('');
  };

  const handleDelete = (index) => {
    const filteredList = todos.filter((todo, i) => {
      return i !== index;
    });

    setTodos(filteredList);
  };

  const handleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.completed = ! todo.completed;
        // const updatedTodo = { ...todo, completed: !todo.completed };
        // return updatedTodo;
      }
      return todo;
    })

    setTodos(updatedTodos);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
        <form onSubmit={(event) => {
          handleNewTodo(event);
        }}>
          <input onChange={(event) => {
            setNewTodo(event.target.value);
          }} 
          type='text'
          value={newTodo}
          />
          <div>
            <button style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "7px",
              padding: "10px",
              marginTop: "7px",
              fontWeight: "bold",
              fontSize: "16px"

            }}>Add</button>
          </div>
        </form>
        <hr />

        {todos.map((todo, index) => {
          const todoClasses = [["text"]];

          if (todo.completed) {
            todoClasses.push("complete");
          }
          return (
            <div key={index}>
            <span className={todoClasses.join(" ")}>{todo.title}</span>
            <input onChange={(event) => {
              handleCompletion(index);
            }} checked={todo.completed} type='checkbox' />
            <button 
              onClick={(event) => {
                handleDelete(index);
            }}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "7px",
              padding: "10px",
              margin: "7px",
              fontWeight: "bold",
              fontSize: "14px"
            }}
            >Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
