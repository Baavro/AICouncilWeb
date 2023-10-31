import React from 'react';

const RegisterForAIC = () => {
  return (
    <section className="absolute h-[8.13%] lg:w-[82.36%] max-sm:w-[95%] max-lg:w-[90%] top-[81.18%] max-lg:right-[4.82%] lg:right-[8.82%] max-sm:right-[2.82%] max-lg:left-[4.82%] bottom-[10.69%] lg:left-[8.82%] max-sm:left-[2.82%] text-center lg:text-37xl max-lg:text-[42px] text-gray font-sora">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightgray box-border lg:w-[1186px] max-lg:w-full max-sm:w-full h-[412px] border-[2px] border-solid border-gray">
        <div className="absolute top-[64px] md:left-[calc(50%_-_364px)] flex flex-col items-center justify-start max-sm:justify-center gap-[40px]">
          <div className="flex flex-col items-center justify-start max-sm:justify-center gap-[16px]">
            <h2 className="m-0 relative text-inherit max-sm:text-xl leading-[150.02%] max-sm:leading-[42px] font-extrabold font-inherit">
              Register for AI Council
            </h2>
            <div className="relative lg:text-9xl max-lg:text-[28px] leading-[150.02%] max-sm:leading-[32px] max-sm:text-lg max-sm:w-[90%] text-center font-medium font-inter inline-block lg:w-[727px] max-lg:w-[90%]">
              Join the AI Council for sponsorships and partnering with leading
              companies under the guidance of IITian
            </div>
          </div>
          <button
            onClick={() => {
              window.location.href =
                'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform';
            }}
            className="cursor-pointer border-none py-3 px-12 bg-gray rounded-lg flex flex-row items-center justify-center"
          >
            <div className="relative text-5xl leading-[150.02%] font-medium font-sora text-whitesmoke-100 text-center">
              Register now
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterForAIC;
