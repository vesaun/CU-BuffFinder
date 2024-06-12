import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {
  onAuthenticated: (token: string) => void;
  onSwitch: () => void;
}

const Login: React.FC<LoginProps> = ({ onAuthenticated, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      const { token } = response.data;
      onAuthenticated(token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={onSwitch}>Register</button></p>
    </div>
  );
};

export default Login;
