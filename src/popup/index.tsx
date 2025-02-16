import React from "react";
import ReactDOM from "react-dom/client";

import Popup from "./popup";
import "../globals.css";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
