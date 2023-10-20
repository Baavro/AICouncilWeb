import CardContainer from "./CardContainer";

const AICouncilContainer = () => {
  return (
    <section className="absolute h-[7.95%] w-[81.94%] top-[47.43%] right-[9.03%] bottom-[44.62%] left-[9.03%] flex flex-col items-center justify-start gap-[40px] text-center text-37xl text-gray font-sora">
      <h2 className="m-0 relative text-inherit leading-[150.02%] font-extrabold font-inherit">
        Heads of AI Council
      </h2>
      <div className="w-[1180px] flex flex-row flex-wrap items-center justify-center gap-[45px] text-13xl">
        <CardContainer
          ellipse1539="/ellipse-1539@2x.png"
          sankalpPatidar="Sankalp Patidar"
          iITKharagpurPresident="IIT Kharagpur - President"
        />
        <CardContainer
          ellipse1539="/ellipse-1540@2x.png"
          sankalpPatidar="Viren Inaniyan"
          iITKharagpurPresident="IIT Bombay - Vice-President"
          propWidth="291px"
          propWidth1="379px"
        />
        <CardContainer
          ellipse1539="/ellipse-1541@2x.png"
          sankalpPatidar="Sparsh Agrawal"
          iITKharagpurPresident="IIT Bombay - Vice-President"
          propWidth="291px"
          propWidth1="unset"
        />
      </div>
    </section>
  );
};

export default AICouncilContainer;
