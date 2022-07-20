import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import names from "./baby-names";

ReactDOM.render(
  <React.StrictMode>
    <App names={names}/>
  </React.StrictMode>,
  document.getElementById("root")
);
