import { CheckCircle, File, Upload } from "lucide-react";
import React, { useState } from "react";

const TrainingPanel = ({ darkMode }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [training, setTraining] = useState(false);
  const [trained, setTrained] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      setFiles([...files, ...droppedFiles]);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleTrainBot = () => {
    setTraining(true);
    // Simulate training process
    setTimeout(() => {
      setTraining(false);
      setTrained(true);
    }, 3000);
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Train Your AI Assistant</h2>

        <div className="mb-8">
          <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Upload your FAQ documents, knowledge base, or any text content to
            train the AI to better assist your customers.
          </p>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragging
                ? `${
                    darkMode
                      ? "border-[#BEA57D] bg-gray-800"
                      : "border-[#A52422] bg-[#EFF2C0]/30"
                  }`
                : `${
                    darkMode
                      ? "border-gray-700 hover:border-[#BEA57D]"
                      : "border-gray-300 hover:border-[#A52422]"
                  }`
            } transition-colors`}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                className={`p-4 rounded-full ${
                  darkMode ? "bg-gray-800" : "bg-[#EFF2C0]"
                }`}
              >
                <Upload
                  className={`h-8 w-8 ${
                    darkMode ? "text-[#BEA57D]" : "text-[#A52422]"
                  }`}
                />
              </div>

              <div>
                <p className="font-medium mb-1">Drag and drop files here</p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Supports PDF, DOCX, TXT (max 10MB)
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  or
                </span>
              </div>

              <label
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  darkMode
                    ? "bg-[#A4BAB7] text-[#080F0F] hover:bg-[#BEA57D]"
                    : "bg-[#A52422] text-white hover:bg-[#A52422]/90"
                } transition-colors`}
              >
                <span>Browse Files</span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                />
              </label>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Selected Files</h3>

            <div
              className={`rounded-lg overflow-hidden ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-4 py-3 ${
                    index !== files.length - 1
                      ? `border-b ${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }`
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <File
                      className={`h-5 w-5 ${
                        darkMode ? "text-[#A4BAB7]" : "text-[#A52422]"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFile(index)}
                    className={`text-sm ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-[#A52422]"
                    }`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleTrainBot}
                disabled={training || trained}
                className={`px-5 py-2 rounded-lg flex items-center ${
                  trained
                    ? `${darkMode ? "bg-green-600" : "bg-green-500"} text-white`
                    : training
                    ? `${darkMode ? "bg-gray-700" : "bg-gray-300"} ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`
                    : `${
                        darkMode
                          ? "bg-[#A4BAB7] text-[#080F0F] hover:bg-[#BEA57D]"
                          : "bg-[#A52422] text-white hover:bg-[#A52422]/90"
                      }`
                } transition-colors`}
              >
                {trained ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Bot Trained
                  </>
                ) : training ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Training in Progress...
                  </>
                ) : (
                  "Train Bot with Files"
                )}
              </button>
            </div>
          </div>
        )}

        <div
          className={`rounded-lg p-6 ${
            darkMode ? "bg-gray-800" : "bg-[#EFF2C0]/50"
          }`}
        >
          <h3 className="text-lg font-medium mb-3">Training Tips</h3>
          <ul
            className={`space-y-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li className="flex items-start">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                  darkMode ? "bg-[#BEA57D]" : "bg-[#A52422]"
                }`}
              ></span>
              Include frequently asked questions with detailed answers
            </li>
            <li className="flex items-start">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                  darkMode ? "bg-[#BEA57D]" : "bg-[#A52422]"
                }`}
              ></span>
              Add product documentation, guides, and troubleshooting steps
            </li>
            <li className="flex items-start">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                  darkMode ? "bg-[#BEA57D]" : "bg-[#A52422]"
                }`}
              ></span>
              Structure content clearly with headings and sections for better
              training results
            </li>
            <li className="flex items-start">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                  darkMode ? "bg-[#BEA57D]" : "bg-[#A52422]"
                }`}
              ></span>
              Update training materials regularly for the most accurate
              responses
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingPanel;
