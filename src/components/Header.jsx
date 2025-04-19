import { Bell, Moon, Search, Sun } from "lucide-react";
import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`h-16 px-4 flex items-center justify-between border-b ${
        darkMode ? "bg-[#080F0F] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex-1">
        <h2 className="text-xl font-semibold">AI Support Assistant</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div
          className={`relative rounded-lg overflow-hidden flex items-center px-3 py-2 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search conversations..."
            className={`ml-2 bg-transparent border-none focus:outline-none text-sm ${
              darkMode
                ? "text-white placeholder-gray-500"
                : "text-gray-800 placeholder-gray-400"
            }`}
          />
        </div>

        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Bell className="h-5 w-5" />
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        <div className="h-8 w-8 bg-[#BEA57D] rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
