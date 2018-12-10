import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";

const jsx = (
  <Router>
    <App />
  </Router>
);

hydrate(jsx, document.getElementById("app"));
