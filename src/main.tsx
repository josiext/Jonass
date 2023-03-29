import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrettyBar } from "./components/PrettyBar";
import "./index.css";
import "rc-tooltip/assets/bootstrap_white.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrettyBar />
    <App />
    <PrettyBar />
  </React.StrictMode>
);
