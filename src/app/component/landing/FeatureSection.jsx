import React from 'react';

const FeatureSection = ({ title, description, imageSrc, imageAlt, reverse = false }) => {
  return (
    <section className={`flex gap-5 ${reverse ? 'flex-row-reverse' : ''} max-md:flex-col`}>
      <div className={`flex flex-col ${reverse ? 'w-[61%]' : 'w-[39%]'} max-md:w-full`}>
        <div className="flex flex-col mt-16 mr-0 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-bold text-cyan-700 max-md:max-w-full">{title}</h2>
          <p className="mt-6 text-xl leading-7 text-stone-700 w-[437px] max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
      <div className={`flex flex-col ${reverse ? 'w-[39%]' : 'w-[61%]'} max-md:w-full`}>
        <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain grow w-full aspect-[1.42] max-md:max-w-full" />
      </div>
    </section>
  );
};

export default FeatureSection;