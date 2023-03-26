import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Gallery from "./gallery";
import store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Gallery />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
