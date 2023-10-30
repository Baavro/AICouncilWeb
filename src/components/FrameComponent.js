const FrameComponent = () => {
  return (
    <section className="absolute h-[4.18%] w-[81.94%] top-[91.16%] right-[9.03%] bottom-[4.66%] left-[9.03%] flex flex-col items-center justify-start gap-[32px] text-center text-37xl text-gray font-sora" id="contact">
      <h2 className="m-0 relative text-inherit max-sm:text-[42px] leading-[150.02%] max-sm:leading-[42px] font-extrabold font-inherit">
        Contact Us
      </h2>
      <div className="flex flex-col items-center justify-start gap-[12px] max-sm:gap-1 text-9xl max-sm:text-xl font-inter">
        <div className="relative leading-[150.02%] max-sm:leading-[32px] font-medium inline-block w-[1180px] max-sm:w-full text-center">
          Have questions or wish to collaborate with us? Reach us to
        </div>
        <div className="flex flex-row items-end justify-start gap-[8px]">
          <img
            className="relative w-9 h-9 overflow-hidden shrink-0"
            alt=""
            src="/majesticonsmailline.svg"
          />
          <a href="">
            <b className="relative [text-decoration:underline] leading-[150.02%]">
              contact@ai-council.in
            </b>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
