/* eslint-disable @next/next/no-html-link-for-pages */

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa6";

export function Navbar() {
  const currentRoute = usePathname();
  const [title, setTitle] = React.useState("Home");
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

    <div className="sticky top-0 bg-[#333] z-10">
      <div className="container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52`}>
              {
                items.map((item, index) => <li key={index} className='font-semibold text-white hover:text-green-500'>
                  <Link href={item.path}>{item.title}</Link>
                </li>)
              }
            </ul>
          </div>
          <Link href="/"><Image src="/images/logo.png" alt="logo" width={150} height={100} /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              items.map((item, index) => <li key={index} onClick={() => setTitle(item.title)} className={`${title === item.title ? "text-[#99D31B]" : "text-white"} font-semibold hover:text-[#99D31B]`}>
                <Link href={item.path}>{item.title}</Link>
              </li>)
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-[#99D31B]">Contact Us <FaArrowRight></FaArrowRight></a>
        </div>
      </div>
    </div>
  );
}
