import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import Clock from "./react_practice_02/Clock";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(<Clock />);
};
//test
render(App);
