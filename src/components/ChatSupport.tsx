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

export default function ChatSupport() {
  // Example message
  const message = {
    content: "Hello! How can I assist you today?",
    role: "assistant" as const,
  };

  return (
    <ExpandableChat size="lg" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p className="text-sm text-muted-foreground">Ask any question for our AI to answer</p>
        <div className="flex gap-2 items-center justify-center pt-2 w-full">
          <Button variant="secondary">New Chat</Button>
          <Button variant="secondary">See FAQ</Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList>
          <ChatBubble>
            <ChatBubbleAvatar />
            <ChatBubbleMessage>{message.content}</ChatBubbleMessage>
          </ChatBubble>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="gap-2">
        <ChatInput className="flex-1" />
        <Button type="submit" size="icon">
          <Send className="size-4" />
        </Button>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
} 