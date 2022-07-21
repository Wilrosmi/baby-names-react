import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import names from "./baby-names";
import nameSortAlpha from "./utils/nameSortAlpha";
import "./App.css";

const alphabeticalNames = names.sort(nameSortAlpha);

ReactDOM.render(
  <React.StrictMode>
    <App names={alphabeticalNames} />
  </React.StrictMode>,
  document.getElementById("root")
);
