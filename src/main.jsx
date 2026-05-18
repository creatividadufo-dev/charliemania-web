import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CharliemaniaWebsite from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharliemaniaWebsite />
  </React.StrictMode>
);
