import React from "react";

import "./App.css";
import Dashboard from "./admin/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seller from "./seller/Dashboard";
import Signup from "./user/Signup";
import Login from "./user/Login";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
