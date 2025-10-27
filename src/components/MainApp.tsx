
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailAssistant from './EmailAssistant';
import BusinessDashboard from './BusinessDashboard';

interface MainAppProps {
  onLogout: () => void;
}

const MainApp: React.FC<MainAppProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('email');

  const renderActiveView = () => {
    switch (activeView) {
      case 'email':
        return <EmailAssistant />;
      case 'dashboard':
        return <BusinessDashboard />;
      default:
        return <EmailAssistant />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        onLogout={onLogout}
      />
      <div className="flex-1 overflow-hidden">
        {renderActiveView()}
      </div>
    </div>
  );
};

export default MainApp;
