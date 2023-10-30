import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import CardContainer from './CardContainer';

const AICouncilContainer = () => {
  return (
    <section
      className="absolute h-[7.95%] border-red-400 w-[81.94%] max-sm:w-[95%] top-[47.43%] right-[9.03%] max-sm:right-1 max-sm:left-2 bottom-[44.62%] left-[9.03%] flex flex-col items-center justify-start gap-[40px] text-center lg:text-37xl max-lg:text-[42px] text-gray font-sora"
      id="team"
    >
      <h2 className="m-0 relative text-inherit leading-[150.02%] max-sm:leading-[42px] max-sm:text-[24px] font-extrabold font-inherit">
        Heads of AI Council
      </h2>
      <div className="w-[1180px] flex flex-row flex-wrap items-center justify-center gap-[45px] text-13xl max-lg:hidden">
        <CardContainer
          ellipse1539="/ellipse-1539@2x.png"
          sankalpPatidar="Sankalp Patidar"
          iITKharagpurPresident="IIT Kharagpur"
          linkedIn="https://www.linkedin.com/in/sankalp-patidar-08ba2920a/"
        />
        <CardContainer
          ellipse1539="/ellipse-1540@2x.png"
          sankalpPatidar="Viren Inaniyan"
          iITKharagpurPresident="IIT Bombay"
          linkedIn="https://www.linkedin.com/in/viren-inaniyan-959897187/"
          propWidth="291px"
          propWidth1="379px"
        />
        <CardContainer
          ellipse1539="/ellipse-1541@2x.png"
          sankalpPatidar="Sparsh Agrawal"
          iITKharagpurPresident="IIT (BHU) Varanasi"
          linkedIn="https://www.linkedin.com/in/sparsh-agrawal17/"
          propWidth="291px"
          propWidth1="unset"
        />
      </div>
      <div
        className="relative w-full h-min text-left max-sm:block max-w-full overflow-y-hidden overflow-x-auto lg:hidden py-2"
        data-simplebar
      >
        <div className="flex">
          <CardContainer
            ellipse1539="/ellipse-1539@2x.png"
            sankalpPatidar="Sankalp Patidar"
            iITKharagpurPresident="IIT Kharagpur"
            linkedIn="https://www.linkedin.com/in/sankalp-patidar-08ba2920a/"
          />
          <CardContainer
            ellipse1539="/ellipse-1540@2x.png"
            sankalpPatidar="Viren Inaniyan"
            iITKharagpurPresident="IIT Bombay"
            linkedIn="https://www.linkedin.com/in/viren-inaniyan-959897187/"
            propWidth="291px"
            propWidth1="379px"
          />
          <CardContainer
            ellipse1539="/ellipse-1541@2x.png"
            sankalpPatidar="Sparsh Agrawal"
            iITKharagpurPresident="IIT (BHU) Varanasi"
            linkedIn="https://www.linkedin.com/in/sparsh-agrawal17/"
            propWidth="291px"
            propWidth1="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default AICouncilContainer;
