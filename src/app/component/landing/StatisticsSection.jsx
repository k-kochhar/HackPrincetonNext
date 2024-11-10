import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-20 w-full min-h-[1367px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/322c6a6b06577abfb322b8f71de9b5ed5417f2bb6b3fe0973afa19d53fa2eba1?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col w-full max-w-[1283px] max-md:max-w-full">
        <div className="flex flex-col px-4 w-full max-md:max-w-full">
          <h2 className="text-5xl text-white leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
            "First time freshmen have a 12-month dropout rate of 23.3%"
          </h2>
          <p className="self-start mt-4 text-xl font-light text-white">
            Education Data Initiative 2024
          </p>
          <p className="mt-11 text-3xl leading-10 text-white max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            Passive, lecture-based learning in higher education isn't effective for everyone, especially students with learning disabilities.
          </p>
          <div className="mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[42%] max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28889a609d3bb849501da2965e7029961b6dc39052f327d8f70770cf5a86dad?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="Statistics illustration" className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full" />
              </div>
              <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto text-xl font-light text-white max-md:mt-10 max-md:max-w-full">
                  <p><strong>Unmet Learning Needs:</strong> 26% of students drop out Due to Academic Challenges</p>
                  <p><strong>Learning Barriers:</strong> Students with ADHD, dyslexia, and other challenges struggle with traditional teaching methods.</p>
                  <p><strong>Engagement Gap:</strong> Passive learning leads to lower engagement and comprehension, impacting academic success.</p>
                  <p><strong>Lost Social Capital:</strong> Without support, students can't reach their full potential, limiting future opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;