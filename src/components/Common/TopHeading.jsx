import { dm_sans, poppins } from "@/pages/_app";

const TopHeading = ({ blueText, description = "" }) => {
  return (
    <div className="text-center">
      <h2 className={`${dm_sans.className} text-[24px] text-[#99D31B] font-normal`}>{blueText}</h2>
      <p className={`${poppins.className} text-[54px] text-white font-semibold`}>{description}</p>
    </div>
  );
};

export default TopHeading;
