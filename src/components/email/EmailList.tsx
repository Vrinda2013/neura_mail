import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Archive, Trash2, Clock } from 'lucide-react';

interface Email {
  id: number;
  sender: string;
  subject: string;
  summary: string;
  date: string;
  isRead: boolean;
  category?: string;
  priority?: string;
}

interface EmailListProps {
  emails: Email[];
  folderName: string;
}

export const EmailList: React.FC<EmailListProps> = ({ emails, folderName }) => {
  const getCategoryBadge = (category?: string) => {
    const badges = {
      spam: { label: 'Spam', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
      work: { label: 'Work', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      compliance: { label: 'Compliance', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
      personal: { label: 'Personal', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
    };
    return badges[category as keyof typeof badges] || { label: 'Other', color: 'bg-muted text-muted-foreground' };
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-background">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground capitalize">{folderName}</h2>
        <p className="text-sm text-muted-foreground mt-1">{emails.length} emails in this folder</p>
      </div>

      <div className="space-y-3">
        {emails.map((email) => {
          const categoryBadge = getCategoryBadge(email.category);
          return (
            <Card key={email.id} className={`hover:shadow-md transition-all ${!email.isRead ? 'border-l-4 border-l-primary' : ''}`}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {!email.isRead && (
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-foreground text-base">{email.subject}</h3>
                        {email.category && (
                          <Badge className={`text-xs ${categoryBadge.color}`}>
                            {categoryBadge.label}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">From: {email.sender}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{email.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{email.summary}</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="h-8">
                    <Mail className="h-3 w-3 mr-2" />
                    Mark Read
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <Archive className="h-3 w-3 mr-2" />
                    Archive
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-destructive hover:text-destructive">
                    <Trash2 className="h-3 w-3 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
