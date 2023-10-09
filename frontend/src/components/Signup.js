import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = async () => {
    // Make a POST request to your backend for signup
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (response.ok) {
        // Signup successful, you can redirect to the login page
        console.log('Signup successful');
      } else {
        // Handle signup error (e.g., show an error message)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="dealer">Dealer</option>
          <option value="buyer">Buyer</option>
        </select>
      </div>
      <button onClick={handleSignup}>Signup</button>
      <h4>Already Registered? <Link to ="/login">Login</Link> </h4>
    </div>
  );
};

export default Signup;
