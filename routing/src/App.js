import { Router } from "@reach/router";
import './App.css';
import React from "react";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import WordColor from "./components/WordColor";



function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:num" />
        <Word path="/new/:word" />
        <WordColor path="/:word/:fontColor/:background" />
      </Router>
    </div>
  );
}

export default App;
