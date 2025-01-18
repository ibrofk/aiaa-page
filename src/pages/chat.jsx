import React, { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { motion, AnimatePresence } from "framer-motion";

const demoAIResponses = [
  "That's an interesting question! I'd be happy to help you.",
  "I understand your perspective. Let me provide some insights.",
  "Great point! Here's what I think about that.",
  "Fascinating topic. Let me break it down for you.",
  "I'm glad you asked. Here's a comprehensive explanation."
];

const ChatPage = () => {
  const [messages, setMessages] = useState(() => {
    // Load messages from local storage on initial render
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Save messages to local storage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trim input and prevent empty submissions
    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage) return;

    // Create user message
    const userMessage = {
      role: "user",
      content: trimmedMessage,
      id: Date.now(),
      timestamp: Date.now()
    };

    // Add user message
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Reset input
    setInputValue("");
    
    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const randomResponse = demoAIResponses[Math.floor(Math.random() * demoAIResponses.length)];
      
      const aiMessage = {
        role: "assistant",
        content: randomResponse,
        id: Date.now() + 1,
        timestamp: Date.now()
      };

      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4 space-y-4 p-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-700 text-gray-200 rounded-lg p-4">
              Typing...
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-auto p-4">
        <form onSubmit={handleSubmit} className="relative">
          <PlaceholdersAndVanishInput
            placeholders={[
              "Ask me anything...",
              "What's on your mind?",
              "How can I help you today?",
              "Type your message here...",
            ]}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            value={inputValue}
          />
          {messages.length > 0 && (
            <button
              type="button"
              onClick={clearHistory}
              className="absolute right-0 top-0 bg-red-500 text-white px-3 py-1 rounded-md text-sm"
            >
              Clear History
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChatPage;