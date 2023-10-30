import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';

const CouncilActivitiesContainer = () => {
  return (
    <section className="absolute h-[9.75%] w-[82.15%] max-sm:w-[95%] top-[59.01%] right-[8.89%] max-sm:right-1 bottom-[31.25%] left-[8.96%] max-sm:left-1 flex flex-row flex-wrap items-center justify-center gap-[40px] text-center lg:text-37xl max-lg:text-[42px] text-gray font-sora">
      <h2 className="m-0 relative text-inherit leading-[150.02%] max-sm:leading-[24px] max-sm:text-[24px] font-extrabold font-inherit">
        Activities and Initiatives of the Council
      </h2>
      <div className="relative lg:w-[1183px]  h-[370px] text-left text-13xl max-lg:hidden">
        <div className="absolute top-[0px] left-[403px] rounded-xl bg-white box-border w-[380px] h-[370px] border-[2px] border-solid border-gray" />
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-[386px] h-[370px] border-[2px] border-solid border-gray" />
        <div className="absolute top-[0px] left-[803px] rounded-xl bg-white box-border w-[380px] h-[370px] border-[2px] border-solid border-gray" />
        <div className="absolute top-[32px] left-[calc(50%_-_564.5px)] font-extrabold inline-block w-[333px]">
          AI Conferences and Workshops
        </div>
        <div className="absolute top-[32px] left-[calc(50%_-_164.5px)] font-extrabold inline-block w-[333px]">
          Resources and Platform
        </div>
        <div className="absolute top-[32px] left-[calc(50%_+_235.5px)] font-extrabold inline-block w-[333px]">
          AI Competitions and Hackathons
        </div>
        <div className="absolute top-[128px] left-[calc(50%_-_564.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
          The council aims to organize and host various AI conferences and
          workshops to promote discourse and collaboration, and provide a
          platform for sharing the latest industry updates and research
          findings.
        </div>
        <div className="absolute top-[128px] left-[calc(50%_-_164.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
          The council will work with experts to provide resources and platforms
          for learning industrial application of AI to build capacity of the
          beneficiaries in organizations across India.
        </div>
        <div className="absolute top-[128px] left-[calc(50%_+_235.5px)] text-xl leading-[150.02%] font-medium font-inter inline-block w-[332px]">
          The council will partner with colleges and organizations to host
          AI-related competitions and hackathons to facilitate the development
          of innovative solutions in the field of AI.
        </div>
      </div>
      <div className="relative w-full text-left max-sm:block max-w-full overflow-x-auto lg:hidden py-2"  data-simplebar>
        <div className="flex">
          <div className="relative min-w-[333px] rounded-xl bg-white box-border h-[370px] border-[2px] border-solid border-gray mx-4">
            <div className="font-extrabold p-4 text-center text-[20px] leading-5">
              AI Conferences and Workshops
            </div>
            <div className="text-xl leading-[20px] font-medium font-inter p-4">
              The council aims to organize and host various AI conferences and
              workshops to promote discourse and collaboration, and provide a
              platform for sharing the latest industry updates and research
              findings.
            </div>
          </div>
          <div className="relative min-w-[333px] rounded-xl bg-white box-border h-[370px] border-[2px] border-solid border-gray mx-4">
            <div className="font-extrabold p-4 text-center text-[20px] leading-5">
              Resources and Platform
            </div>
            <div className="text-xl leading-[20px] font-medium font-inter p-4">
              The council will work with experts to provide resources and
              platforms for learning industrial application of AI to build
              capacity of the beneficiaries in organizations across India.
            </div>
          </div>
          <div className="relative min-w-[333px] rounded-xl bg-white box-border h-[370px] border-[2px] border-solid border-gray mx-4">
            <div className="font-extrabold p-4 text-center text-[20px] leading-5">
              AI Competitions and Hackathons
            </div>
            <div className="text-xl leading-[20px] font-medium font-inter p-4">
              The council will partner with colleges and organizations to host
              AI-related competitions and hackathons to facilitate the
              development of innovative solutions in the field of AI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouncilActivitiesContainer;
