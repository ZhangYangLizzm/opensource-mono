import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.less";
import React from "react";

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
);
