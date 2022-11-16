import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HeaderContextProvider from "./components/header/HeaderContext";
import "./index.css";

ReactDOM.render(
  <HeaderContextProvider>
    <App />
  </HeaderContextProvider>,

  document.getElementById("root")
);
