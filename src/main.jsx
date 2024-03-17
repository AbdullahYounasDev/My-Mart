import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/Context/ProductContext.jsx";
import { CatProvider } from "./components/Context/CategorieContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppProvider>
      <CatProvider>
        <App />
      </CatProvider>
    </AppProvider>
  </Provider>
);
