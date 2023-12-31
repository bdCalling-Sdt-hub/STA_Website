import { dm_sans, poppins } from "@/pages/_app";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="grid grid-cols-2  items-center container mt-[150px]">
      <div data-aos="fade-down-left">
        <img src="/images/about-company.png" alt="banner image" />
      </div>
      <div>
        <div data-aos="fade-down-right">
          <p className={`${dm_sans.className} text-[24px] font-bold text-[#99D31B]`}>ABOUT COMPANY</p>
          <p className={`${poppins.className} text-[52px] font-semibold text-white leading-tight mt-[18px]`}>Empowering Businesses <br /> Through Technology</p>
          <p className={`${dm_sans.className} text-[18px] font-normal text-[#d8d6d6] mt-[18px]`}>At Spark Tech, we are committed to using technology to empower businesses. Our cutting-edge software solutions are designed to improve business operations while increasing efficiency and success in the ever-changing digital landscape.
          </p>
        </div>


        <div data-aos="fade-down-left">
          <div className="grid grid-cols-2 mt-[40px]">
            <div>
              <img className="-ms-5" src="/images/software_dev.png" alt="" />
              <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium`}>Our vision</p>
              <p className={`${dm_sans.className} text-[#EBEBEB] text-[18px] font-normal mt-[15px]`}>We envision a world in which organizations prosper and individuals realize their goals with the help of our seamless digital solutions.</p>
            </div>
            <div>
              <img className="-ms-5" src="/images/software_dev.png" alt="" />
              <p className={`${poppins.className} text-[#99D31B] text-[18px] font-medium`}>Our mission</p>
              <p className={`${dm_sans.className} text-[#EBEBEB] text-[18px] font-normal mt-[15px]`}>We thrive on our mission to provide exceptional digital product solutions that fuel growth, optimize operations, and improve customer experiences to businesses of all sizes.</p>
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
              <p className={`${poppins.className} font-family: Roboto text-[20px] font-medium text-white`}>+88 01321231802</p>
              <p className={`${dm_sans.className} font-family: Roboto text-[14px] font-medium text-[#D6D6D6]`}>Call For More Information</p>
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
