import FrameComponent from '../components/FrameComponent';
import FrameComponent1 from '../components/FrameComponent1';
import CouncilActivitiesContainer from '../components/CouncilActivitiesContainer';
import AICouncilContainer from '../components/AICouncilContainer';
import JoinCommunityCard from '../components/JoinCommunityCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForAIC from '../components/RegisterForAIC';
import AICObjective from '../components/AICObjective';
import AboutUsCard from '../components/AboutUsCard';
import HeroSection from '../components/HeroSection';

const AICLandingPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 h-[5069px] overflow-hidden text-center text-37xl text-gray font-sora">
      <img
        className="absolute w-[calc(100%_-_954px)] top-[0px] right-[0px] left-[954px] max-w-full overflow-hidden h-[862.62px] object-cover opacity-[0.7] max-sm:hidden"
        alt=""
        src="/bggradientimg@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_980.62px)] top-[81px] right-[980.62px] left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6] max-sm:hidden"
        alt=""
        src="/bggradientimg1@2x.png"
      />
      <div className="md:hidden">
        <img
          className="absolute w-[calc(100%_-_154px)] top-[0px] right-[0px]  max-w-full overflow-hidden h-[862.62px] object-cover opacity-[0.7]"
          alt=""
          src="/bggradientimg@2x.png"
        />
        <img
          className="absolute w-[calc(100%_-_220.62px)] top-[81px] left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6]"
          alt=""
          src="/bggradientimg1@2x.png"
        />
      </div>
      <img
        className="absolute w-[calc(100%_-_943px)] top-[3984px] right-[0px] left-[943px] max-w-full overflow-hidden h-[1009.46px] object-cover opacity-[0.6] max-sm:hidden"
        alt=""
        src="/bggradientimg2@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_953.62px)] top-[2968px] right-[953.62px] left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6] max-sm:hidden"
        alt=""
        src="/bggradientimg3@2x.png"
      />
      <div className="md:hidden">
        <img
          className="absolute w-[calc(100%_-_143px)] top-[3984px] right-[0px]  max-w-full overflow-hidden h-[1009.46px] object-cover opacity-[0.6]"
          alt=""
          src="/bggradientimg2@2x.png"
        />
        <img
          className="absolute w-[calc(100%_-_153.62px)] top-[2968px]  left-[0px] max-w-full overflow-hidden h-[1015.6px] object-cover opacity-[0.6]"
          alt=""
          src="/bggradientimg3@2x.png"
        />
      </div>
      <Footer />
      {/* Contact Us */}
      <FrameComponent />
      <RegisterForAIC />
      {/* Benefits for AI Council */}
      <FrameComponent1 />
      <CouncilActivitiesContainer />
      {/** Leads of AIC */}
      <AICouncilContainer />
      <AICObjective />
      <AboutUsCard />
      <JoinCommunityCard />
      <HeroSection />
      <Header />
    </div>
  );
};

export default AICLandingPage;
