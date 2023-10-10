import React, { useState } from 'react';
import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OemSpecs from "./components/Oem";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DealerInventory from "./components/DealerInventory";
import BuyerInventory from "./components/BuyerInventory";

function App() {
  return (
    <Router>
      <div className="App">
        
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dealer-inventory" element={<DealerInventory />} />
          <Route path="/buyer-inventory" element={<BuyerInventory />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oem" element= {<OemSpecs />} />
          
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
