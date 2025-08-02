const switchUser = () => {
    setCurrentUser(currentUser === 'Jordan' ? 'Alex' : 'Jordan');
  };import React, { useState, useRef, useEffect } from 'react';
import { Send, Home } from 'lucide-react';

const RoommateChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Alex',
      text: "Hey! I'm so excited we're going to be roommates! 🏠",
      timestamp: new Date(Date.now() - 300000),
      isCurrentUser: false
    },
    {
      id: 2,
      sender: 'Jordan',
      text: "Same here! I can't wait to move in. Have you thought about how we want to split up the common areas?",
      timestamp: new Date(Date.now() - 240000),
      isCurrentUser: true
    },
    {
      id: 3,
      sender: 'Alex',
      text: "Good question! I was thinking we could chat about that. I'm pretty flexible with most things. What's most important to you in our living situation?",
      timestamp: new Date(Date.now() - 180000),
      isCurrentUser: false
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('Jordan');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: currentUser,
      text: newMessage.trim(),
      timestamp: new Date(),
      isCurrentUser: true
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate the other person typing and responding
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That sounds great! I'm really looking forward to this.",
        "I totally agree! We should definitely discuss that more.",
        "Good point! I hadn't thought of that.",
        "That works for me! Thanks for being so considerate.",
        "I love that idea! You seem like a really thoughtful roommate.",
        "Perfect! I think we're going to get along really well.",
        "That's exactly what I was thinking too!",
        "Thanks for bringing that up - communication is so important!"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const responseMessage = {
        id: messages.length + 2,
        sender: currentUser === 'Jordan' ? 'Alex' : 'Jordan',
        text: randomResponse,
        timestamp: new Date(),
        isCurrentUser: false
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const switchUser = () => {
    setCurrentUser(currentUser === 'Jordan' ? 'Alex' : 'Jordan');
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-100 p-2 rounded-full">
            <Home className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Future Roommates Chat</h1>
            <p className="text-sm text-gray-600">Getting to know each other before move-in day!</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md xl:max-w-lg`}>
              <div
                className={`p-3 rounded-2xl shadow-sm ${
                  message.isCurrentUser
                    ? 'bg-indigo-600 text-white ml-auto'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-xs font-medium ${
                    message.isCurrentUser ? 'text-indigo-200' : 'text-indigo-600'
                  }`}>
                    {message.sender}
                  </span>
                  <span className={`text-xs ${
                    message.isCurrentUser ? 'text-indigo-200' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md xl:max-w-lg">
              <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-medium text-indigo-600">
                    {currentUser === 'Jordan' ? 'Alex' : 'Jordan'}
                  </span>
                  <span className="text-xs text-gray-500">typing...</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <div className="flex-1">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message as ${currentUser}...`}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ''}
            className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            Currently chatting as <span className="font-medium text-indigo-600">{currentUser}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoommateChat;