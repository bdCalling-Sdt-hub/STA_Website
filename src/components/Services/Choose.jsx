import { dm_sans, poppins } from "@/pages/_app";
import { Button } from "../ui/button";

const Choose = () => {
  return (
    <div className="grid grid-cols-2  items-center container mt-[150px]">
      <div data-aos="fade-down-left">
        <img src="/images/services/services.png" alt="banner image" />
      </div>
      <div>
        <div data-aos="fade-down-right">
          <p className={`${dm_sans.className} text-[24px] font-bold text-[#99D31B] `}>Why choose Invite?</p>
          <p className={`${poppins.className} text-[54px] font-semibold text-white leading-tight mt-[18px]`}>We want to work
            <br />the best!</p>
          <p className={`${dm_sans.className} text-[18px]  font-normal text-[#d8d6d6] mt-[18px]`}>Share your project scope, goals, and technical requirements with us. The objective of this preliminary stage is to validate your app idea and make sure it has viability and success potential. This entails market research, determining your target market, and gauging the demand for your app. We construct a development schedule, a budget, and a plan for the project.
          </p>
        </div>


        <div className="grid grid-cols-1 mt-[33px]" data-aos="fade-down-left">
          <div className="flex items-center">
            <img src="/images/mid-banner-star.png" alt="" />
            <p className={`${dm_sans.className} text-white text-[20px]`}>Best Service provider</p>
          </div>
          <div className="flex items-center mt-[30px]">
            <img src="/images/mid-banner-star.png" alt="" />
            <p className={`${dm_sans.className} text-white text-[20px]`}>Fully editable & easy to use</p>
          </div>
          <div className="flex items-center mt-[30px]">
            <img src="/images/mid-banner-star.png" alt="" />
            <p className={`${dm_sans.className} text-white text-[20px]`}>Designed by talented team</p>
          </div>

        </div>
      </div>
      <div>
        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
        <img className="absolute top-[550px] -left-[100px]" src="/images/shape/9.png" alt="" />
      </div>
    </div>
  );
};

export default Choose;
