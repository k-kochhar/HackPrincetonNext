import React from 'react';
import Header from '../component/landing/Header';
import HeroSection from '../component/landing/Hero';

const PigeonPostPage = () => {
  return (
    <main className="flex flex-col items-start w-full min-h-screen px-14 pt-4 pb-24 max-md:px-5 max-md:pb-24 max-md:max-w-full overflow-y-auto">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0209fbb729827ad9dd560299073ea2c41d0f714574a6339461aa52de2bd85d7?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="" className="object-cover absolute inset-0 w-full h-full z-0" />


        <Header />
      <HeroSection />
    </main>
  );
};

export default PigeonPostPage;


