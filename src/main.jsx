import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
