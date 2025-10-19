import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Todo & Cards App</h1>
      <TodoApp />
      <CardDemo />
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go daily",
    done: false
  }]);

  function addTodo() {
    const newArray = [...todos]; // Better way to copy array
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: false,
    });
    setTodos(newArray);
    
    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input id="title" type="text" placeholder="Title" />
      <input id="description" type="text" placeholder="Description" />
      <button onClick={addTodo}>ADD TODO</button>
      
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.done ? "Completed" : "Pending"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardDemo() {
  return (
    <div>
      <h2>Card Components</h2>
      <div style={{display: "flex", background: "grey", padding: "20px"}}>
        <Card>
          <div style={{color: "black"}}>
            What do you want to post? <br />
            <input type="text" placeholder="Write something..." />
          </div>
        </Card>
        <Card>
          Hi there! This is a card component.
        </Card>
      </div>
    </div>
  );
}

function Card({children}) {
  return (
    <div style={{
      background: "white",
      borderRadius: 10,
      color: "blue",
      padding: 10,
      margin: 10,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}