import React, { useState } from 'react';
import axios from 'axios';

interface RegisterProps {
  onAuthenticated: (token: string) => void;
  onSwitch: () => void;
}

const Register: React.FC<RegisterProps> = ({ onAuthenticated, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', { email, password });
      const { token } = response.data;
      onAuthenticated(token);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister} style={{ marginBottom: '20px' }}>
        <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button onClick={onSwitch}>Login</button></p>
    </div>
  );
};

export default Register;
