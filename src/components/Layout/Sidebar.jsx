import { Bot, LogOut, Plus, Upload } from "lucide-react";

export default function Sidebar({ startNewChat, hasUploadedFAQ }) {
  return (
    <div className="hidden md:flex flex-col w-64 bg-[#080F0F] border-r border-gray-800">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="bg-[#A52422] rounded-lg p-2 mr-3">
            <Bot size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold">AI Support</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <button
          onClick={startNewChat}
          className="flex items-center w-full p-3 mb-2 rounded-lg hover:bg-gray-800 transition-colors text-left"
        >
          <Plus size={16} className="mr-2" />
          <span>New chat</span>
        </button>

        {hasUploadedFAQ && (
          <div className="mt-6">
            <h3 className="px-3 text-xs font-medium text-gray-500 uppercase mb-2">
              FAQ Documents
            </h3>
            <div className="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
              <div className="bg-[#A4BAB7] rounded-md p-1 mr-3">
                <Upload size={14} className="text-[#080F0F]" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Company_FAQ.pdf</p>
                <p className="text-xs text-gray-500">Uploaded today</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-gray-800">
        <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-800 transition-colors text-left">
          <LogOut size={16} className="mr-2" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}
