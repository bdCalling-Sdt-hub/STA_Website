import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { dm_sans, poppins } from "@/pages/_app";
import Link from "next/link";

const FreeConsulting = () => {

  return (
    <div className="bg-[#99D31B] h-[211px] px-10  mt-[154px]">
      <div className="grid grid-cols-12  text-center container">
        <div className="col-span-10">
          <p data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={`${poppins.className} text-white mb-3 text-[45px] font-semibold text-left leading-none mt-[52px]`}>Looking for the Best software development <br /> company?</p>
        </div>

        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <Link href='/contact'>
            <Button className={`${dm_sans.className} bg-[#99D31B] border hover:bg-white hover:text-[#99D31B] mt-[85px] text-[18px] font-normal px-[30px] py-[20px] h-[60px]`}>Free Consulting
              <span className='ms-2'><FaArrowRight></FaArrowRight></span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FreeConsulting;
