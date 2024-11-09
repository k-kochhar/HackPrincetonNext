// src/app/dashboard/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 fade-in">
      {/* Top Navigation */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-700">PigeonPost</h1>
          <nav className="flex space-x-4">
            <Link href="/" className="text-black hover:underline">Home</Link>
            <Link href="/dashboard" className="text-black hover:underline">Dashboard</Link>
            <Link href="/chat" className="text-black hover:underline">Lecture Recording + AI Tool</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          {/* Stats */}
          <div className="flex items-center space-x-1">
            <Image src="/path-to-your-dollar-icon.png" alt="dollar" width={24} height={24} />
            <span>500</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/path-to-your-fire-icon.png" alt="fire" width={24} height={24} />
            <span>10</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/path-to-your-level-icon.png" alt="level" width={24} height={24} />
            <span>2</span>
          </div>
          {/* Progress Bar */}
          <div className="relative w-32 h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-purple-500" style={{ width: '50%' }}></div>
          </div>
          {/* Profile Image */}
          <Image src="/path-to-your-profile-image.png" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex gap-8">
        {/* Left Column - Recent Lectures */}
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Lectures</h2>
          <div className="space-y-4">
            {/* Lecture Item */}
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Date: Nov 03, 2024</p>
                  <p className="text-gray-600">Time: 07:00pm</p>
                  <p className="text-gray-600">Location: Met Caf</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/path-to-star-icon.png" alt="star" width={24} height={24} />
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View Transcript</button>
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View as Slides</button>
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View as Podcast</button>
                  <Link href="/" className="text-gray-600 text-xl">→</Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/" className="text-blue-500 mt-4 inline-block">View All</Link>
        </section>

        {/* Right Column */}
        <aside className="w-1/3 space-y-8">
          {/* Reminders Section */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Reminders</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
                <p>Review Graph Theory</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
                <p>Complete Practice #12</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <p className="text-gray-400">New Task</p>
              </li>
            </ul>
          </div>

          {/* Latest News Section */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Latest News</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>+ $100 Completed lecture</span>
                <span className="text-sm text-gray-400">Nov 03, 2024</span>
              </li>
              <li className="flex items-center justify-between">
                <span>+ 🔥10 Staying Consistent!</span>
                <span className="text-sm text-gray-400">Nov 03, 2024</span>
              </li>
              <li className="flex items-center justify-between">
                <span>+ 2 Leveling Up</span>
                <span className="text-sm text-gray-400">Nov 01, 2024</span>
              </li>
            </ul>
          </div>

          {/* Hats Collected Section */}
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Hats Collected</h3>
              <div className="flex space-x-2">
                <Image src="/hat1.png" alt="Hat 1" width={24} height={24} />
                <Image src="/hat2.png" alt="Hat 2" width={24} height={24} />
                <Image src="/hat3.png" alt="Hat 3" width={24} height={24} />
                <Image src="/hat4.png" alt="Hat 4" width={24} height={24} />
                <Image src="/hat5.png" alt="Hat 5" width={24} height={24} className="opacity-50" />
              </div>
            </div>
            <Link href="/" className="text-blue-500">View All</Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
