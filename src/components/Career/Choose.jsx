import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

const Choose = () => {
  return (
    <div className="grid grid-cols-2  items-center container mt-[150px]">

      <div data-aos="fade-down-right">
        <p className="text-[24px] font-bold text-[#99D31B] font-family: Roboto">WHAT WE OFFER</p>
        <p className="text-[54px] font-semibold text-white font-family: Roboto; leading-tight mt-[18px]">Career with
          <br />SparkTech</p>
        <p className="text-[18px] font-family: Roboto font-normal text-[#d8d6d6] mt-[18px]">Looking for a career that&#39;s all about making, shaping, and celebrating the extraordinary? then you are home!</p>


        <div className="grid grid-cols-1" data-aos="fade-down-left">
          <Button className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white mt-[85px] text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
            <span className='ms-2'><FaArrowRight></FaArrowRight></span>
          </Button>
        </div>
      </div>

      <div data-aos="fade-down-left">
        <img src="/images/career/career.png" alt="banner image" />
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
