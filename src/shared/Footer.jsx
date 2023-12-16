import Icon from "@/components/Common/icon";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import footerLink from "../../public/db/footer.json";
import style from "./navbar.module.css"
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const { usefulLinks, usefulLinks2, services, description, contacts, paymentImages } =
    footerLink;

  return (
    <footer className={style.bkImage}>

      <div className="container py-16 bg-[#333] rounded-[40px]">
        <div className="grid grid-cols-6 gap-8 text-base-content">
          <aside className="col-span-2 px-8">
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </a>
            <p className="mt-4 text-[18px] font-family: Roboto; text-[#D6D6D6]">{description}</p>
            <div className="flex items-center gap-2 mt-[25px]">
              <Icon>
                <Phone color="#99D31B" size={24} />
              </Icon>
              <p className="text-[#ADADAD]">+88 01321231802</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Icon>
                <IoIosMail color="#99D31B" size={30} />
              </Icon>
              <p className="text-[#ADADAD]">learn.bdcalling@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mt-4  ms-2">
              <Icon>
                <MapPinned size={30} color="#99D31B" absoluteStrokeWidth />
              </Icon>
              <p className="text-[#ADADAD]">
                Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219
              </p>
            </div>

            <h4 className="font-bold ms-2 mt-[28px] mb-2 text-[22px] text-white">FOLLOW US</h4>

            <div className="flex items-center gap-2">
              <Icon>
                {/* <Facebook color="#99D31B" /> */}
                <FaFacebookF color="#99D31B" size={24} />
              </Icon>
              <Icon>
                {/* <Linkedin color="#99D31B" /> */}
                <FaLinkedinIn color="#99D31B" size={24} />
              </Icon>
              <Icon>
                {/* <Youtube color="#99D31B" /> */}
                <FaDribbble color="#99D31B" size={20} />
              </Icon>
              <Icon>
                {/* <Mail color="#99D31B" /> */}
                <FaBehance color="#99D31B" size={20} />
              </Icon>
              <Icon>
                <Send color="#99D31B" />
              </Icon>
            </div>


          </aside>

          <div className="col-span-4">
            <div className="flex">
              <nav className="">
                <header className="font-bold mb-6 text-white">SERVICES</header>
                {services.map((link, index) => (
                  <Link
                    key={index}
                    href="/courses"
                    className="block mb-2 hover:underline transition text-[#D6D6D6] mt-[20px]"
                  >
                    {link?.title}
                  </Link>
                ))}
              </nav>

              <nav className="ms-40">
                <header className="font-bold mb-6 text-white">INFORMATION</header>
                {usefulLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link?.link}
                    className="block mb-2 hover:underline transition text-[#D6D6D6]"
                  >
                    {link?.title}
                  </Link>
                ))}
              </nav>

              <nav className="ms-20">
                <header className="font-bold mb-12"></header>

                {usefulLinks2.map((link, index) => (
                  <Link
                    key={index}
                    href={link?.link}
                    className="block mb-2 hover:underline transition text-[#D6D6D6]"
                  >
                    {link?.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-28">
              <h1 className="text-white mb-[30px] text-[22px] font-family: Roboto;">SUBSCRIBE OUR NEWSLETTER</h1>
              <form>
                {/* <header className="footer-title text-white">SUBSCRIBE OUR NEWSLETTER</header> */}
                <fieldset className="form-control w-80">
                  {/* <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label> */}
                  <div className="join w-[648px]">
                    <input type="text" placeholder="Email Address" className="input input-bordered join-item w-[448px] bg-[#5C5C5C] text-[#D6D6D6] placeholder:text-[#D6D6D6]" />
                    <button className="btn bg-[#99D31B] p-2 text-white font-family: Roboto rounded-lg join-item border-4 border-[#5C5C5C]">Subscribe Now</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="py-6 text-center">
        <div className="container">
          <a href="#" className=" mr-1 px-1 text-[#D6D6D6]">
            Copyright 2023 Theme by <span className="text-[#99D31B]">Sparktech.Agency</span> | All Rights Reserved
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
