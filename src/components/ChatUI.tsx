import React from 'react';
import { Menu } from '@radix-ui/react-menu';
import { motion } from 'framer-motion';

interface ChatUIProps {
  displayName: string;
}

const ChatUI: React.FC<ChatUIProps> = React.memo(({ displayName }) => {
  if (!displayName) {
    alert('Display name cannot be empty.');
    return null;
  }

  const handleSendMessage = (message: string) => {
    if (!message) {
      alert('Message cannot be empty.');
      return;
    }
    // Send message logic
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg">
      <h1 className="text-xl font-bold text-gray-800">Chat with {displayName}</h1>
      <Menu>
        {/* Menu items for accessibility options */}
      </Menu>
      {/* Message sending interface */}
    </div>
  );
});

export default ChatUI;
