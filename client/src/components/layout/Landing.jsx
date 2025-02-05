import React, { useState } from "react";

const LandingPage = () => {
  // State for user input
  const [userInput, setUserInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle text input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("Selected File:", e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", userInput);
    // Add your logic here to handle the input and file
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-gray-100 p-4">
      {/* Greeting Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Our Landing Page!
      </h1>

      {/* Integrated Input Box */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-2 rounded-lg shadow-md w-[60%] flex items-center border border-gray-300 focus-within:border-blue-500"
      >
        {/* Text Input */}
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="flex-1 px-4 py-2 outline-none border-none"
          required
        />

        {/* File Input (Hidden) with SVG Icon */}
        <label htmlFor="fileInput" className="cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
