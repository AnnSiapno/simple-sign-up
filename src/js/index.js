import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { routes } from './core/routes';

import App from "./App.js";

ReactDOM.render((
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  ),
  document.getElementById("root")
);
