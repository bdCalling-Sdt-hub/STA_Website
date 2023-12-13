import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

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
    <div className=" h-auto py-14">
      <div className="grid grid-cols-2 gap-40 items-center container">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-snug">
            <span className="text-[#99D31B]">SparkTech</span> <span className="text-white">- Your</span>
            <br />
            <span className="text-white">Trusted Software</span>
            <br />
            <span className="text-white">Development Partner</span>
          </h1>
          <p className="text-white">
            A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success
          </p>
          <Button className='bg-[#99D31B]'>Get Started <FaArrowRight></FaArrowRight></Button>
        </div>
        <div>
          <img src="/images/banner.png" alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
