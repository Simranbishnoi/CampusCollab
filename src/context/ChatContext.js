import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const { user } = useAuth();
  
  // Try to load chats from local storage
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem('campuscollab_chats');
    if (savedChats) {
        return JSON.parse(savedChats);
    }
    return []; // No dummy data initially as requested
  });

  // Save to local storage whenever chats change
  useEffect(() => {
    localStorage.setItem('campuscollab_chats', JSON.stringify(chats));
  }, [chats]);

  const sendMessage = (receiverId, receiverName, text) => {
    if (!user) return;

    const newMessage = {
      id: Date.now().toString(),
      senderId: user.registrationNumber || user.email, // using whatever unique ID we have
      senderName: user.name,
      senderRole: user.role,
      receiverId,
      receiverName,
      text,
      timestamp: new Date().toISOString()
    };

    setChats(prevChats => [...prevChats, newMessage]);
  };

  const getChatHistory = (otherUserId) => {
    if (!user) return [];
    const myId = user.registrationNumber || user.email;
    return chats.filter(
      chat => 
        (chat.senderId === myId && chat.receiverId === otherUserId) || 
        (chat.senderId === otherUserId && chat.receiverId === myId)
    ).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  };
  
  const getContacts = () => {
    if (!user) return [];
    const myId = user.registrationNumber || user.email;
    const contactsSet = new Map();

    chats.forEach(chat => {
        if (chat.senderId === myId) {
            contactsSet.set(chat.receiverId, chat.receiverName);
        } else if (chat.receiverId === myId) {
            contactsSet.set(chat.senderId, chat.senderName);
        }
    });

    return Array.from(contactsSet).map(([id, name]) => ({ id, name }));
  }

  return (
    <ChatContext.Provider value={{ chats, sendMessage, getChatHistory, getContacts }}>
      {children}
    </ChatContext.Provider>
  );
};
