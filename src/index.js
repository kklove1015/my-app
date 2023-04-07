import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import Counter from "./react_practice_05/Counter";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(
    <StrictMode>
      <Counter />
    </StrictMode>
  );
};

render(App);
