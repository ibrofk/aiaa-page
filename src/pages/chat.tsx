import { useState, useEffect, useRef } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { Squares } from "../components/ui/squares-background";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: number;
  timestamp: number;
}

const demoAIResponses = [
  "That's an interesting question! I'd be happy to help you.",
  "I understand your perspective. Let me provide some insights.",
  "Great point! Here's what I think about that.",
  "Fascinating topic. Let me break it down for you.",
  "I'm glad you asked. Here's a comprehensive explanation."
];

export default function ChatPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialMessageFromUrl = queryParams.get('initialMessage');
  const initialMessageProcessedRef = useRef(false);

  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    console.log('Initial messages from localStorage:', savedMessages);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasProcessedInitialMessage, setHasProcessedInitialMessage] = useState(false);

  useEffect(() => {
    console.log('Initial message from URL:', initialMessageFromUrl);
    console.log('Has processed initial message:', hasProcessedInitialMessage);

    if (initialMessageFromUrl && !initialMessageProcessedRef.current) {
      const initialUserMessage: Message = {
        role: "user",
        content: initialMessageFromUrl,
        id: Date.now(),
        timestamp: Date.now()
      };

      setMessages(prevMessages => {
        // Check if the message already exists to prevent duplicates
        const isDuplicate = prevMessages.some(
          msg => msg.content === initialMessageFromUrl
        );

        return isDuplicate 
          ? prevMessages 
          : [...prevMessages, initialUserMessage];
      });

      // Mark as processed
      initialMessageProcessedRef.current = true;
      
      // Remove the initial message from the URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [initialMessageFromUrl]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (messageContent: string) => {
    const trimmedMessage = messageContent.trim();
    if (!trimmedMessage) return;

    const userMessage: Message = {
      role: "user",
      content: trimmedMessage,
      id: Date.now(),
      timestamp: Date.now()
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue("");
    
    setIsLoading(true);
    setTimeout(() => {
      const randomResponse = demoAIResponses[Math.floor(Math.random() * demoAIResponses.length)];
      
      const aiMessage: Message = {
        role: "assistant",
        content: randomResponse,
        id: Date.now() + 1,
        timestamp: Date.now()
      };

      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  const navigateToMainRoute = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col relative overflow-hidden">
      <Squares 
        direction="diagonal" 
        speed={0.5} 
        borderColor="#333" 
        squareSize={40} 
        hoverFillColor="#222" 
        className="absolute inset-0 z-0"
      />
      
      <div className="fixed top-6 left-6 z-20 flex items-center space-x-4">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={navigateToMainRoute}
          className="bg-red-500/20 hover:bg-red-500/40 text-red-300 p-3 rounded-full shadow-lg transition-colors duration-300"
          title="Close Chat"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {messages.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={clearHistory}
            className="bg-red-500/20 hover:bg-red-500/40 text-red-300 p-3 rounded-full shadow-lg transition-colors duration-300"
            title="Clear Chat History"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </motion.button>
        )}
      </div>
      
      <div className="relative z-10 flex-grow">
        <AnimatePresence>
          {messages.length === 0 ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <motion.h1 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-4 text-white"
              >
                Welcome to AI Chat
              </motion.h1>
              <motion.p
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-gray-300 max-w-md mx-auto mb-8"
              >
                Start a conversation with our AI assistant. Ask anything, and get insightful responses.
              </motion.p>
            </motion.div>
          ) : (
            <div className="flex-grow overflow-y-auto mb-4 space-y-4 p-4 pt-24 pb-32">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: message.role === "user" ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: message.role === "user" ? 50 : -50 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex w-full",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[70%] rounded-2xl p-4 shadow-lg",
                        message.role === "user"
                          ? "bg-blue-600 text-white self-end"
                          : "bg-gray-700 text-gray-200 self-start"
                      )}
                    >
                      <div className="text-sm break-words">{message.content}</div>
                      <div className="text-xs text-gray-300 mt-1 text-right opacity-70">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
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
                  <div className="bg-gray-700 text-gray-200 rounded-lg p-4 flex items-center">
                    <div className="animate-pulse mr-2">●●●</div>
                    Typing...
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className={cn(
        "fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent z-10",
        messages.length === 0 ? "flex justify-center items-center" : ""
      )}>
        <form onSubmit={(e) => { e.preventDefault(); }} className="relative w-full max-w-xl mx-auto">
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
        </form>
      </div>
    </div>
  );
}
