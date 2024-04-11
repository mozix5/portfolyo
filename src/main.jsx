import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SmoothScrolling from "./components/SmoothScrolling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SmoothScrolling>
    <App />
  </SmoothScrolling>
);
