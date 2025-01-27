"use client";

import * as React from "react";
import { X, MessageCircle } from "lucide-react";
import { cn } from "src/lib/utils";
import { Button } from "../button";

export type ChatPosition = "bottom-right" | "bottom-left";
export type ChatSize = "sm" | "md" | "lg" | "xl" | "full";

const chatConfig = {
  dimensions: {
    sm: "sm:max-w-sm sm:max-h-[500px]",
    md: "sm:max-w-md sm:max-h-[600px]",
    lg: "sm:max-w-lg sm:max-h-[700px]",
    xl: "sm:max-w-xl sm:max-h-[800px]",
    full: "sm:w-full sm:h-full",
  },
  positions: {
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  },
  chatPositions: {
    "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
    "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0",
  },
  states: {
    open: "pointer-events-auto opacity-100 visible scale-100 translate-y-0",
    closed:
      "pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5",
  },
};

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "bottom-right" | "bottom-left";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const ExpandableChat = React.forwardRef<HTMLDivElement, ExpandableChatProps>(
  ({ className, position = "bottom-right", size = "md", icon, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div
        ref={ref}
        className={cn(
          "fixed z-50",
          position === "bottom-right" ? "bottom-[5%] right-[5%]" : "bottom-[5%] left-[5%]",
          className
        )}
        {...props}
      >
        {isOpen ? (
          <div className="fixed inset-0 flex flex-col sm:inset-auto sm:relative">
            {/* Mobile Header */}
            <div className="sm:hidden flex justify-end p-4 border-b">
              <button
                onClick={toggleChat}
                className="text-white hover:opacity-70 transition-opacity p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Chat Container */}
            <div className={cn(
              "bg-background border shadow-lg flex flex-col relative",
              "h-full w-full", // Mobile full screen
              "sm:rounded-lg", // Only add rounded corners on desktop
              "sm:w-[66vw] sm:h-[50vh]", // Desktop dimensions
              "sm:mr-[5%] sm:mb-[5%]", // Right and bottom margins
              "sm:bottom-0 sm:right-0" // Desktop positioning
            )}>
        {children}
              
              {/* Desktop Close Button */}
              <button
          onClick={toggleChat}
                className="hidden sm:block absolute right-4 top-4 text-foreground hover:opacity-70 transition-opacity"
        >
                <X className="h-6 w-6" />
              </button>
            </div>
      </div>
        ) : (
      <ExpandableChatToggle
        isOpen={isOpen}
        toggleChat={toggleChat}
            icon={icon}
            className={cn(
              position === "bottom-right" ? "right-[5%] bottom-[5%]" : "left-[5%] bottom-[5%]",
              "fixed"
            )}
      />
        )}
    </div>
  );
  }
);
ExpandableChat.displayName = "ExpandableChat";

interface ExpandableChatToggleProps {
  className?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  toggleChat: () => void;
}

const ExpandableChatToggle = React.forwardRef<HTMLButtonElement, ExpandableChatToggleProps>(
  ({ className, icon, isOpen, toggleChat, ...props }, ref) => {
    return isOpen ? (
      <button
        ref={ref}
    className={cn(
          "text-foreground hover:text-muted-foreground transition-colors",
          className
    )}
        onClick={toggleChat}
    {...props}
  >
      <X className="h-6 w-6" />
      </button>
    ) : (
      <Button
        ref={ref}
        className={cn(
          "rounded-full w-12 h-12 p-0",
          className
        )}
        onClick={toggleChat}
        {...props}
      >
        {icon || <MessageCircle className="h-4 w-4" />}
  </Button>
    );
  }
);
ExpandableChatToggle.displayName = "ExpandableChatToggle";

const ExpandableChatHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
ExpandableChatHeader.displayName = "ExpandableChatHeader";

const ExpandableChatBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pt-0 flex-1 min-h-0 overflow-auto", className)}
      {...props}
    />
  )
);
ExpandableChatBody.displayName = "ExpandableChatBody";

const ExpandableChatFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
ExpandableChatFooter.displayName = "ExpandableChatFooter";

export {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatToggle,
};
