import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen bg-[#64C8D8] text-white fade-in">
      {/* Background Layer */}
      

      {/* Top Navigation */}
      <header className="flex justify-between items-center mb-8 fixed top-10 left-14 z-10">
          <h1 className="text-2xl font-bold text-white">PigeonPost</h1>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-10 space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Experience our AI-Powered Lecture Tool
        </h1>
        <p className="text-lg text-gray-300">
          Have your questions answered by AI trained in real-time during lectures. 
          Receive podcasts, slideshows, and transcripts of lectures after each session and have them saved in your account.
        </p>
        <div className="flex space-x-4">
          <Link href="/chat" legacyBehavior>
            <a className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700">
              Start Chatting
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

      <div className="wave-bg"></div>
      <div className="wave-bg-1"></div>
    </div>
  );
}
