import React from "react";
import ReactDOM from "react-dom/client";

import NewTab from "./new-tab";
import "../globals.css";
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>
);
