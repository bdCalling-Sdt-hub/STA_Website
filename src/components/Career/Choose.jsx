import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { dm_sans, poppins } from "@/pages/_app";

const Choose = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  items-center container lg:mt-[150px] mt-[60px]">

      <div data-aos="fade-down-right">
        <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-bold text-[#99D31B]`}>WHAT WE OFFER</p>
        <p className={`${poppins.className} lg:text-[54px] text-[28px] font-semibold text-white leading-tight mt-[18px]`}>Career with
          <br />SparkTech</p>
        <p className={`${dm_sans.className} lg:text-[18px] text-[16px] font-normal text-[#d8d6d6] mt-[18px] mr-8`}>Join us, we offer you an extraordinary chance to learn, to develop and to be part of an exciting experience and team.</p>

        {/* &#39; */}
        <div className="grid grid-cols-1" data-aos="fade-down-left">
          <Button className={`${dm_sans.className} w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white lg:mt-[85px] mt-[30px] text-[18px] font-normal px-[30px] py-[20px]`}>Join Our Team
            <span className='ms-2'><FaArrowRight></FaArrowRight></span>
          </Button>
        </div>
      </div>

      <div data-aos="fade-down-left">
        <img className="lg:mt-0 mt-[40px]" src="/images/career/career.png" alt="banner image" />
      </div>

      <div>
        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360 lg:visible hidden" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[1150px] right-[120px] animate-round-rotate lg:visible hidden" src="/images/shape/4.png" alt="" />
        <img className="absolute top-[550px] -left-[100px]" src="/images/shape/9.png" alt="" />
      </div>
    </div>
  );
};

export default Choose;
