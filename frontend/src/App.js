import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OemSpecs from "./components/Oem";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to BUYC Corp</h1>
        <img className="image" src={logo} alt="logo" />
        <div className="Login">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes as needed */}
        </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
