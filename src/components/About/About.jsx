import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="grid grid-cols-2  items-center container mt-[150px]">
      <div data-aos="fade-down-left">
        <img src="/images/about-company.png" alt="banner image" />
      </div>
      <div>
        <div data-aos="fade-down-right">
          <p className="text-[24px] font-bold text-[#99D31B] font-family: Roboto">ABOUT COMPANY</p>
          <p className="text-[54px] font-semibold text-white font-family: Roboto leading-tight mt-[18px]">Empowering Businesses <br /> Through Technology</p>
          <p className="text-[18px] font-family: Roboto font-normal text-[#d8d6d6] mt-[18px]">The field of information technology is vast and continuously evolving, driving innov ation, efficiency, and connectivity across various industries and sectors.This inclu des physical devices used in computing peripherals like keyboards
          </p>
        </div>


        <div data-aos="fade-down-left">
          <div className="grid grid-cols-2 mt-[40px]">
            <div>
              <img className="-ms-5" src="/images/software_dev.png" alt="" />
              <p className="font-family: Roboto text-[#99D31B] text-[18px] font-medium">Software Development</p>
              <p className="font-family: Roboto text-[#EBEBEB] text-[18px] font-normal mt-[15px]">Duis dolor in simply free text available voluptate dolore reprehenderit in velit esse.</p>
            </div>
            <div>
              <img className="-ms-5" src="/images/software_dev.png" alt="" />
              <p className="font-family: Roboto text-[#99D31B] text-[18px] font-medium">Software Development</p>
              <p className="font-family: Roboto text-[#EBEBEB] text-[18px] font-normal mt-[15px]">Duis dolor in simply free text available voluptate dolore reprehenderit in velit esse.</p>
            </div>
          </div>

          <div class="divide-y divide-[#858585] mt-[30px] mb-[30px]">
            <div></div>
            <div></div>
          </div>

          <div className="flex gap-3">
            <div>
              <img src="/images/solar_call-medicine-broken.png" alt="" />
            </div>
            <div>
              <p className="font-family: Roboto text-[20px] font-medium text-white">+88 01321231802</p>
              <p className="font-family: Roboto text-[14px] font-medium text-[#D6D6D6]">Call For More Information</p>
            </div>
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

export default About;
