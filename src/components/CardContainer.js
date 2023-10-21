import { useMemo } from "react";

const CardContainer = ({
  ellipse1539,
  sankalpPatidar,
  iITKharagpurPresident,
  linkedIn,
  propWidth,
  propWidth1,
}) => {
  const sankalpPatidarStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const iITKharagpurStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="flex flex-col items-center justify-start gap-[24px] text-center text-13xl text-gray font-sora">
      <img
        className="relative rounded-[50%] w-[182px] h-[182px] object-cover"
        alt=""
        src={ellipse1539}
      />
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="relative font-extrabold" style={sankalpPatidarStyle}>
          {sankalpPatidar}
        </div>
        <div className="relative text-xl font-medium" style={iITKharagpurStyle}>
          {iITKharagpurPresident}
        <div className="relative text-xl font-medium" style={iITKharagpurStyle}>
          <a href={linkedIn}>LinkedIn</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardContainer;
