"use client"

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


  //   window.scrollTo({
  //     top: window.scrollY + scrollAmount,
  //     behavior: 'smooth', // Add smooth scrolling behavior
  //   });
  // };

  const scrollWin = () => {
    // Get the height of the window
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;


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
    <div className="lg:h-[860px] pb-14">

      <div className="grid grid-cols-10 items-center container">
        {/* ---------------- */}
        <div className="lg:mt-[164px] mt-[106px] lg:col-span-6 col-span-12" data-aos="fade-up">
          <h1 className={`lg:text-[95px] lg:w-[763px] lg:font-medium lg:leading-[105px] w-full text-[40px] lg:text-left text-center ${poppins.className}`}>
            <span className="text-white">From </span>
            <span className="text-[#99D31B] font-semibold">Sparks </span>
            <span className="text-white">To</span>
            <br />
            <span className="text-white">Spectacular</span>
          </h1>
          <p className={`${dm_sans.className} text-white lg:text-[20px] lg:mt-[60px] mr-8 text-[16px] mt-[15px] lg:text-left text-center`}>
            Sparktech specializes in turning ideas into amazing software solutions such as mobile apps, web design, and UI/UX design. Our expertise fuels creativity, bringing your concepts to life with cutting-edge technology. With our specialized software services, you may get from inspiration to extraordinary results.
          </p>

          {/* <Button className={`${dm_sans.className} bg-gradient-to-r from-[#6D9613] via-[#6D9613] to-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all z-30 hover:bg-gradient-to-r from-[#99D31B] to-[#6D9613]`}>
            Get Started
            <span className="ms-[10px]">
              <FaArrowRight />
            </span>
          </Button> */}

          <Link href={'/about'}>
            <div className="lg:text-left text-center">
              <Button className={`${dm_sans.className} bg-gradient-to-r from-[#6D9613] via-[#6D9613] to-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all z-30 hover:from-[#99D31B] hover:via-[#99D31B] hover:to-[#6D9613]`}>
                Get Started
                <span className="ms-[10px]">
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </Link>


          {/* <Image onClick={scrollWin} className="animate-bounce ml-[660px] z-50 mt-2" src="/images/shape/scrol.png" alt="" width={36} height={56} /> */}
        </div>

        {/* --------------- */}
        {/* <div className="flex justify-center items-center lg:w-[563px] lg:h-[549px] z-10  lg:col-span-4 col-span-12 mt-[47px]" data-aos="fade-down">
          
        </div> */}
        <div className="   flex justify-center items-center lg:w-[563px] lg:h-[524px] w-[350px] h-[524px lg:mt-32 mt-16 col-span-4">
          <img src="/images/banner.png" alt="banner image" />
        </div>

        {/* --------------- */}
      </div>

      <div className={`${poppins.className} bg-[#99D31B] h-[100px] lg:mt-[60px] mt-[60px] flex items-center justify-center transform`}>

        <marquee width="2200" scrollamount="25" className="text-[52px] text-white text-center font-bold">MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER - MOBILE APP DEVELOPMENT - WEB DESIGN & DEVELOPMENT - UI/UX DESIGNER</marquee>

      </div>

      <div>
        <img className="absolute lg:top-[100px] top-[85px] lg:left-[20px] lg:w-[92px] lg:h-[92px] h-[40px] w-[40px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />


        <img className="absolute top-[80px] lg:left-[880px] left-[250px] lg:h-[142px] h-[68px] animate-round-rotate inline-block" src="/images/shape/4.png" alt="" />

        <img className="absolute lg:bottom-[500px] lg:right-[120px] bottom-[-40px] right-[30px] lg:h-[42px] h-[24px] animate-round-rotate z-10" src="/images/shape/3.png" alt="" />
        <img className="absolute lg:bottom-[500px] lg:right-[120px] bottom-[-50px] right-[30px] lg:h-[142px] h-[68px] animate-round-rotate" src="/images/shape/5.png" alt="" />

        <img className="absolute lg:top-[150px] lg:right-[180px] animate-round-rotate360 hidden lg:visible" src="/images/shape/6.png" alt="" />

        <img className="absolute lg:bottom-[200px] lg:right-[180px] right-[340px] bottom-[0px] block lg:animate-round-rotate360" src="/images/shape/6.png" alt="" />

        <img className="absolute lg:bottom-[400px] lg:left-[160px] bottom-[150px] left-[350px] lg:animate-round-rotate360" src="/images/shape/6.png" alt="" />

        <img className="absolute lg:top-[150px] lg:left-[200px] lg:animate-round-rotate360 hidden lg:visible" src="/images/shape/3.png" alt="" />

        <img className="absolute lg:bottom-[200px] lg:right-[20px] right-[0px] bottom-[-370px] lg:w-[92px] lg:h-[92px] h-[40px] w-[40px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />
        <img className="absolute lg:-top-[20px] lg:right-[13px] hidden lg:visible" src="/images/shape/8.png" alt="" />

        <img className="absolute -top-[450px] -left-[400px] lg:visible invisible animate-round-rotate inline-block" src="/images/shape/8.png" alt="" />
        <img className="absolute -top-[450px] -right-[400px] lg:visible invisible animate-round-rotate inline-block" src="/images/shape/8.png" alt="" />
      </div>

      {/* <img className="absolute bottom-[200px] left-[1180px] animate-round-rotate" src="/images/shape/7.png" alt="" /> */}

      {/* <img className="absolute " src="/images/shape/2.png" alt="" /> */}
      {/* <img className="absolute -top-[20px] right-[20px] animate-round-rotate inline-block" src="/images/shape/8.png" alt="" /> */}
    </div>
  );
};

export default Banner;
