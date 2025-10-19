import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Counter & Notifications App</h1>
      <Counter />
      <Notifications />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(function() {
    const intervalId = setInterval(function() {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    return function() {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Auto Counter</h2>
      <h1>{count}</h1>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState(0);

  useEffect(function() {
    const clock = setInterval(function() {
      setNotifications(prevNotifications => prevNotifications + 1);
    }, 5000);
    
    return function() {
      clearInterval(clock);
    };
  }, []);

  function AddNotification() {
    console.log("Notification added");
    setNotifications(prevNotifications => prevNotifications + 1);
  }

  return (
    <div>
      <h2>Notifications</h2>
      <button onClick={AddNotification}>Add Notification</button>
      <h3>Notifications: {notifications}</h3>
      {notifications > 0 && <div>You have {notifications} new notifications!</div>}
    </div>
  );
}