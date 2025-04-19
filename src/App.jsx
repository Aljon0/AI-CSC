import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TrainingPanel from "./components/TrainingPanel";

function App() {
  const [activeTab, setActiveTab] = useState("chat");
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [chatHistory, setChatHistory] = useState({});

  const addMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      type: message.type,
      content: message.content,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);

    // Simulate AI response
    if (message.type === "user") {
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          content: getAIResponse(message.content),
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  const getAIResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (
      lowerCaseMessage.includes("pricing") ||
      lowerCaseMessage.includes("cost")
    ) {
      return "Our pricing starts at $9.99/month for the basic plan. Would you like me to provide more details about our pricing tiers?";
    } else if (lowerCaseMessage.includes("feature")) {
      return "Our platform offers AI-powered responses, chat history saving, and the ability to train the bot on your custom FAQs. Is there a specific feature you'd like to know more about?";
    } else {
      return (
        "I understand you're asking about " +
        userMessage.slice(0, 20) +
        "... Let me help you with that. Could you provide a bit more detail so I can give you the most accurate information?"
      );
    }
  };

  const saveChatHistory = () => {
    const userId = "current-user"; // In a real app, this would be the actual user ID
    setChatHistory({
      ...chatHistory,
      [userId]: messages,
    });
    console.log("Chat history saved for user:", userId);
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {activeTab === "chat" && (
          <ChatWindow
            messages={messages}
            addMessage={addMessage}
            saveChatHistory={saveChatHistory}
            darkMode={darkMode}
          />
        )}

        {activeTab === "training" && <TrainingPanel darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
