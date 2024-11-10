import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeatureSection from './FeatureSection';
import TranscribeFeature from './TranscribeFeature';
import AdditionalFeatures from './AdditionalFeatures';
import StatisticsSection from './StatisticsSection';
import Footer from './Footer';

const PigeonPostApp = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-teal-300">
      <main className="flex overflow-hidden relative z-10 flex-col items-start px-14 pt-4 pb-9 w-full min-h-[1113px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c80f59f8af6389dffc0c8bd7f4717a1c210f66955b245e672c906fe3c3f3a758?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="" className="object-cover absolute inset-0 size-full" />
        <Header />
        <Hero />
        <h2 className="relative ml-4 text-3xl font-bold text-teal-300 mt-[472px] max-md:mt-10 max-md:max-w-full">
          A Safer Way to Ask for Help
        </h2>
      </main>

      <section className="flex flex-col px-16 pb-20 mt-0 w-full bg-white max-md:px-5 max-md:max-w-full">
        <FeatureSection
          title="Ask Questions In Context to Lecture"
          description="Don't let confusion linger. With our tailored chatbot, get instant answers specific to the lecture you're listening to. Our RAG based solution ensures the responses are accurate and contextually relevant—perfect for questions you might hesitate to ask in class."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ea802c0c5ded4c7f8a14d26dc82441aefeea0f5060be9e8ff67991a9d0a108?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d"
          imageAlt="Ask questions feature illustration"
        />
        <TranscribeFeature />
        <AdditionalFeatures />
      </section>

      <StatisticsSection />

      <Footer />
    </div>
  );
};

export default PigeonPostApp;