import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import RoommateList from './components/RoommateList';
import Register from './components/Register';
import Login from './components/Login';
import ProfileSetup from './components/ProfileSetup';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(true);
  const [profileSetup, setProfileSetup] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      const profileCompleted = localStorage.getItem('profileSetup');
      if (profileCompleted) {
        setProfileSetup(true);
      }
    }
  }, []);

  const handleAuthentication = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleProfileSetup = () => {
    localStorage.setItem('profileSetup', 'true');
    setProfileSetup(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profileSetup');
    setIsAuthenticated(false);
    setProfileSetup(false);
    setShowRegister(true);
  };

  return (
    <div className="app-container">
      <Header />
      {!isAuthenticated ? (
        showRegister ? (
          <Register onAuthenticated={handleAuthentication} onSwitch={() => setShowRegister(false)} />
        ) : (
          <Login onAuthenticated={handleAuthentication} onSwitch={() => setShowRegister(true)} />
        )
      ) : !profileSetup ? (
        <ProfileSetup onProfileSetupComplete={handleProfileSetup} />
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <SearchForm />
          <RoommateList />
        </>
      )}
    </div>
  );
};

export default App;
