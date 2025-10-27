import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';
import MainApp from '@/components/MainApp';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    // If on /app route and not logged in, redirect to auth
    if (location.pathname === '/app' && !loggedIn) {
      navigate('/auth');
    }
    // If on home and logged in, could redirect to app (optional)
  }, [location.pathname, navigate]);

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Show app if logged in and on /app route
  if (location.pathname === '/app' && isLoggedIn) {
    return (
      <div className="min-h-screen">
        <MainApp onLogout={handleLogout} />
      </div>
    );
  }

  // Show landing page
  return (
    <div className="min-h-screen">
      <LandingPage onLogin={handleLogin} />
    </div>
  );
};

export default Index;
