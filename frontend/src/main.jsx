import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <Provider>
      <MainLayout>
        <App />
      </MainLayout>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
);
