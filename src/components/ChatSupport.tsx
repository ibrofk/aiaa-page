import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "./ui/chat/chat-bubble";
import { ChatInput } from "./ui/chat/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "./ui/chat/expandable-chat";
import { ChatMessageList } from "./ui/chat/chat-message-list";
import MessageLoading from "./ui/chat/message-loading";

interface Message {
  content: string;
  role: "user" | "assistant";
}

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Initialize with a loading message
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMessages([
        {
          content: "Hello! How can I assist you today?",
          role: "assistant",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSend = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages((prev) => [
        ...prev,
        { content: inputValue, role: "user" },
      ]);

      // Clear input
      setInputValue("");

      // Show loading state
      setIsLoading(true);

      // Simulate AI response after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { content: "I'm processing your request...", role: "assistant" },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleNewChat = () => {
    // Skip loading state and directly set the initial message
    setMessages([
      {
        content: "Hello! How can I assist you today?",
        role: "assistant",
      },
    ]);
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ExpandableChat size="lg" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p className="text-sm text-muted-foreground">Ask any question for our AI to answer</p>
        <div className="flex gap-2 items-center justify-center pt-2 w-full">
          <Button variant="secondary" onClick={handleNewChat}>
            New Chat
          </Button>
          <Button variant="secondary">See FAQ</Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody
        ref={chatBodyRef}
        className="pb-32 sm:pb-4"
      >
        <ChatMessageList>
          {messages.map((message, index) => (
            <ChatBubble key={index} variant={message.role === "user" ? "sent" : "received"}>
              <ChatBubbleMessage
                variant={message.role === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleMessage variant="received" isLoading>
                <MessageLoading />
              </ChatBubbleMessage>
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="gap-2 fixed bottom-0 left-0 right-0 sm:static sm:bg-transparent bg-background p-4 sm:p-0 border-t sm:border-t-0 h-15 sm:h-auto">
        <ChatInput
          className="flex-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button type="submit" size="icon" onClick={handleSend}>
          <Send className="size-4" />
        </Button>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
} 