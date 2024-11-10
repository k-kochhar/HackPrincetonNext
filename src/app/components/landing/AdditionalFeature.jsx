import React from 'react';

const FeatureItem = ({ number, title, description }) => (
  <div className="flex flex-col w-full">
    <div className="flex gap-10 self-start">
      <div className="px-3 w-11 h-11 text-white whitespace-nowrap bg-cyan-700 rounded-full flex items-center justify-center">
        {number}
      </div>
      <h3 className="flex-auto my-auto font-bold text-cyan-700">{title}</h3>
    </div>
    <p className="mt-8 text-xl leading-7 text-stone-700 max-md:max-w-full">
      {description}
    </p>
  </div>
);

const AdditionalFeatures = () => {
  return (
    <section className="mt-20 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:w-full">
          <div className="flex flex-col mt-1.5 w-full text-3xl max-md:mt-9 max-md:max-w-full">
            <FeatureItem
              number="2"
              title="Podcasts On The Go"
              description="On your way to your next class, pop in an earbud and replay your last lecture while it's still fresh in your mind."
            />
            <div className="mt-44 max-md:mt-10">
              <FeatureItem
                number="3"
                title="Slides For What Matters"
                description="Tired of cluttered, outdated slides? Our concise, visually appealing summaries distill key points, making it easier to grasp and review the essentials."
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/585ccc2ed0aa5880941f645f522ebed3587c0e07440b69dac74060ea52dd6325?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="Podcast feature illustration" className="object-contain self-end max-w-full aspect-[3.62] w-[735px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d9376256e545e96645b70ae6fba478392a24018568c96f21c0d46bff54ab?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d" alt="Slides feature illustration" className="object-contain mt-36 max-w-full aspect-[2.04] w-[756px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;