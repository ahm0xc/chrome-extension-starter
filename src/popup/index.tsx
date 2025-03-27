import React from "react";
import ReactDOM from "react-dom/client";

import "../globals.css";
import Popup from "./popup";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
