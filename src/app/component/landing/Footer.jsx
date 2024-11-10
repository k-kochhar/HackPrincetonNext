import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative mt-52 ml-8 max-md:mt-10 max-md:ml-2.5">
      <h1 className="text-3xl font-bold text-white">
        Learn Your Way, Your Pace
      </h1>
      <p className="mt-6 text-xl leading-7 text-white w-[437px] max-md:max-w-full">
        Traditional lecture formats don't work for everyone. We help students, including those with learning accommodations build personalized learning habits and thrive in lecture settings at their own pace.
      </p>
      <Link href="/get-started" passHref>
        <a className="flex relative gap-2.5 justify-center items-center py-4 pr-6 pl-6 mt-6 text-base font-bold text-white bg-red-400 rounded-xl max-md:px-5 inline-block">
          <span className="flex relative flex-col self-stretch my-auto aspect-[6.15] w-[123px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7332e099-ec10-4bf8-925f-88c2999352e8?placeholderIfAbsent=true&apiKey=75bb59ec28f84040912d0d307b0ae79d"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            Get Started
          </span>
        </a>
      </Link>
    </section>
  );
};

export default Hero;
