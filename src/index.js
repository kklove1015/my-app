import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import Accommodate from "./react_practice_07/Accommodate";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(
    <StrictMode>
      <Accommodate />
    </StrictMode>
  );
};

render(App);
