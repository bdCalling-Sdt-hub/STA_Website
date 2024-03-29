import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { dm_sans, poppins } from "@/pages/_app";
import Link from "next/link";

const FreeConsulting = () => {

  return (
    <div className="bg-[#99D31B] lg:h-[211px] h-[280px] lg:px-10  lg:mt-14">

      <div className="grid lg:grid-cols-2 grid-cols-1 container">
        <div>
          <p className={`${poppins.className} text-white mb-3 lg:text-[45px] text-[28px] lg:font-semibold font-normal lg:text-left text-center lg:leading-none lg:mt-[32px] mt-[30px]`}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >Looking for the Best software development <br /> company?</p>
        </div>
        <div className="items-center lg:text-end text-center">
          <Link href='/contact'>
            <Button className={`${dm_sans.className} bg-[#99D31B] border hover:bg-white hover:text-[#99D31B] lg:mt-[85px] mt-[30px] text-[18px] font-normal  px-[30px] py-[20px] h-[60px]`}>Free Consulting
              <span className='ms-2'><FaArrowRight></FaArrowRight></span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeConsulting;
