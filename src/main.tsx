import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route } from "wouter";
import "./index.css";
import Product from "./pages/Product";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Route path="/" component={App}></Route>
    <Route path="/products/:name">
      {(params) =>
        params.name ? (
          <Product name={params.name} />
        ) : (
          "Producto no encontrado..."
        )
      }
    </Route>
  </React.StrictMode>
);
