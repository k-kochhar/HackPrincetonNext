"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../component/landing/Header";



export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello, ask any questions about this lecture!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [displayedTime, setDisplayedTime] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [transcriptLabel, setTranscriptLabel] = useState(""); // State to store the transcript label
  const [suggestionsVisible, setSuggestionsVisible] = useState(true); // To toggle visibility of suggestions

  const suggestions = ["Make me a quiz", "Summarize key points", "List vocabulary terms"];

  // Timer functionality
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
        setDisplayedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleSend = (messageText = input) => {
    if (messageText.trim()) {
      setMessages([...messages, { text: messageText, sender: "user" }]);
      setInput("");
      setSuggestionsVisible(false); // Hide suggestions after any message is sent
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setDisplayedTime(timer);
      setShowModal(true); // Show the modal when stopping the recording
    } else {
      setTimer(0);
      setDisplayedTime(0);
    }
    setIsRecording((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSubmit = () => {
    setShowModal(false); // Hide the modal after submission
    setTranscriptLabel(""); // Clear the label input
    setTimer(0); // Reset the timer
    setDisplayedTime(0); // Reset the displayed time
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-8 fade-in justify-between mb-8">
      {/* Navbar */}
        <Header />

      {/* Main Content */}
      <main className="flex justify-center gap-8 w-full max-w-[1200px]">
        {/* Left Side: Transcript Box */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[85%] h-[490px] p-4">
          <h2 className="text-black text-lg font-semibold mb-4">Live Transcript of your Recording</h2>
          <div className="text-black italic">Transcript will appear here...</div>
        </div>

        {/* Right Side: Chatbox */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[85%] h-[490px] flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"}`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Suggested Messages */}
            {suggestionsVisible && (
              <div className="space-y-2 mt-4">
                <h3 className="text-gray-500">Suggestions</h3>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(suggestion)}
                    className="block w-full text-left p-2 border border-dashed border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-500">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 rounded bg-gray-600 text-white focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) {
                    handleSend(input);
                  }
                }}
              />
              <button
                onClick={() => handleSend(input)}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Timer and Start/Stop Button */}
      <div className="mt-8 flex items-center space-x-4">
        <button
          onClick={toggleRecording}
          className={`px-4 py-2 rounded ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white font-semibold`}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        <div className="text-xl text-black font-semibold">{formatTime(displayedTime)}</div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg text-black font-semibold mb-4">Label Your Lecture Transcript</h2>
            <input
              type="text"
              placeholder="Enter lecture title..."
              className="w-full p-2 border rounded mb-4"
              value={transcriptLabel}
              onChange={(e) => setTranscriptLabel(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-700"
            >
              Submit to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
