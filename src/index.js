import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import CommentList from "./react_practice_03/CommentList";

const rootElement = document.getElementById("root");

const render = (Component) => {
  createRoot(rootElement).render(<CommentList />);
};

render(App);
