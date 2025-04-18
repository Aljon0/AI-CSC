import { Send, Upload } from "lucide-react";

export default function InputArea({
  inputValue,
  setInputValue,
  handleSendMessage,
  handleKeyPress,
  hasUploadedFAQ,
  setShowFAQModal,
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#080F0F] border-t border-gray-800 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask anything"
            className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#BEA57D] text-white resize-none"
            rows="1"
          />
          <div className="absolute right-2 bottom-2 flex space-x-2">
            {!hasUploadedFAQ && (
              <button
                onClick={() => setShowFAQModal(true)}
                className="p-2 rounded-md hover:bg-gray-700"
                title="Upload FAQ Document"
              >
                <Upload size={20} className="text-gray-400" />
              </button>
            )}
            <button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ""}
              className={`p-2 rounded-md ${
                inputValue.trim() === ""
                  ? "text-gray-600"
                  : "text-[#A52422] hover:bg-gray-700"
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <div className="flex space-x-2 text-xs text-gray-500">
            <span>✅ Train the bot on your FAQ</span>
            <span>•</span>
            <span>✅ Real-time AI responses</span>
            <span>•</span>
            <span>✅ Save chat history per user</span>
          </div>
        </div>
      </div>
    </div>
  );
}
