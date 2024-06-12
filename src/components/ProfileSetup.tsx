import React, { useState } from 'react';
import axios from 'axios';

interface ProfileSetupProps {
  onProfileSetupComplete: () => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileSetupComplete }) => {
  const [interests, setInterests] = useState('');
  const [description, setDescription] = useState('');

  const handleProfileSetup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/profile/setup',
        { interests, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      onProfileSetupComplete();
    } catch (error) {
      console.error('Error setting up profile:', error);
    }
  };

  return (
    <form onSubmit={handleProfileSetup}>
      <h2>Set Up Your Profile</h2>
      <div>
        <label htmlFor="interests">Interests:</label>
        <textarea 
          id="interests" 
          value={interests} 
          onChange={(e) => setInterests(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <button type="submit">Complete Profile Setup</button>
    </form>
  );
};

export default ProfileSetup;
