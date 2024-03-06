import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/Context/ProductContext.jsx";
import { CatProvider } from "./components/Context/CategorieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode basename="/My-Mart">
    <AppProvider>
      <CatProvider>
        <App />
      </CatProvider>
    </AppProvider>
  </React.StrictMode>
);
