import "./App.css";
import React, { useState, useEffect } from "react";


// export default function App() {
//   const [notifications,setNotifications] = useState(0);

//   useEffect(function() {
//     const clock = setInterval(function(){
//       setNotifications(prevNotifications => prevNotifications + 1 );
//     }, 5000);
    
//         return function() {
//       clearInterval(clock)
//       // Clear any intervals or timeouts here if needed
//     };


//   }, []);

      

//   function AddNotification(){
//     console.log("Notification added");
//     setNotifications(prevNotifications => prevNotifications + 1);
//   }

//   return (
//     <div>
//       <button onClick={AddNotification}>Add Notification</button>
//       <h1>Notifications: {notifications}</h1>
//       {notifications > 0 && <div>You have {notifications} notifications!</div>}
//     </div>
//   );

// }



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



// export default function App(){
//   const [counterVisible, setCounterVisible] = useState(true);
//   //conditional rendering
//   useEffect(function() {
//    let clock = setInterval(function(){
//       setCounterVisible(count=>!count)
//     }, 5000);

//     return function() {
//       clearInterval(clock)
//       // Clear any intervals or timeouts here if needed
//     }
//   }, []);
  
  // return <div>
  //   {counterVisible && <Counter></Counter>}


  //   <button onClick={() => {setCounterVisible(true);}}>Show Counter</button>
  //   <button onClick={() => {setCounterVisible(false);}}>Hide Counter</button>
   


//     {/* <Counter /> */}
//   </div>;
  
// }

// function Counter(){
//   const [count,setCount] = useState(0);
//   console.log("rendering...");

//   useEffect(function() {
//   setInterval(function() {
//   setCount(count=>count + 1);
//     },1000); 
//   },[]);




  // function increment(){
  //   setCount(count+1);
  // }

  // function decrement(){
  //   setCount(count-1);
  // }

  // function reset(){
  //   setCount(0);
  // }


  //   function visible(){
  //   counterVisible = true;
  // }

  // function hide(){
  //   counterVisible = false;
  // }



//   return <div>
//     <h1>  {count} </h1>
//     {/* <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button> */
    // <div>
    //   <button onClick={visible}>visible</button>
    //   <button onClick={hide}>hide</button>
    // </div>
//     }
//   </div>;
// }





//Children

// function App(){
//   return <div style={{display :"flex",background:"grey"}}>
//   <Card >
// <div  style={{color:"black"}}>
// what do you want to post <br></br>
// <input type={"text"} />
// </div>
//     </Card>
//     <Card>
//       Hi there
//     </Card>
//   </div>
// }

// function Card({children}) {
//   return <div style={{background:"white",borderRadius:10,color:"blue",padding:10,margin:10}}>
//     {children}
//   </div>
// }

// export default App