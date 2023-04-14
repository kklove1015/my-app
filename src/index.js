import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import TestButton from "./react_practice_08/TestButton";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(
    <StrictMode>
      <TestButton />
    </StrictMode>
  );
};

render(App);
