import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AppProvider from "./AppContext";

ReactDOM.render(
  //   <AppProvider>
  <App />,
  // </AppProvider>,
  document.getElementById("root")
);

reportWebVitals();
