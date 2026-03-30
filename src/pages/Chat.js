import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import './Chat.css';

const Chat = () => {
  const { user } = useAuth();
  const { getContacts, getChatHistory, sendMessage } = useChat();
  
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  
  const messagesEndRef = useRef(null);

  // Load contacts on mount
  useEffect(() => {
    if (user) {
      setContacts(getContacts());
    }
  }, [user, getContacts]);

  // Load chat history when active contact changes
  useEffect(() => {
    if (activeContact) {
      setMessages(getChatHistory(activeContact.id));
    } else {
      setMessages([]);
    }
  }, [activeContact, getChatHistory]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '' || !activeContact) return;

    sendMessage(activeContact.id, activeContact.name, inputText);
    setInputText('');
    
    // Refresh messages
    setMessages(getChatHistory(activeContact.id));
    
    // Also update contacts list in case this is a new contact
    setContacts(getContacts());
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="page-container" style={{ padding: '0 20px 20px 20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: '10px' }}>Messages</h1>
      
      <div className="chat-container">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h3>Conversations</h3>
          </div>
          <div className="contact-list">
            {contacts.length > 0 ? (
              contacts.map(contact => (
                <div 
                  key={contact.id} 
                  className={`contact-item ${activeContact?.id === contact.id ? 'active' : ''}`}
                  onClick={() => setActiveContact(contact)}
                >
                  <div className="contact-avatar">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="contact-info">
                    <h4>{contact.name}</h4>
                    <p>Click to view chat</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-contacts">
                <p>No recent conversations.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Connect with professors from the Projects page to start chatting.</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="chat-main">
          {activeContact ? (
            <>
              <div className="chat-header">
                <FaUserCircle style={{ fontSize: '2rem', color: '#4facfe', marginRight: '15px' }} />
                <h3>{activeContact.name}</h3>
              </div>
              
              <div className="chat-messages">
                {messages.length > 0 ? (
                  messages.map(msg => {
                    const myId = user.registrationNumber || user.email;
                    const isSent = msg.senderId === myId;
                    
                    return (
                      <div key={msg.id} className={`message ${isSent ? 'sent' : 'received'}`}>
                        <div className="message-bubble">
                          {msg.text}
                        </div>
                        <span className="message-time">{formatTime(msg.timestamp)}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty-chat">
                    <p>Send a message to start the conversation.</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form className="chat-input-area" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="send-btn" disabled={!inputText.trim()}>
                  <FaPaperPlane />
                </button>
              </form>
            </>
          ) : (
            <div className="empty-chat">
              <div style={{ textAlign: 'center' }}>
                <FaUserCircle style={{ fontSize: '4rem', color: '#ddd', marginBottom: '15px' }} />
                <h3>No Chat Selected</h3>
                <p>Select a conversation from the sidebar to start messaging.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
