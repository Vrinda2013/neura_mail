
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Mail, BarChart3, Brain, LogOut, Settings, Bell } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, onLogout }) => {
  const menuItems = [
    {
      id: 'email',
      label: 'Email Assistant',
      icon: <Mail className="h-5 w-5" />,
      description: 'Manage your smart inbox'
    },
    {
      id: 'dashboard',
      label: 'Business Dashboard',
      icon: <BarChart3 className="h-5 w-5" />,
      description: 'Analytics & insights'
    }
  ];

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground h-screen flex flex-col border-r border-sidebar-border">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-sidebar-primary">
            <Brain className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">NeuraMail</h1>
            <p className="text-sm text-muted-foreground">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Main Menu
          </h2>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start mb-2 h-auto p-3",
                activeView === item.id && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <div className="text-left">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-sidebar-accent rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            Quick Stats
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Unread Emails</span>
              <span className="font-medium text-red-400">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Spam Blocked</span>
              <span className="font-medium text-green-400">47</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">This Week</span>
              <span className="font-medium text-blue-400">156</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => onViewChange('settings')}
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
