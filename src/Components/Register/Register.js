import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'; 

const API_URL = 'http://localhost:5000';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          firstName,
          lastName,
          email,
          username,
          password,
        }),
      });
  
      const data = await response.json();
      alert(data.message);
      
      if (data.message === 'Signup successful!') {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  

 

  return (
    <div className="container">
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <button type="button" onClick={handleSignup} >Register
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;