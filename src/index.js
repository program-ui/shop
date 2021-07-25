import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  
  <React.StrictMode>
  <Router>
    <Context>
      <App />
    </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
