import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';

interface ChatMessage {
  role: string;
  content: string;
}

interface FolderChatProps {
  folderName: string;
}

export const FolderChat: React.FC<FolderChatProps> = ({ folderName }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { role: 'user', content: chatMessage },
        { role: 'assistant', content: `I can help you with questions about your ${folderName} emails. What would you like to know?` }
      ]);
      setChatMessage('');
    }
  };

  return (
    <div className="border-t border-border bg-card p-6">
      <div className="mb-4 pb-4 border-b border-border">
        <h3 className="text-base font-semibold text-foreground mb-1 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-primary" />
          Folder Assistant
        </h3>
        <p className="text-xs text-muted-foreground">
          Ask questions about emails in {folderName}
        </p>
      </div>

      {/* Chat Messages */}
      <div className="mb-4 max-h-32 overflow-y-auto space-y-2">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-2.5 rounded-lg text-sm ${
              msg.role === 'user'
                ? 'bg-primary/10 text-foreground ml-8'
                : 'bg-muted text-foreground mr-8'
            }`}
          >
            <p className="text-xs">{msg.content}</p>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Ask about your emails..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 h-9 text-sm"
        />
        <Button onClick={handleSendMessage} disabled={!chatMessage.trim()} size="sm" className="h-9">
          <Send className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
