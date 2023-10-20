const Header = () => {
  return (
    <header className="sticky top-0 left-[calc(50%_-_722px)] bg-gainsboro w-[1440px] h-28 overflow-x-auto flex flex-col items-end justify-between py-8 px-[130px] box-border max-w-[1440px]">
      <nav className="m-0 flex flex-row items-center justify-center gap-[72px] text-center text-lg text-gray font-sora">
        <div className="relative font-semibold">Home</div>
        <div className="relative font-semibold">About</div>
        <div className="relative font-semibold">Team</div>
        <div className="relative font-semibold">Contact</div>
      </nav>
    </header>
  );
};

export default Header;
