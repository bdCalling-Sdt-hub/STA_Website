import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

const FreeConsulting = () => {

  return (
    <div className="bg-[#99D31B] h-[211px] px-10  mt-[154px]">
      <div className="grid grid-cols-12  text-center container">
        <div className="col-span-10">
          <p className="text-white mb-3 text-[45px] font-semibold font-family: Roboto text-left leading-none mt-[52px]">Looking for the Best software development <br /> company?</p>
        </div>

        <div>
          <Button className=' bg-[#99D31B] border hover:bg-white hover:text-[#99D31B] mt-[85px] text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px] h-[59px]'>Free Consulting
            <span className='ms-2'><FaArrowRight></FaArrowRight></span>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default FreeConsulting;
