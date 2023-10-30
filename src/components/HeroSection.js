import React from 'react';

const HeroSection = () => {
  return (
    <div className="absolute top-[calc(50%_-_2060.5px)] left-[calc(50%_-_432px)] w-[863px] max-sm:w-[95%] max-sm:left-2 max-sm:right-1 h-[84px] text-9xl font-inter">
      <button
        onClick={() => {
          window.location.href =
            'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform';
        }}
        className="cursor-pointer [border:none] py-3 px-12 bg-gray absolute top-[124px] max-sm:top-[80px] left-[calc(50%_-_139.5px)] rounded-lg flex flex-row items-center justify-center "
      >
        <div className="relative text-5xl leading-[150.02%] font-medium font-sora text-whitesmoke-100 text-center">
          Join AI council
        </div>
      </button>
      <div className="absolute top-[0px] max-sm:top-[-50px] text-[24px] max-sm:leading-6 left-[calc(50%_-_431.5px)] leading-[150.02%] font-medium inline-block w-[863px]  max-sm:w-[95%] max-sm:left-2 max-sm:right-2">
        We are your leading authority in artificial intelligence innovations,
        fostering a vibrant AI ecosystem in India.
      </div>
      <h1
        className="m-0 absolute top-[-234px] max-sm:top-[-290px] left-[calc(50%_-_490.5px)] max-sm:w-[95%] max-sm:left-2 max-sm:right-2 text-[84px] max-sm:text-[48px] amx-sm:leading-[64px] leading-[120%] font-extrabold font-sora inline-block w-[981px]"
        id="1"
      >
        Welcome to AI Council of India
      </h1>
    </div>
  );
};

export default HeroSection;
