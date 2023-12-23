import { dm_sans, poppins } from "@/pages/_app";

const HeadingText = ({ sTitle, title, subTitle }) => {
  return (
    <div className="text-center">
      <p className={`${dm_sans.className} text-lg text-[#99D31B]`}>{sTitle}</p>
      <h2 className={`${poppins.className} text-3xl text-white text-[54px] font-semibold mt-[15px]`}>{title}</h2>
      <h2 className={`${poppins.className} text-3xl text-white text-[54px] font-semibold leading-tight`}>{subTitle}</h2>
    </div>
  );
};

export default HeadingText;
