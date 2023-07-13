import React from "react";

import "./App.css";
import Dashboard from "./admin/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Seller from "./seller/Dashboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard /> */}
      <Seller />
    </BrowserRouter>
  );
}

export default App;
