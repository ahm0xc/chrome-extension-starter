import React from "react";
import ReactDOM from "react-dom/client";

import "../globals.css";
import Options from "./options";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
);
