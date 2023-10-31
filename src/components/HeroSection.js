import React from 'react';

const HeroSection = () => {
  return (
    <div className="absolute top-[calc(50%_-_2060.5px)] lg:left-[calc(50%_-_432px)] lg:w-[863px] max-lg:w-[95%] max-lg:left-2 max-lg:right-1 h-[84px] text-9xl font-inter">
      <button
        onClick={() => {
          window.location.href =
            'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform';
        }}
        className="cursor-pointer [border:none] py-3 px-12 bg-gray absolute lg:top-[124px] max-lg:top-[89px] max-sm:top-[80px] left-[calc(50%_-_139.5px)] rounded-lg flex flex-row items-center justify-center "
      >
        <div className="relative text-5xl leading-[150.02%] font-medium font-sora text-whitesmoke-100 text-center">
          Join AI council
        </div>
      </button>
      <div className="absolute top-[0px] max-sm:top-[-50px] text-[24px] max-sm:leading-6 left-[calc(50%_-_431.5px)] leading-[150.02%] font-medium inline-block lg:w-[863px] max-lg:w-[95%] max-lg:left-2 max-lg:right-2">
        We are your leading authority in artificial intelligence innovations,
        fostering a vibrant AI ecosystem in India.
      </div>
      <h1
        className="m-0 absolute top-[-234px] max-sm:top-[-290px] left-[calc(50%_-_490.5px)] max-lg:w-[95%] max-lg:left-2 max-lg:right-2 text-[84px] max-lg:text-[64px] max-sm:text-[48px] amx-sm:leading-[64px] leading-[120%] font-extrabold font-sora inline-block w-[981px]"
        id="1"
      >
        Welcome to AI Council of India
      </h1>
    </div>
  );
};

export default HeroSection;
