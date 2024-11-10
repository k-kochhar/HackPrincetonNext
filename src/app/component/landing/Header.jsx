import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full z-10">
      <div className="flex flex-wrap gap-9 whitespace-nowrap text-stone-800">
        <div className="flex gap-1.5 text-lg font-extrabold">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/226ee1c9e59ae72f3b544e5043ffbd0e25e3d8f85a98d94280ad60327e8f7016?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d"
            alt="PigeonPost logo"
            className="object-contain shrink-0 rounded-none aspect-[1.07] w-[65px]"
          />
          <div className="my-auto basis-auto">PigeonPost</div>
        </div>
        <nav className="flex flex-auto gap-10 my-auto text-xl font-light">
          <Link href="/home">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/lecture">Lecture</Link>
        </nav>
      </div>
      <div className="flex gap-6 self-start mt-2 text-base">
        <Link href="/" className="gap-2.5 self-stretch px-6 py-4 whitespace-nowrap bg-white rounded-xl text-stone-900 max-md:px-5">
          Login
        </Link>
        <Link href="/lecture" className="gap-2.5 self-stretch px-6 py-4 pr-2500 text-white bg-cyan-700 rounded-xl max-md:px-5">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
