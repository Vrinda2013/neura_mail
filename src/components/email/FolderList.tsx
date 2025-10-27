import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FolderOpen, AlertTriangle, Briefcase, FileText, User } from 'lucide-react';

interface Folder {
  name: string;
  count: number;
  color: string;
  category: string;
}

interface FolderListProps {
  spamFolders: Folder[];
  workFolders: Folder[];
  complianceFolders: Folder[];
  personalFolders: Folder[];
  selectedFolder: string;
  onFolderSelect: (folder: string) => void;
}

export const FolderList: React.FC<FolderListProps> = ({
  spamFolders,
  workFolders,
  complianceFolders,
  personalFolders,
  selectedFolder,
  onFolderSelect,
}) => {
  const renderFolderSection = (
    title: string,
    icon: React.ReactNode,
    folders: Folder[]
  ) => (
    <div className="mb-4">
      <div className="flex items-center mb-2 px-3">
        {icon}
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div className="space-y-1">
        {folders.map((folder) => (
          <Button
            key={folder.name}
            variant={selectedFolder === folder.name ? 'secondary' : 'ghost'}
            className="w-full justify-between text-left h-auto py-2.5 px-3"
            onClick={() => onFolderSelect(folder.name)}
          >
            <div className="flex items-center min-w-0 flex-1">
              <FolderOpen className={`mr-3 h-4 w-4 flex-shrink-0 ${folder.color}`} />
              <span className="text-sm truncate">{folder.name}</span>
            </div>
            <Badge 
              variant={folder.count > 0 ? 'default' : 'secondary'} 
              className={`ml-2 flex-shrink-0 ${
                folder.count > 10 ? 'bg-destructive text-destructive-foreground' : ''
              }`}
            >
              {folder.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4">
      {/* Spam Section */}
      {renderFolderSection(
        'SPAM',
        <AlertTriangle className="h-3.5 w-3.5 text-destructive mr-2" />,
        spamFolders
      )}

      <Separator className="my-3" />

      {/* Work Section */}
      {renderFolderSection(
        'WORK',
        <Briefcase className="h-3.5 w-3.5 text-primary mr-2" />,
        workFolders
      )}

      <Separator className="my-3" />

      {/* Compliance Section */}
      {renderFolderSection(
        'COMPLIANCE',
        <FileText className="h-3.5 w-3.5 text-green-600 mr-2" />,
        complianceFolders
      )}

      <Separator className="my-3" />

      {/* Personal Section */}
      {renderFolderSection(
        'PERSONAL',
        <User className="h-3.5 w-3.5 text-purple-600 mr-2" />,
        personalFolders
      )}
    </div>
  );
};
