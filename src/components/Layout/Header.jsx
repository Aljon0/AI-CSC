import { Bot, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 md:hidden">
          <div className="bg-[#A52422] rounded-lg p-2">
            <Bot size={18} className="text-white" />
          </div>
          <h1 className="font-semibold">AI Support</h1>
        </div>

        <div className="hidden md:block font-medium">AI Customer Support</div>

        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Search size={18} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
