const TopHeading = ({ blueText, description = "" }) => {
  return (
    <div className="text-center">
      <h2 className="text-[24px] text-[#99D31B] font-normal font-family: Roboto">{blueText}</h2>
      <p className="text-[54px] text-white font-family: Roboto;">{description}</p>
    </div>
  );
};

export default TopHeading;
