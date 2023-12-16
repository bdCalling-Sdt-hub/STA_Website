const HeadingText = ({ sTitle, title, subTitle }) => {
  return (
    <div className="text-center">
      <p className="text-lg text-[#99D31B]">{sTitle}</p>
      <h2 className="text-3xl text-white font-family: Roboto; text-[54px] font-normal mt-[15px]">{title}</h2>
      <h2 className="text-3xl text-white font-family: Roboto; text-[54px] font-normal leading-tight">{subTitle}</h2>
    </div>
  );
};

export default HeadingText;
