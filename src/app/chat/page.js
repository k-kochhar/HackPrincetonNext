"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello, ask any questions about this lecture!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [displayedTime, setDisplayedTime] = useState(0);

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

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setDisplayedTime(timer);
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

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-8 fade-in">
      {/* Navbar */}
      <header className="flex justify-between items-center w-full mb-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-700">PigeonPost</h1>
          <nav className="flex space-x-4">
            <Link href="/" className="text-black hover:underline">Home</Link>
            <Link href="/dashboard" className="text-black hover:underline">Dashboard</Link>
            <Link href="/chat" className="text-black hover:underline">Lecture Recording + AI Tool</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center gap-8 w-full max-w-[1200px]">
        {/* Left Side: Transcript Box */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[45%] h-[500px] p-4">
          <h2 className="text-lg font-semibold mb-4">Live Transcript of your Recording</h2>
          <div className="text-gray-700 italic">Transcript will appear here...</div>
        </div>

        {/* Right Side: Chatbox */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[45%] h-[500px] flex flex-col">
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
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
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
        <div className="text-xl font-semibold">{formatTime(displayedTime)}</div>
      </div>
    </div>
  );
}
