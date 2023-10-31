import React from 'react';

function Footer() {
  return (
    <section className="absolute h-[2.76%] w-[100.14%] max-sm:w-full top-[97.24%] right-[-0.07%] bottom-[0%] left-[-0.07%] bg-gray md:text-left lg:text-5xl max-sm:text-lg text-white font-sora text-center flex justify-center items-center">
      <div className="absolute top-[50px] font-semibold flex flex-col items-center text-center space-y-2">
        <span className="text-[14px] md:text-xl">
          © 2023 All India Artificial Intelligence Council.
        </span>{' '}
        <span className="max-md:text-[20px] md:text-xl">
          All rights reserved.
        </span>
      </div>
    </section>
  );
}

export default Footer;
