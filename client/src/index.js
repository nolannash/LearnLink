import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./AppContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />,
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
