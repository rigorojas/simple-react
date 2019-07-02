import React from "react";
import Counter from "./Counter";
import ApiCall from './ApiCall';
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>My Counter</h1>
      <Counter />
      <ApiCall />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
