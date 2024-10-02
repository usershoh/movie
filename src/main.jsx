import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root/index.jsx";
import ProviderConfig from "./provider/index.jsx";

createRoot(document.getElementById("root")).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>
);
