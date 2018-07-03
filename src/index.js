import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// Learned about the BrowserRouter from the link below:
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
