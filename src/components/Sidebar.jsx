import { History, LogOut, MessageSquare, Settings, Upload } from "lucide-react";
import React from "react";

const Sidebar = ({ activeTab, setActiveTab, darkMode }) => {
  const navItems = [
    { id: "chat", icon: MessageSquare, label: "Chat" },
    { id: "training", icon: Upload, label: "Train Bot" },
    { id: "history", icon: History, label: "Chat History" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`w-20 md:w-64 h-full flex flex-col ${
        darkMode ? "bg-[#080F0F] text-gray-200" : "bg-white border-r"
      }`}
    >
      <div className="p-4 flex items-center justify-center md:justify-start space-x-2">
        <div className="h-8 w-8 bg-[#A52422] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <h1 className="hidden md:block text-lg font-bold">AIChatBot</h1>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 ${
                  activeTab === item.id
                    ? `${
                        darkMode
                          ? "bg-gray-800 text-[#EFF2C0]"
                          : "bg-[#EFF2C0] text-[#080F0F]"
                      }`
                    : `${
                        darkMode
                          ? "text-gray-400 hover:bg-gray-800"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                } rounded-lg transition-colors`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="hidden md:block ml-3">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <button
          className={`w-full flex items-center px-4 py-3 ${
            darkMode
              ? "text-gray-400 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          } rounded-lg transition-colors`}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className="hidden md:block ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
