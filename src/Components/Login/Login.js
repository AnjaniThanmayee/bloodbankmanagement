import React, { useState } from 'react';
import './Login.css';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'; 

const API_URL = 'http://localhost:5000';
function Login() {
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      alert(data.message);
      if (data.message === 'Login successful!') {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


 
  return (
 
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        
         <p>Dont have an account?<button ><Link className='route-link-login' to="/register">Register</Link></button></p>
        </form>
      </div>
    </div>
    
  );
};

export default Login;