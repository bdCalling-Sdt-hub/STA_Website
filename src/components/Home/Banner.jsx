import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useEffect } from "react";

const Banner = () => {

  const catagories = [
    "Wordpress",
    "Digital Marketing",
    "Graphics Design",
    "UX/UI Design",
    "APP Developer with Flutter",
    "Front-End Development",
    "Lead & Data Entry",
    "Visual Design Fundamentals",
    "Prototyping and Wireframing",
  ];
  return (
    <div className="h-auto pb-14">
      <div className="grid grid-cols-10 items-center container">
        {/* ---------------- */}
        <div className="mt-[164px] col-span-6 animate__animated animate__backInLeft" data-aos="fade-up">
          <h1 className="text-[105px] w-[763px] font-family: 'Roboto', font-medium leading-tight">
            <span className="text-white">From </span>
            <span className="text-[#99D31B]">Sparks </span>
            <span className="text-white">To</span>
            <br />
            <span className="text-white">Spectacular</span>
          </h1>
          <p className="text-white text-[22px] mt-[30px]">
            A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success
          </p>
          <Button className='bg-[#99D31B] mt-[60px]'>Get Started  <FaArrowRight></FaArrowRight></Button>
        </div>

        {/* --------------- */}
        <div className="animate__animated animate__backInRight  flex justify-center items-center w-[563px] h-[549px]  col-span-4">
          <img style={{ height: '100%', width: "100%" }} src="/images/banner.png" alt="banner image" />
        </div>

        {/* --------------- */}
      </div>
      <div className="bg-[#99D31B] h-[80px] mt-[100px] flex items-center justify-center transform skew-y-2">

        <marquee width="1900" className="text-3xl text-white text-center font-bold">UI/UX designer - Mobile App Development - Web Design - UI/UX designer - Mobile App Development - Web Design</marquee>

      </div>
      <img className="absolute top-[180px] left-[180px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />
      <img className="absolute " src="/images/shape/2.png" alt="" />
      <img className="absolute " src="/images/shape/3.png" alt="" />
      <img className="absolute " src="/images/shape/4.png" alt="" />
      <img className="absolute " src="/images/shape/5.png" alt="" />
      <img className="absolute " src="/images/shape/6.png" alt="" />
      <img className="absolute " src="/images/shape/7.png" alt="" />
      <div>

      </div>
    </div>
  );
};

export default Banner;
