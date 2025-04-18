import { Upload } from "lucide-react";
import { useState } from "react";

export default function FAQUploadModal({ handleFAQUpload, closeModal }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#080F0F] border border-gray-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Upload FAQ Document</h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-white"
          >
            &times;
          </button>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center ${
            dragActive
              ? "border-[#A52422] bg-opacity-10 bg-red-900"
              : "border-gray-700"
          } ${
            selectedFile ? "bg-green-900 bg-opacity-10 border-green-600" : ""
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload
            size={32}
            className={`mx-auto mb-4 ${
              selectedFile ? "text-green-500" : "text-gray-500"
            }`}
          />

          {selectedFile ? (
            <div>
              <p className="text-sm font-medium">{selectedFile.name}</p>
              <p className="text-xs text-gray-400 mt-1">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium">Drag & drop your PDF here</p>
              <p className="text-xs text-gray-400 mt-1">or</p>
              <label className="mt-3 inline-block px-4 py-2 bg-[#EFF2C0] text-[#080F0F] rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors">
                Browse Files
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-gray-500 mt-3">
                Supported format: PDF (max 10MB)
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleFAQUpload}
            disabled={!selectedFile}
            className={`px-4 py-2 rounded-lg ${
              !selectedFile
                ? "bg-gray-800 text-gray-500"
                : "bg-[#A52422] text-white hover:bg-opacity-90"
            } transition-colors`}
          >
            Upload & Train
          </button>
        </div>
      </div>
    </div>
  );
}
