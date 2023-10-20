import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import CouncilActivitiesContainer from "../components/CouncilActivitiesContainer";
import AICouncilContainer from "../components/AICouncilContainer";
import JoinCommunityCard from "../components/JoinCommunityCard";
import Header from "../components/Header";

const AICLandingPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[5069px] overflow-hidden text-center text-37xl text-gray font-sora">
      <img
        className="absolute w-[calc(100%_-_954px)] top-[0px] right-[0px] left-[954px] max-w-full overflow-hidden h-[862.62px] object-cover opacity-[0.7]"
        alt=""
        src="/bggradientimg@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_980.62px)] top-[81px] right-[980.62px] left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6]"
        alt=""
        src="/bggradientimg1@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_943px)] top-[3984px] right-[0px] left-[943px] max-w-full overflow-hidden h-[1009.46px] object-cover opacity-[0.6]"
        alt=""
        src="/bggradientimg2@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_953.62px)] top-[2968px] right-[953.62px] left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6]"
        alt=""
        src="/bggradientimg3@2x.png"
      />
      <section className="absolute h-[2.76%] w-[100.14%] top-[97.24%] right-[-0.07%] bottom-[0%] left-[-0.07%] bg-gray text-left text-5xl text-white font-sora">
        <div className="absolute top-[50px] left-[calc(50%_-_401px)] font-semibold">
          © 2023 All India Artificial Intelligence Council. All rights reserved.
        </div>
      </section>
      <FrameComponent />
      <section className="absolute h-[8.13%] w-[82.36%] top-[81.18%] right-[8.82%] bottom-[10.69%] left-[8.82%] text-center text-37xl text-gray font-sora">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightgray box-border w-[1186px] h-[412px] border-[2px] border-solid border-gray">
          <div className="absolute top-[64px] left-[calc(50%_-_364px)] flex flex-col items-center justify-start gap-[40px]">
            <div className="flex flex-col items-center justify-start gap-[16px]">
              <h2 className="m-0 relative text-inherit leading-[150.02%] font-extrabold font-inherit">
                Register for AI Council
              </h2>
              <div className="relative text-9xl leading-[150.02%] font-medium font-inter inline-block w-[727px]">
                Join the AI Council for sponsorships and partnering with leading
                companies under the guidance of IITian
              </div>
            </div>
            <button 
      onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform'; }} 
      className="cursor-pointer border-none py-3 px-12 bg-gray rounded-lg flex flex-row items-center justify-center"
    >
      <div className="relative text-5xl leading-[150.02%] font-medium font-sora text-whitesmoke-100 text-center">
        Register now
      </div>
    </button>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <CouncilActivitiesContainer />
      <AICouncilContainer />
      <section className="absolute top-[calc(50%_-_1042.5px)] left-[calc(50%_-_719.5px)] bg-gray flex flex-col items-center justify-start p-32 gap-[48px] text-center text-37xl text-white font-sora">
        <h2 className="m-0 relative text-inherit leading-[150.02%] font-extrabold font-inherit">
          Our objective
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center text-left text-13xl">
          <div className="relative w-[1183px] h-[340px]">
            <div className="absolute h-full w-[32.12%] top-[0%] right-[0%] bottom-[0%] left-[67.88%]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 w-[380px] h-[340px]" />
              <div className="absolute top-[32px] left-[calc(50%_-_166px)] font-extrabold inline-block w-[332px]">
                Support AI education
              </div>
              <div className="absolute top-[128px] left-[calc(50%_-_166px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
                The council will develop curricula for AI education programs in
                collaboration with leading institutions and organizations to
                develop AI workforce ready for the exciting future of AI.
              </div>
            </div>
            <div className="absolute h-full w-[32.63%] top-[0%] right-[67.37%] bottom-[0%] left-[0%]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 w-[386px] h-[340px]" />
              <div className="absolute top-[32px] left-[calc(50%_-_169px)] font-extrabold inline-block w-[333px]">
                Promote AI research
              </div>
              <div className="absolute top-[128px] left-[calc(50%_-_169px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
                The council aims to foster a culture of innovation and
                exploration in the field of AI, driving research and development
                initiatives across the country.
              </div>
            </div>
            <div className="absolute h-full w-[32.12%] top-[0%] right-[33.81%] bottom-[0%] left-[34.07%]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 w-[380px] h-[340px]" />
              <div className="absolute top-[32px] left-[calc(50%_-_166px)] font-extrabold inline-block w-[333px]">
                Develop AI applications
              </div>
              <div className="absolute top-[128px] left-[calc(50%_-_166px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
                The council will collaborate with industry leaders to develop
                innovative AI applications and use cases that benefit society
                and provide economic advantages to India.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute h-[14.36%] w-[100.14%] top-[29.43%] right-[-0.07%] bottom-[56.2%] left-[-0.07%] bg-gray text-center text-37xl text-white font-sora">
        <h2 className="m-0 absolute top-[128px] left-[calc(50%_-_182px)] text-inherit leading-[150.02%] font-extrabold font-inherit">
          Our objective
        </h2>
        <div className="absolute top-[260px] left-[131px] w-[1183px] h-[340px] text-left text-13xl">
          <div className="absolute top-[0px] left-[403px] rounded-xl bg-whitesmoke-200 w-[380px] h-[340px]" />
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke-200 w-[386px] h-[340px]" />
          <div className="absolute top-[0px] left-[803px] rounded-xl bg-whitesmoke-200 w-[380px] h-[340px]" />
          <div className="absolute top-[32px] left-[calc(50%_-_567.5px)] font-extrabold inline-block w-[333px]">
            Promote AI research
          </div>
          <div className="absolute top-[32px] left-[calc(50%_-_164.5px)] font-extrabold inline-block w-[333px]">
            Develop AI applications
          </div>
          <div className="absolute top-[32px] left-[calc(50%_+_235.5px)] font-extrabold inline-block w-[332px]">
            Support AI education
          </div>
          <div className="absolute top-[128px] left-[calc(50%_-_567.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
            The council aims to foster a culture of innovation and exploration
            in the field of AI, driving research and development initiatives
            across the country.
          </div>
          <div className="absolute top-[128px] left-[calc(50%_-_164.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
            The council will collaborate with industry leaders to develop
            innovative AI applications and use cases that benefit society and
            provide economic advantages to India.
          </div>
          <div className="absolute top-[128px] left-[calc(50%_+_235.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
            The council will develop curricula for AI education programs in
            collaboration with leading institutions and organizations to develop
            AI workforce ready for the exciting future of AI.
          </div>
        </div>
      </section>
      <div className="absolute h-[1.66%] w-[18.26%] top-[20.2%] right-[40.83%] bottom-[78.14%] left-[40.9%]">
        <h2 className="m-0 absolute top-[0px] left-[calc(50%_-_131.5px)] text-inherit leading-[150.02%] font-extrabold font-inherit">
          About us
        </h2>
        <div className="absolute top-[116px] left-[calc(50%_-_590.5px)] text-9xl leading-[150.02%] font-medium font-inter inline-block w-[1181px]">
          The All India Artificial Intelligence Council is a collaborative
          agglomerate of Artificial intelligence organisations of colleges, with
          select IITs at the helm. We foster a culture of innovation and
          exploration in the field of AI, driving research and development
          initiatives across the country.
        </div>
      </div>
      <JoinCommunityCard />
      <div className="absolute top-[calc(50%_-_2060.5px)] left-[calc(50%_-_432px)] w-[863px] h-[84px] text-9xl font-inter">
        <button className="cursor-pointer [border:none] py-3 px-12 bg-gray absolute top-[124px] left-[calc(50%_-_139.5px)] rounded-lg flex flex-row items-center justify-center">
          <div className="relative text-5xl leading-[150.02%] font-medium font-sora text-whitesmoke-100 text-center">
            Join AI council
          </div>
        </button>
        <div className="absolute top-[0px] left-[calc(50%_-_431.5px)] leading-[150.02%] font-medium inline-block w-[863px]">
          We are your leading authority in artificial intelligence innovations,
          fostering a vibrant AI ecosystem in India.
        </div>
        <h1
          className="m-0 absolute top-[-234px] left-[calc(50%_-_490.5px)] text-[84px] leading-[120%] font-extrabold font-sora inline-block w-[981px]"
          id="1"
        >
          Welcome to AI Council of India
        </h1>
      </div>
      <Header />
    </div>
  );
};

export default AICLandingPage;
