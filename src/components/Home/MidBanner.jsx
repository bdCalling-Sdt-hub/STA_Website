import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

const MidBanner = () => {

  return (
    <div className=" h-auto mt-[157px] pb-20">
      <div className="grid grid-cols-2 gap-20 items-center container">
        <div className="w-[624px] h-[513px]">
          <img src="/images/mid-banner.png" alt="banner image" />
        </div>
        <div className="space-y-8">
          <p className="text-[#99D31B] text-[24px]">WHY CHOOSE US</p>
          <h1 className="text-5xl font-normal leading-tight text-[54px] font-family: 'Roboto'">
            <span className="text-white">We're Best In Software </span>
            <br />
            <span className="text-white">Development</span>
          </h1>
          <p className="text-white text-[22px]">
            Software operations through a custom engineering team. Meet the demand of your company’s operations with a high-performing team skilled in the technologies.
          </p>
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className="text-white text-[20px] text-[20px]">Web development tehnology</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className="text-white text-[20px]">Top skilled engineers</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className="text-white text-[20px]">10 Years of experience</p>
            </div>
            <div className="flex items-center">
              <img src="/images/mid-banner-star.png" alt="" />
              <p className="text-white text-[20px]">Best Features Keep Us Ahed</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MidBanner;
