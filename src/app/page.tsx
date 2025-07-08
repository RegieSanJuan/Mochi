"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Heart, Sparkles, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Mochi, your compassionate AI companion. I'm here to help you explore your feelings and build healthier emotional connections. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Could you try again in a moment?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-mochi-400 to-mochi-600 rounded-full flex items-center justify-center">
            <Heart className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Mochi</h1>
            <p className="text-gray-600">Your Compassionate AI Companion</p>
          </div>
        </div>
        <div className="bg-mochi-50 p-4 rounded-lg border-l-4 border-mochi-400">
          <p className="text-sm text-gray-700">
            <Sparkles className="inline w-4 h-4 mr-1 text-mochi-500" />I
            specialize in helping people with avoidant attachment patterns
            develop deeper emotional connections and healthier relationships.
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] ${
                  message.isUser ? "flex-row-reverse" : "flex-row"
                } gap-3`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser
                      ? "bg-calm-500 text-white"
                      : "bg-mochi-500 text-white"
                  }`}
                >
                  {message.isUser ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    message.isUser
                      ? "bg-calm-500 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.isUser ? "text-calm-100" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-mochi-500 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-gray-100 rounded-lg rounded-bl-sm p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-mochi-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-mochi-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-mochi-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your mind..."
              className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-mochi-400 focus:border-transparent"
              rows={2}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-mochi-500 hover:bg-mochi-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
