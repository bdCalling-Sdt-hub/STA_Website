import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import TopHeading from "../Common/TopHeading";
import { FaArrowRight } from "react-icons/fa6";
import { dm_sans } from "@/pages/_app";

const FormSection = () => {

  return (
    <div className="grid grid-cols-1 gap-14 my-16 container">
      <div>
        <img className="absolute top-[100px] right-0 z-0" src="/images/message.png" alt="" />
        <form action="https://formspree.io/f/xbjndjew" method="POST">
          <div className="grid grid-cols-2 gap-8 mt-8">
            <Input data-aos="fade-right"
              required
              name="first-name"
              placeholder="First Name*"
              className="bg-[#333333] border border-white rounded-md p-2 text-white placeholder:text-white"
            />
            <Input data-aos="fade-left"
              required
              name="last-name"
              placeholder="Last Name*"
              className="bg-[#333333] border border-white rounded-md p-2 text-white placeholder:text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <Input data-aos="fade-right"
              required
              name="email"
              placeholder="Email Address*"
              className="bg-[#333333] border border-white rounded-md p-2 text-white placeholder:text-white"
            />
            <Input data-aos="fade-left"
              required
              name="number"
              placeholder="Phone Number*"
              className="bg-[#333333] border border-white rounded-md p-2 text-white placeholder:text-white"
            />
          </div>
          <Textarea data-aos="zoom-in"
            name="message"
            placeholder="Enter Your Message"
            className="h-[225px] mt-4 bg-[#333333] border border-white rounded-md p-2 text-white placeholder:text-white"
          />

          <div className="text-center" data-aos="fade-down-left">
            <Button type="submit" className={`${dm_sans.className} w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white mt-[85px] text-[18px] font-normal px-[30px] py-[20px]`}>SEND MASSAGE
              {/* <span className='ms-2'><FaArrowRight></FaArrowRight></span> */}
            </Button>
          </div>
        </form>
      </div>


    </div >
  );
};

export default FormSection;
