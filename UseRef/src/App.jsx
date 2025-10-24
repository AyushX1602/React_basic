import { useRef, useState, createContext, useContext } from "react";
import './App.css';
import { useFetch } from "./hooks/useFetch";

// const BulbContext = createContext();

// function BulbProvider({ children }) {
//    const [bulbOn,setBulbOn] = useState(true);
//    return <BulbContext.Provider value={{
//     bulbOn : bulbOn,
//     setBulbOn : setBulbOn
//    }}>
//     {children}
//    </BulbContext.Provider>
// }

// function App(){
 
//   return <div>
// <BulbProvider>
//   <LightBulb />
//   <ToggleLightState /> 
// </BulbProvider>

//   </div>
// }

// function Light(){
//   // const[bulbOn,setBulbOn] = useState(true);
//   return <div>
//     <LightBulb />
//     <ToggleLightState />
//     {/* <LightBulb bulbOn = {bulbOn} />
//     <ToggleLightState setBulbOn = {setBulbOn} /> */}
//   </div>
// }

// function LightBulb(){
//   const {bulbOn} = useContext(BulbContext);
//  return <div>
//   <img
//     src={bulbOn ? "Bulbon.png" : "Bulboff.png"}
//     alt={bulbOn ? "Bulb On":"Bulb off"}
//     style={{ width: "100px", height: "180px" }}
//   />
//   <br />
//   {bulbOn ? "Bulb On":"Bulb off"}
//  </div>
// }

// function ToggleLightState() {
//   const {bulbOn,setBulbOn} = useContext(BulbContext);
//   function toggleBulb(){
//     setBulbOn((bulbOn) => !bulbOn)
//   }
//   return <div>
//     <button onClick={toggleBulb}>Toggle Bulb</button>
//   </div>
// }


function App() {
  const {finaldata} = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      {JSON.stringify(finaldata)}
    </div>
  )
}

export default App;
