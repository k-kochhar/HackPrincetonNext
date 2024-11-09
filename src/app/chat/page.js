// src/app/chat/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with during this recording?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); // Clear the input field after sending
      // here, you would also handle sending the message to the AI or backend
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center bg-white justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-black font-[family-name:var(--font-geist-sans)] fade-in">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Blur Images */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 opacity-25 rounded-full blur-3xl"></div>
      </div>
      
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
      {/* / */}


        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </header>
      
      <div className="fixed top-4 left-4">
        <header>
          <Link href="/" passHref>
            {/* <Image
              src="/fox.jpg"
              alt="Home Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            /> */}
            EchoAI
          </Link>
        </header>
      </div>

      <main className="flex-1 pt-20 pl-20 flex flex-col items-center justify-center">
      <div className="flex space-x-4 pb-6">
        <h1 className="text-xl">Start Recording</h1>
        <h1 className="text-xl">Stop Recording</h1>
      </div>
        
            <div className="relative z-10">
                <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md flex flex-col h-[500px] overflow-hidden">
                {/* Chat Window */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                        className={`p-3 rounded-lg ${
                            message.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                        >
                        {message.text}
                        </div>
                    </div>
                    ))}
                </div>
                {/* Input Area */}
                <div className="p-4 bg-gray-700">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}