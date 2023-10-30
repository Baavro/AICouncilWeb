import React from 'react';

const AboutUsCard = () => {
  return (
    <section className="absolute h-[1.66%] w-[18.26%] max-sm:w-[95%] top-[20.2%] max-sm:right-1 max-sm:left-2 right-[40.83%] bottom-[78.14%] left-[40.9%]" id="about">
      <h2 className="m-0 absolute max-sm:w-full text-center top-[0px] md:left-[calc(50%_-_131.5px)] text-inherit max-sm:text-[24px] max-sm:leading-[20px] leading-[150.02%] font-extrabold font-inherit">
        About us
      </h2>
      <div className="absolute top-[116px] max-sm:top-8 max-sm:left-0 left-[calc(50%_-_590.5px)] max-sm:text-[16px] max-sm:leading-2 text-9xl leading-[150.02%] font-medium font-inter inline-block w-[1181px] max-sm:w-full">
        The All India Artificial Intelligence Council is a collaborative
        agglomerate of Artificial intelligence organisations of colleges, with
        select IITs at the helm. We foster a culture of innovation and
        exploration in the field of AI, driving research and development
        initiatives across the country.
      </div>
    </section>
  );
};

export default AboutUsCard;
