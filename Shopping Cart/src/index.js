import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}> 
  {/* It is used to link react code and redux code all the components under app will use redux functionality */}
    <App />
  </Provider>

  
);
