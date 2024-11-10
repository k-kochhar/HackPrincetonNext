// src/app/dashboard/page.js
import Image from 'next/image';
import Link from 'next/link';
import Header from "../component/landing/Header";



export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 fade-in">
      {/* Top Navigation */}
      <header className="flex relative flex-col items-start px-14 pt-4 pb-10 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <Header />
        <div className="flex items-center space-x-6">
          {/* Stats */}
          <div className="flex pl-8 items-center space-x-1">
            <Image src="/coin.png" alt="dollar" width={24} height={24} />
            <span className="text-black">500</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/fire.png" alt="fire" width={24} height={24} />
            <span className="text-black">10</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/step.png" alt="level" width={24} height={24} />
            <span className="text-black">2</span>
          </div>
          {/* Progress Bar */}
          <div className="relative w-32 h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-purple-500" style={{ width: '50%' }}></div>
          </div>
          {/* Profile Image */}
          <Image src="/profile_pic.png" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex gap-8 mt-4 w-full max-w-[1200px] mx-auto">
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
                  <Image src="/location_on.png" alt="star" width={24} height={24} />
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View Transcript</button>
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View as Slides</button>
                  <button className="bg-blue-200 text-blue-700 py-1 px-3 rounded">View as Podcast</button>
                  {/* <Link href="/" className="text-gray-600 text-xl"></Link> */}
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
                <p className="text-black">Review Graph Theory</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
                <p className="text-black">Complete Practice #12</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <p className="text-black">New Task</p>
              </li>
            </ul>
          </div>

          {/* Latest News Section */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-black">Latest News</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-black">+ $100 Completed lecture</span>
                <span className="text-sm text-black">Nov 03, 2024</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-black">+ 🔥10 Staying Consistent!</span>
                <span className="text-sm text-black">Nov 03, 2024</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-black">+ 2 Leveling Up</span>
                <span className="text-sm text-black">Nov 01, 2024</span>
              </li>
            </ul>
          </div>

          {/* Hats Collected Section */}
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Hats Collected</h3>
              <div className="flex space-x-2 text-black">
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
