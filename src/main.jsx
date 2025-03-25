import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import "./index.css";
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalProvider>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
    </GlobalProvider>
  </BrowserRouter>
);
