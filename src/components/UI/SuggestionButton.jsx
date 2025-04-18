export default function SuggestionButton({ text }) {
  return (
    <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors">
      {text}
    </button>
  );
}
