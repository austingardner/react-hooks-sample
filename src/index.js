import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Counters } from "./counters";

function App() {
  return (
    <div className="App">
      <Counters />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
