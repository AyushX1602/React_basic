import "./App.css";
import React, { useState, useEffect, use } from "react";

// export default function App(){
//   const [todos,settods] = useState([{
//     title : "go to gym",
//     description : "go daily",
//     done : false
//   }]);

// function addTodo(){
//   let Array=[];
//   for(let i=0;i<todos.length;i++){
//     Array.push(todos[i]);
//   }
//     Array.push({
//     title : document.getElementById("title").value,
//     description: document.getElementById("description").value,
//     done: true,
//   });
//   settods(Array);
// }

//   return (
//     <div>
//       <input id="title" type="text" placeholder="Title"/>
//        <input id="description" type="text" placeholder="Description"/>
//       <button onClick={addTodo}>ADD TODO </button>
//       <br />
//       {JSON.stringify(todos)}
//     </div>
    
   
//   );
// }



export default function App(){
  return <div>
    <Counter />
  </div>;
}

function Counter(){
  const [count,setCount] = useState(0);
  console.log("rendering...");

  useEffect(function() {
  setInterval(function() {
  setCount(count=>count + 1);
    },1000); 
  },[]);




  // function increment(){
  //   setCount(count+1);
  // }

  // function decrement(){
  //   setCount(count-1);
  // }

  // function reset(){
  //   setCount(0);
  // }



  return <div>
    <h1>  {count} </h1>
    {/* <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button> */}
  </div>
}
