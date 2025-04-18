import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "../components/Chat/ChatMessage";
import InputArea from "../components/Chat/InputArea";
import TypingIndicator from "../components/Chat/TypingIndicator";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import FAQUploadModal from "../components/Modals/FAQUploadModal";
import EmptyState from "../components/UI/EmptyState";

export default function FullPageChatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUploadedFAQ, setHasUploadedFAQ] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);

  const messagesEndRef = useRef(null);

  const isEmptyChat = messages.length === 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: simulateAIResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const startNewChat = () => {
    setMessages([]);
  };

  const simulateAIResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (lowerInput.includes("pricing") || lowerInput.includes("cost")) {
      return "Our pricing plans start at $12/month for the Basic plan, $29/month for Pro, and custom pricing for Enterprise solutions. Would you like more details about any specific plan?";
    } else if (
      lowerInput.includes("refund") ||
      lowerInput.includes("money back")
    ) {
      return "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied, please contact our billing department through your account dashboard.";
    } else if (lowerInput.includes("upload") || lowerInput.includes("faq")) {
      return "You can train the chatbot with your own FAQ by uploading a PDF document. Click the upload button in the chat interface.";
    } else if (lowerInput.includes("thank")) {
      return "You're welcome! Don't hesitate to reach out if you have any other questions.";
    } else {
      return (
        "I understand you're asking about " +
        input.substring(0, 20) +
        "... To better assist you, could you provide more details about your question? Our AI has been trained on an extensive knowledge base to help with product information, troubleshooting, and account assistance."
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFAQUpload = () => {
    setHasUploadedFAQ(true);
    setShowFAQModal(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: "✅ FAQ document successfully uploaded and processed. The AI is now trained on your specific content.",
        sender: "system",
        timestamp: new Date(),
      },
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex h-screen bg-[#080F0F] text-white">
      <Sidebar startNewChat={startNewChat} hasUploadedFAQ={hasUploadedFAQ} />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto">
          {isEmptyChat ? (
            <EmptyState setShowFAQModal={setShowFAQModal} />
          ) : (
            <div className="max-w-3xl mx-auto pt-4 pb-32">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  formatTime={formatTime}
                />
              ))}

              {isLoading && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <InputArea
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSendMessage={handleSendMessage}
          handleKeyPress={handleKeyPress}
          hasUploadedFAQ={hasUploadedFAQ}
          setShowFAQModal={setShowFAQModal}
        />
      </div>

      {showFAQModal && (
        <FAQUploadModal
          handleFAQUpload={handleFAQUpload}
          closeModal={() => setShowFAQModal(false)}
        />
      )}
    </div>
  );
}
