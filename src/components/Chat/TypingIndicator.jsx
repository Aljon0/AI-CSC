import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="px-4 py-6 bg-gray-900 bg-opacity-50">
      <div className="max-w-3xl mx-auto flex">
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#A4BAB7] flex items-center justify-center mr-4">
          <Bot size={16} className="text-[#080F0F]" />
        </div>
        <div className="flex-1">
          <div className="mb-1 font-medium">AI Support</div>
          <div className="typing-indicator">
            <span className="dot bg-gray-400"></span>
            <span className="dot bg-gray-400"></span>
            <span className="dot bg-gray-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
