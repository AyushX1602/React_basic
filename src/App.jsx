import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React Basic Projects</h1>
        <div className="projects-overview">
          <p>This repository contains two main React projects:</p>
          
          <div className="project-card">
            <h2>📊 Counter & Notifications</h2>
            <p>Location: <code>counter-notifications/</code></p>
            <ul>
              <li>Auto-incrementing counter with useEffect</li>
              <li>Notifications system with manual and auto-add</li>
              <li>Proper cleanup to prevent memory leaks</li>
            </ul>
          </div>

          <div className="project-card">
            <h2>📝 Todo & Cards</h2>
            <p>Location: <code>todo-cards/</code></p>
            <ul>
              <li>Interactive Todo List application</li>
              <li>Reusable Card components with children props</li>
              <li>Clean component composition patterns</li>
            </ul>
          </div>
          
          <p className="note">
            Navigate to each folder to see the specific implementations and run them individually.
          </p>
        </div>
      </header>
    </div>
  );
}