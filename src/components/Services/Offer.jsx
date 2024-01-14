import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { dm_sans, poppins } from "@/pages/_app";

const Offer = ({ service }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center container lg:mt-[150px] mt-[60px]">

        <div className="order-last lg:order-none lg:mt-0 mt-[30px]" data-aos="fade-down-right">
          <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-bold text-[#99D31B]`}>WHAT WE OFFER</p>
          <p className={`${poppins.className} lg:text-[54px] text-[28px] font-semibold text-white leading-tight mt-[18px]`}>{service?.title}</p>
          <p className={`${dm_sans.className} lg:text-[18px] text-[16px] font-normal text-[#d8d6d6] mt-[18px] mr-8`}>{service?.description}</p>


          <div className="grid grid-cols-1" data-aos="fade-down-left">
            <Button className={`${dm_sans.className} w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white lg:mt-[85px] mt-[30px] text-[18px] font-normal px-[30px] py-[20px]`}>Join Our Team
              <span className='ms-2'><FaArrowRight></FaArrowRight></span>
            </Button>
          </div>
        </div>

        <div data-aos="fade-down-left">
          <img src={service?.image} alt="banner image" />
        </div>

      </div>

      <div>
        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360 lg:visible hidden" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[1150px] right-[120px] animate-round-rotate lg:visible hidden" src="/images/shape/4.png" alt="" />
        <img className="absolute top-[550px] -left-[100px]" src="/images/shape/9.png lg:visible hidden" alt="" />
      </div>
    </div>
  );
};

export default Offer;
