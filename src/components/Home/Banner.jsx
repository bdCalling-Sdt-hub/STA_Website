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
import { dm_sans, poppins } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {

  // const scrollWin = () => {
  //   window.scrollTo(0, window.scrollY + 500); // Scroll down by 500 pixels
  // };

  // const scrollWin = () => {
  //   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  //   const scrollAmount = (windowHeight * 100); // Scroll down by 1% of the window height

  //   window.scrollTo(0, window.scrollY + scrollAmount);
  // };

  // const scrollWin = () => {
  //   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  //   const scrollAmount = windowHeight * 100; // Scroll down by 1% of the window height

  //   console.log("object")

  //   window.scrollTo({
  //     top: window.scrollY + scrollAmount,
  //     behavior: 'smooth', // Add smooth scrolling behavior
  //   });
  // };

  const scrollWin = () => {
    // Get the height of the window
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    console.log("object")

    // Calculate the amount to scroll (100% of the window height)
    const scrollAmount = windowHeight * 100;

    // Scroll the window to the calculated position with smooth behavior
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: 'smooth',
    });
  };

  // animate__animated animate__backInRight

  return (
    <div className="h-[860px] pb-14">

      <div className="grid grid-cols-10 items-center container">
        {/* ---------------- */}
        <div className="mt-[164px] col-span-6" data-aos="fade-up">
          <h1 className={`text-[95px] w-[763px] font-medium leading-[105px] ${poppins.className}`}>
            <span className="text-white">From </span>
            <span className="text-[#99D31B] font-semibold">Sparks </span>
            <span className="text-white">To</span>
            <br />
            <span className="text-white">Spectacular</span>
          </h1>
          <p className={`${dm_sans.className} text-white text-[22px] mt-[30px]`}>
            A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success
          </p>
          {/* <Button className={`${dm_sans.className} bg-gradient-to-r from-[#6D9613] via-[#6D9613] to-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all z-30 hover:bg-gradient-to-r from-[#99D31B] to-[#6D9613]`}>
            Get Started
            <span className="ms-[10px]">
              <FaArrowRight />
            </span>
          </Button> */}

          <Link href={'/about'}>
            <Button className={`${dm_sans.className} bg-gradient-to-r from-[#6D9613] via-[#6D9613] to-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all z-30 hover:from-[#99D31B] hover:via-[#99D31B] hover:to-[#6D9613]`}>
              Get Started
              <span className="ms-[10px]">
                <FaArrowRight />
              </span>
            </Button>
          </Link>


          <Image onClick={scrollWin} className="animate-bounce ml-[660px] z-50 mt-2" src="/images/shape/scrol.png" alt="" width={36} height={56} />
        </div>

        {/* --------------- */}
        <div className="flex justify-center items-center w-[563px] h-[549px] z-10  col-span-4" data-aos="fade-down">
          <img style={{ height: '100%', width: "100%" }} src="/images/banner.png" alt="banner image" />
        </div>

        {/* --------------- */}
      </div>

      <div className={`${poppins.className} bg-[#99D31B] h-[100px] mt-[100px] flex items-center justify-center transform`}>

        <marquee width="1900" className="text-[52px] text-white text-center font-bold">UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT</marquee>

      </div>

      {/* <div className={`${poppins.className} bg-[#99D31B] h-[80px] mt-[150px] flex items-center justify-center transform skew-y-2`}>

        <marquee width="1900" className="text-[42px] text-white text-center font-bold">UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT</marquee>

      </div> */}

      <div>
        <img className="absolute top-[100px] left-[20px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />

        <img className="absolute bottom-[500px] right-[120px] animate-round-rotate z-10" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[80px] left-[880px] animate-round-rotate inline-block" src="/images/shape/4.png" alt="" />
        <img className="absolute bottom-[500px] right-[120px] animate-round-rotate" src="/images/shape/5.png" alt="" />
        <img className="absolute top-[150px] right-[180px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
        <img className="absolute bottom-[200px] left-[1180px] animate-round-rotate" src="/images/shape/7.png" alt="" />
        <img className="absolute bottom-[200px] right-[180px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
        <img className="absolute bottom-[400px] left-[160px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
        <img className="absolute top-[150px] left-[200px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute bottom-[150px] right-[20px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />
        <img className="absolute -top-[20px] right-[13px]" src="/images/shape/8.png" alt="" />
      </div>

      {/* <img className="absolute " src="/images/shape/2.png" alt="" /> */}
      {/* <img className="absolute -top-[20px] right-[20px] animate-round-rotate inline-block" src="/images/shape/8.png" alt="" /> */}
    </div>
  );
};

export default Banner;
