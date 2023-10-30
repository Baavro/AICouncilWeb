import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="sticky top-0 left-[calc(50%-_722px)] bg-transparent backdrop-blur-sm w-[1440px] max-sm:w-[95%] max-sm:left-2 max-sm:right-1 h-16 max-sm:h-min flex-row items-center justify-between py-8 max-sm:py-4 px-8 max-sm:px-2 box-border max-w-[1440px] flex max-sm:flex-col max-sm:justify-around max-sm:items-center max-sm: border-b-2 border-x-2 rounded-b-lg border-solid">
      <div className="text-[24px] text-center w-full max-sm:pb-2 font-bold md:text-left">
        <Link to="/" onClick={scrollToTop}>
          AI Council
        </Link>
      </div>
      <nav className="m-0 flex flex-row items-center justify-center gap-[72px] max-sm:gap-4 text-center text-lg text-gray font-sora">
        <Link to="about" spy={true} smooth={true} duration={500} offset={-100}>
          About
        </Link>
        <Link to="team" spy={true} smooth={true} duration={500} offset={-100}>
          Team
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
