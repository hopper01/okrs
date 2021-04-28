import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import store from "./store/main";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)


