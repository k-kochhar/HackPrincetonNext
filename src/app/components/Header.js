// components/Header.js
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mb-8">
      <div className="flex items-center space-x-6">
        <Image src="/pigeon.png" alt="PigeonPost" width={34} height={34} />
        <h1 className="text-2xl font-bold text-gray-700">PigeonPost</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href="/chat" className="text-black hover:underline">
            Lecture Recording + AI Tool
          </Link>
          <Link href="/dashboard" className="text-black hover:underline">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
