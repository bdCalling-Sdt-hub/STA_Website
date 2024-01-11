import { dm_sans, poppins } from "@/pages/_app";

const HeadingText = ({ sTitle, title, subTitle }) => {
  return (
    <div className="text-center">
      <p className={`${dm_sans.className} text-lg text-[#99D31B]`}>{sTitle}</p>
      <h2 className={`${poppins.className} text-white lg:text-[54px] text-[28px] font-semibold mt-[15px]`}>{title}</h2>
      <h2 className={`${poppins.className} text-white lg:text-[54px] text-[28px] font-semibold lg:leading-tight`}>{subTitle}</h2>
    </div>
  );
};

export default HeadingText;
