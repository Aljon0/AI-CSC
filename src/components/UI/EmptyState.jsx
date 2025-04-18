import { Upload } from "lucide-react";
import SuggestionButton from "./SuggestionButton";

export default function EmptyState({ setShowFAQModal }) {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">What can I help with?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
        <SuggestionButton text="How do I reset my password?" />
        <SuggestionButton text="What are your pricing plans?" />
        <SuggestionButton text="Can I get a refund?" />
        <SuggestionButton text="How do I contact support?" />
      </div>

      <button
        onClick={() => setShowFAQModal(true)}
        className="flex items-center px-4 py-3 bg-[#A4BAB7] text-[#080F0F] rounded-lg hover:bg-opacity-90 transition-colors"
      >
        <Upload size={18} className="mr-2" />
        <span className="font-medium">Upload your FAQ document</span>
      </button>
    </div>
  );
}
