import { Bot, User } from "lucide-react";

export default function ChatMessage({ message, formatTime }) {
  const isUser = message.sender === "user";
  const isSystem = message.sender === "system";

  if (isSystem) {
    return (
      <div className="flex justify-center my-4 px-4">
        <div className="bg-gray-800 rounded-lg px-4 py-2 max-w-lg text-sm">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`px-4 py-6 ${
        isUser ? "bg-transparent" : "bg-gray-900 bg-opacity-50"
      }`}
    >
      <div className="max-w-3xl mx-auto flex">
        <div
          className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center mr-4 ${
            isUser ? "bg-[#BEA57D]" : "bg-[#A4BAB7]"
          }`}
        >
          {isUser ? (
            <User size={16} className="text-white" />
          ) : (
            <Bot size={16} className="text-[#080F0F]" />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-1 font-medium">
            {isUser ? "You" : "AI Support"}
          </div>
          <div className="text-gray-200 whitespace-pre-wrap">
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
}
