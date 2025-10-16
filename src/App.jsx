import "./App.css";
import React from "react";
import { useState } from "react";

export default function App(){
  const [todos,settods] = useState([{
    title : "go to gym",
    description : "go daily",
    done : false
  }]);

function addTodo(){
  let Array=[];
  for(let i=0;i<todos.length;i++){
    Array.push(todos[i]);
  }
    Array.push({
    title : document.getElementById("title").value,
    description: document.getElementById("description").value,
    done: true,
  });
  settods(Array);
}

  return (
    <div>
      <input id="title" type="text" placeholder="Title"/>
       <input id="description" type="text" placeholder="Description"/>
      <button onClick={addTodo}>ADD TODO </button>
      <br />
      {JSON.stringify(todos)}
    </div>
    
   
  );
}
