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
import { dm_sans, poppins } from "@/pages/_app";

const Footer = () => {
  const { usefulLinks, usefulLinks2, services, description, contacts, paymentImages } =
    footerLink;

  return (
    <footer className={style.bkImage}>

      <div className="container py-16 bg-[#333] rounded-[40px]">
        <div className="grid grid-cols-6 gap-8 text-base-content">
          <aside className="lg:col-span-2 col-span-12 px-8">
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </a>
            {/* <p className={`${poppins.className} mt-4 text-[18px] text-[#D6D6D6]`}>{description}</p> */}
            <div className="flex items-center gap-2 mt-[30px]  ms-2">
              <Icon>
                <MapPinned size={30} color="#99D31B" absoluteStrokeWidth />
              </Icon>
              <p className={`${dm_sans.className} text-[#ADADAD]`}>
                Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219
              </p>
            </div>
            <div className="flex items-center gap-2 mt-[25px]">
              <Icon>
                <Phone color="#99D31B" size={24} />
              </Icon>
              <p className={`${dm_sans.className} text-[#ADADAD]`}>+88 01321231802</p>
            </div>
            <div className="flex items-center gap-2 mt-[15px]">
              <Icon>
                <IoIosMail color="#99D31B" size={30} />
              </Icon>
              <p className={`${dm_sans.className} text-[#ADADAD]`}>sparktech.agency@gmail.com</p>
            </div>


            <h4 className={`${poppins.className} font-bold ms-2 mt-[100px] mb-2 text-[22px] text-white`}>FOLLOW US</h4>

            <div className="flex items-center gap-2">
              <Icon>
                {/* <Facebook color="#99D31B" /> */}
                <FaFacebookF color="#99D31B" size={20} />
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
                <FaBehance color="#99D31B" size={22} />
              </Icon>
              {/* <Icon>
                <Send color="#99D31B" />
              </Icon> */}
            </div>


          </aside>

          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:flex-row flex-col">
              <nav className="ms-12">
                <header className={`${poppins.className} font-bold mb-6 text-white`}>SERVICES</header>
                {services.map((link, index) => (
                  <Link
                    key={index}
                    href="/services"
                    className={`${dm_sans.className} block mb-2 hover:underline transition text-[#D6D6D6] mt-[20px]`}
                  >
                    {link?.title}
                  </Link>
                ))}
              </nav>

              <nav className="lg:ms-40 ms-12 lg:mt-0 mt-12">
                <header className={`${poppins.className} font-bold mb-6 text-white`}>INFORMATION</header>
                {usefulLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link?.link}
                    className={`${dm_sans.className} block mb-2 hover:underline transition text-[#D6D6D6] mt-[20px]`}
                  >
                    {link?.title}
                  </Link>
                ))}
              </nav>

              <nav className="lg:ms-20 ms-12">
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
              <h1 className={`${poppins.className} text-white mb-[30px] text-[22px]`}>SUBSCRIBE OUR NEWSLETTER</h1>
              <form>
                {/* <header className="footer-title text-white">SUBSCRIBE OUR NEWSLETTER</header> */}
                <fieldset className="form-control w-80">
                  {/* <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label> */}
                  <div className="join lg:w-[648px] w-[350px] h-[60px]">
                    <input type="text" placeholder="Email Address" className={`${dm_sans.className} input input-bordered join-item h-[60px] w-[448px] bg-[#5C5C5C] text-[#D6D6D6] placeholder:text-[#D6D6D6]`} />

                    <button className={`${dm_sans.className} btn bg-[#99D31B] px-[8px] py-[21px] h-[60px] text-white rounded-lg join-item border-4 border-[#5C5C5C]`}>Subscribe Now</button>

                  </div>
                </fieldset>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="py-[36px] text-center">
        <div className="container">
          <a href="#" className={`${dm_sans.className} mr-1 lg:px-1 text-[#D6D6D6]`}>
            Copyright 2023 Theme by <span className={`${dm_sans.className} text-[#99D31B] lg:text-[18px] text-[12px]`}>Sparktech.Agency</span> | All Rights Reserved
          </a>

        </div>
      </div>

      <div className='relative'>
        <img className="absolute -top-[150px] left-[180px] animate-round-rotate360 -z-0 lg:visible invisible" src="/images/shape/6.png" alt="" />
        <img className="absolute -top-[250px] right-[180px] animate-round-rotate -z-0 lg:visible invisible" src="/images/shape/4.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
