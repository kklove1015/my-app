import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import UseRefTest from "./react_practice_06/UseRefTest";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(
    <StrictMode>
      <UseRefTest />
    </StrictMode>
  );
};

render(App);
