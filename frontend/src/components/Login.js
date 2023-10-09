import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem('token', data.token);
        navigate('/inventory');
      } else {
        
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button  onClick={handleLogin}>Login</button>
      <h4>Account not created? <Link to ="/signup">Signup</Link> </h4>
    </div>
  );
};

export default Login;
