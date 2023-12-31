import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { dm_sans, poppins } from "@/pages/_app";

const MidBanner = () => {

  return (
    <div className=" h-auto mt-[157px]" >
      <div className="grid grid-cols-2 gap-20 items-center container">
        <div className="w-[624px] h-[513px]" data-aos="fade-down-right">
          <img src="/images/mid-banner.png" alt="banner image" />
        </div>


        <div className="space-y-8" data-aos="fade-down-left">
          <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>WHY CHOOSE US</p>
          <h1 className={`${poppins.className} font-semibold leading-tight text-[54px]`}>
            <span className="text-white">We&#39;re Best In Software </span>
            <br />
            <span className="text-white">Development</span>
          </h1>
          <p className={`${dm_sans.className} text-white text-[22px]`}>
            Software operations through a custom engineering team. Meet the demand of your company’s operations with a high-performing team skilled in the technologies.
          </p>
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className={`${dm_sans.className} text-white text-[20px]`}>Assured Services</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className={`${dm_sans.className} text-white text-[20px]`}>Top skilled Engineers</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className={`${dm_sans.className} text-white text-[20px]`}>10 Years of experience</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className={`${dm_sans.className} text-white text-[20px]`}>Worldwide Clients</p>
            </div>
          </div>
        </div>

        {/* ----------------- */}
        <div className="relative">
          {/* <img className="absolute top-[100px] left-[20px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />
          <img className="absolute " src="/images/shape/2.png" alt="" />
          <img className="absolute bottom-[500px] right-[120px] animate-round-rotate" src="/images/shape/3.png" alt="" />
          <img className="absolute top-[80px] left-[880px] animate-round-rotate inline-block" src="/images/shape/4.png" alt="" />
          <img className="absolute bottom-[500px] right-[120px] animate-round-rotate" src="/images/shape/5.png" alt="" />
          <img className="absolute top-[150px] right-[180px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
          <img className="absolute bottom-[200px] left-[980px] animate-round-rotate" src="/images/shape/7.png" alt="" />
          <img className="absolute bottom-[200px] right-[180px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
          <img className="absolute bottom-[400px] left-[160px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
          <img className="absolute top-[150px] left-[200px] animate-round-rotate360" src="/images/shape/3.png" alt="" /> */}
          <img className="absolute bottom-[500px] -left-[150px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
          <img className="absolute bottom-[600px] -right-[880px] animate-round-rotate inline-block" src="/images/shape/4.png" alt="" />
          <img className="absolute -bottom-[100px] -right-[700px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
          <img className="absolute -bottom-[100px] left-[00px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
          <img className="absolute -bottom-[120px] right-[400px]" src="/images/shape/9.png" alt="" />
        </div>



      </div>

    </div>
  );
};

export default MidBanner;
