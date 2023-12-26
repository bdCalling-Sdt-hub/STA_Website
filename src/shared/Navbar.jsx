
/* eslint-disable @next/next/no-html-link-for-pages */

import { Button } from "@/components/ui/button";
import { poppins } from "@/pages/_app";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  const items = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About Us",
      path: "/about"
    },
    {
      title: "Service",
      path: "/services"
    },
    {
      title: "Portfolio",
      path: "/portfolio"
    },
    {
      title: "Career",
      path: "/career"
    },
  ]

  return (
    <div className="bg-[#333] sticky top-0 z-50 py-4">
      <nav className="container lg:flex items-center w-full justify-between">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img className="w-24 md:w-36" src="/images/logo.png" alt="logo" />
          </Link>
          <div
            className="lg:hidden cursor-pointer text-white active:duration-300"
            onClick={() => setOpen(!open)}
          >
            {!open ? <AlignJustify /> : <X />}
          </div>
        </div>

        <ul
          className={`space-y-5 lg:space-y-0 lg:flex gap-10 items-center bg-[#333] lg:bg-transparent p-4 lg:p-0  absolute lg:static  h-auto ${open ? "left-0 top-14 w-full" : "left-0 -top-96"
            }`}
        >
          {items.map((item, index) => (
            <li onClick={() => setIsActive(item.title)} key={index} className={`${poppins.className} hover:text-[#99D31B] duration-100 text-[18px] ${isActive === item.title ? "text-[#99D31B] font-bold " : "text-white"}`}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}

          {
            open && <Button className="btn btn-outline text-[#99D31B] bg-[#333] hover:bg-[#99D31B] hover:text-white">Contact Us <FaArrowRight></FaArrowRight>
            </Button>
          }



        </ul>
        {/* <Button className="w-[200px] btn btn-outline text-[#99D31B] bg-[#333] hover:bg-[#99D31B] hover:text-white hidden lg:block">
          Contact Us <FaArrowRight></FaArrowRight>
        </Button> */}

        <Link href={'/contact'}>
          <div className="hidden lg:flex items-center justify-center gap-2 bg-[#333] border-[1px] w-[183px] border-[#99D31B] text-[#99D31B] px-[30px] py-[16px] rounded-lg
        hover:bg-[#99D31B] hover:text-white">
            <p>Contact Us</p>
            <p><FaArrowRight></FaArrowRight></p>
          </div>
        </Link>

      </nav>
    </div>
  );
};

export default Navbar;