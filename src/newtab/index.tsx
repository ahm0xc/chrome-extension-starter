import React from "react";
import ReactDOM from "react-dom/client";

import "../globals.css";
import NewTab from "./new-tab";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>,
);
