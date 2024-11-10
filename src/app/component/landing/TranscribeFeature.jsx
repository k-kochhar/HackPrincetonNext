import React from 'react';

const TranscribeFeature = () => {
  return (
    <section className="mt-0 w-full max-w-[1316px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:w-full">
          <div className="flex flex-col items-start mt-14 mr-0 w-full text-3xl max-md:mt-10 max-md:max-w-full">
            <h2 className="self-stretch font-bold text-teal-300 max-md:max-w-full">
              Transcribe Your Lectures In Real Time Into
            </h2>
            <div className="flex gap-10 mt-11 max-md:mt-10">
              <div className="px-4 w-11 h-11 text-white whitespace-nowrap bg-cyan-700 rounded-full flex items-center justify-center">
                1
              </div>
              <h3 className="flex-auto my-auto font-bold text-cyan-700">
                Practice Questions
              </h3>
            </div>
            <p className="mt-8 text-xl leading-7 text-stone-700 w-[437px] max-md:max-w-full">
              Tailored practice questions that reinforce and challenge your understanding for higher performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab6f5afa12c6612d44c342e502bef7a201c8d06fb4a092057d273d6827c86bc?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="Transcribe feature illustration" className="object-contain grow w-full aspect-[1.5] max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default TranscribeFeature;