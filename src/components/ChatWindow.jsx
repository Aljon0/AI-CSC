import { Paperclip, Save, Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ChatWindow = ({ messages, addMessage, saveChatHistory, darkMode }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({
        type: "user",
        content: input,
      });
      setInput("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-md px-4 py-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#A52422] text-white"
                    : darkMode
                    ? "bg-[#A4BAB7] text-[#080F0F]"
                    : "bg-[#EFF2C0]"
                }`}
              >
                <p>{message.content}</p>
                <div
                  className={`text-xs mt-1 ${
                    message.type === "user"
                      ? "text-gray-300"
                      : darkMode
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div
        className={`border-t p-4 ${
          darkMode ? "bg-[#080F0F] border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">
              <span
                className={`inline-block w-2 h-2 rounded-full mr-2 ${
                  messages.length > 1 ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
              {messages.length > 1
                ? "AI Assistant is online"
                : "Connecting to AI..."}
            </div>
            <button
              onClick={saveChatHistory}
              className={`flex items-center text-sm ${
                darkMode
                  ? "text-[#BEA57D] hover:text-[#EFF2C0]"
                  : "text-[#A52422] hover:text-[#BEA57D]"
              }`}
            >
              <Save className="h-4 w-4 mr-1" />
              Save Chat
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <button
              type="button"
              className={`p-2 rounded-full ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-400"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
            >
              <Paperclip className="h-5 w-5" />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className={`flex-1 py-3 px-4 rounded-lg ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-700 focus:border-[#A4BAB7]"
                  : "bg-gray-100 text-gray-900 focus:ring-[#BEA57D]"
              } border focus:outline-none focus:ring-2`}
            />

            <button
              type="submit"
              className={`p-3 rounded-lg ${
                input.trim()
                  ? "bg-[#A52422] text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-500"
                  : "bg-gray-200 text-gray-400"
              }`}
              disabled={!input.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
