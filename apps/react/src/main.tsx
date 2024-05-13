import { createRoot } from "react-dom/client";
import App from "./App";
import "@/styles/index.less";

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
