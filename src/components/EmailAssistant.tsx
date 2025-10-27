import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Filter, AlertTriangle } from 'lucide-react';
import { FolderList } from '@/components/email/FolderList';
import { EmailList } from '@/components/email/EmailList';
import { FolderChat } from '@/components/email/FolderChat';
import { emailFolders, mockEmails } from '@/data/mockData';

const EmailAssistant: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState('inbox');

  return (
    <div className="flex h-full bg-background">
      {/* Left Sidebar - Folders */}
      <div className="w-80 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Email Folders</h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search emails..."
              className="pl-10"
            />
          </div>

          {/* Unread Alert */}
          <Card className="border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/30">
            <CardContent className="p-4">
              <div className="flex items-center text-orange-800 dark:text-orange-200">
                <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">3 unread emails</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">Over 48 hours old</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <FolderList
          spamFolders={emailFolders.spam}
          workFolders={emailFolders.work}
          complianceFolders={emailFolders.compliance}
          personalFolders={emailFolders.personal}
          selectedFolder={selectedFolder}
          onFolderSelect={setSelectedFolder}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <EmailList emails={mockEmails} folderName={selectedFolder} />
        <FolderChat folderName={selectedFolder} />
      </div>
    </div>
  );
};

export default EmailAssistant;
