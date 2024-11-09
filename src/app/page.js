// src/app/home/page.js
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen bg-gray-900 text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Blur Images */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 opacity-25 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-10 space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Experience our AI-Powered Chatbot
        </h1>
        <p className="text-lg text-gray-300">
          Have your questions answered by AI trained in real-time during lectures. 
          Receive podcasts, slideshows, and transcripts of lectures after each session.
        </p>
        <div className="flex space-x-4">
          <Link href="/chat" legacyBehavior>
            <a className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700">
              Start Chatting
            </a>
          </Link>
          <Link href="/learn-more" legacyBehavior>
            <a className="px-6 py-3 border border-white rounded-full text-white hover:bg-gray-800">
              Learn More
            </a>
          </Link>
        </div>
      </div>

      {/* Right Section: Chatbot Sneak Peek */}
      <div className="relative hidden md:flex flex-1 justify-center items-center p-10">
        <Image
          src="/chatbot-preview.png" // Replace with your actual chatbot image path
          alt="Chatbot Sneak Peek"
          width={400}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
