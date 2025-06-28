import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';

type AppState = 'landing' | 'login' | 'dashboard';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
      setCurrentState('dashboard');
    }
  }, []);

  const handleAdminClick = () => {
    setCurrentState('login');
  };

  const handleLoginSuccess = () => {
    setCurrentState('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setCurrentState('landing');
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  switch (currentState) {
    case 'landing':
      return <LandingPage onAdminClick={handleAdminClick} />;
    case 'login':
      return (
        <LoginPage 
          onBack={handleBackToLanding} 
          onLoginSuccess={handleLoginSuccess} 
        />
      );
    case 'dashboard':
      return <AdminDashboard onLogout={handleLogout} />;
    default:
      return <LandingPage onAdminClick={handleAdminClick} />;
  }
}

export default App;