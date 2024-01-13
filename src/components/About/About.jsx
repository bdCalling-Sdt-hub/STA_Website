import { dm_sans, poppins } from "@/pages/_app";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="items-center container mt-[150px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="lg:grid-cols-1 grid-cols-1" data-aos="fade-down-left">
          <img src="/images/about-company.png" alt="banner image" />
        </div>

        <div className="lg:grid-cols-1 grid-cols-1 lg:mt-0 mt-[40px]">
          <div data-aos="fade-down-right">
            <div className="grid lg:grid-cols-1">
              <p className={`${dm_sans.className} text-[24px] font-bold text-[#99D31B]`}>ABOUT COMPANY</p>
              <p className={`${poppins.className} lg:text-[52px] text-[28px] font-semibold text-white leading-tight mt-[18px]`}>Empowering Businesses <br /> Through Technology</p>
              <p className={`${dm_sans.className} lg:text-[18px] text-[16px] font-normal text-[#d8d6d6] mt-[18px]`}>At Spark Tech, we are committed to using technology to empower businesses. Our cutting-edge software solutions are designed to improve business operations while increasing efficiency and success in the ever-changing digital landscape.
              </p>
            </div>

            <div className="mt-[30px] flex lg:flex-row flex-col">
              <div>
                <img className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]" src="/images/vision.png" alt="" />
                <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium  mt-[15px]`}>Our vision</p>
                <p className={`${dm_sans.className} text-[#EBEBEB] lg:text-[18px] text-[16px] font-normal mt-[15px]`}>We envision a world in which organizations prosper and individuals realize their goals with the help of our seamless digital solutions.</p>
              </div>
              <div className="lg:mt-0 mt-[30px]">
                <img className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]" src="/images/mission.png" alt="" />
                <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium  mt-[15px]`}>Our mission</p>
                <p className={`${dm_sans.className} text-[#EBEBEB] lg:text-[18px] text-[16px] font-normal mt-[15px]`}>We thrive on our mission to provide exceptional digital product solutions that fuel growth, optimize operations, and improve customer experiences to businesses of all sizes.</p>
              </div>
            </div>

          </div>


          {/* <div data-aos="fade-down-left">
            <div className="flex lg:flex-row flex-col mt-[40px]">
              <div>
                <img className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]" src="/images/vision.png" alt="" />
                <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium  mt-[15px]`}>Our vision</p>
                <p className={`${dm_sans.className} text-[#EBEBEB] lg:text-[18px] text-[16px] font-normal mt-[15px]`}>We envision a world in which organizations prosper and individuals realize their goals with the help of our seamless digital solutions.</p>
              </div>
              <div className="lg:mt-0 mt-[30px]">
                <img className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]" src="/images/mission.png" alt="" />
                <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium  mt-[15px]`}>Our mission</p>
                <p className={`${dm_sans.className} text-[#EBEBEB] lg:text-[18px] text-[16px] font-normal mt-[15px]`}>We thrive on our mission to provide exceptional digital product solutions that fuel growth, optimize operations, and improve customer experiences to businesses of all sizes.</p>
              </div>
            </div>

          </div> */}

        </div>
      </div>

      <div>
        <img className="absolute top-[1250px] left-[120px] hidden lg:visible animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[1150px] right-[120px] hidden lg:visible animate-round-rotate" src="/images/shape/4.png" alt="" />
        <img className="absolute top-[550px] -left-[100px]" src="/images/shape/9.png" alt="" />
      </div>
    </div>
  );
};

export default About;
