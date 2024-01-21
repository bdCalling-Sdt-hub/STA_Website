import { dm_sans } from "@/pages/_app";
import TopHeading from "../Common/TopHeading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const JoinUs = () => {
  return (
    <div className="container mt-[228px]" data-aos="fade-down">
      <div className="h-14 rounded-t-3xl bg-[#99D31B]">
      </div>

      <div className="relative lg:p-[84px] p-4 mb-[84px] rounded-3xl -mt-6 bg-gradient-to-b from-[#1a1a19] to-[#323131]">
        {/* <img className="absolute top-[100px] right-0 z-0 lg:visible invisible" src="/images/message.png" alt="" /> */}
        <TopHeading blueText={'Contacts'} description="Get free consultation" />
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <Input placeholder="Full Name" className={`${dm_sans.className} bg-[#333333] border-0 text-white placeholder:text-white`} />
          <Input placeholder="Address" className={`${dm_sans.className} bg-[#333333] border-0 text-white placeholder:text-white`} />
        </div>
        <Textarea
          placeholder="Your Message"
          className={`${dm_sans.className} h-[225px] mt-4 bg-[#333333] border-0 text-white placeholder:text-white`}
        />

        <div className="text-center">
          <Button className={`${dm_sans.className} bg-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all hover:bg-[#99D31B]`}>
            SEND MASSAGE
          </Button>
        </div>
        {/* <img className="absolute bottom-[50px] left-0 z-0 lg:visible invisible" src="/images/message.png" alt="" /> */}
      </div>

      <div className='relative'>
        <img className="absolute lg:visible hidden -bottom-[300px] -left-[300px] w-[400px] h-[896px]" src="/images/shape/9.png" alt="" />
        <img className="absolute lg:visible hidden -top-[80px] -left-[200px] animate-round-rotate" src="/images/shape/7.png" alt="" />
        <img className="absolute lg:visible hidden -top-[30px] right-[900px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
        <img className="absolute lg:visible hidden top-[0px] right-[500px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
        <img className="absolute lg:visible hidden -top-[120px] -right-[100px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        <img className="absolute lg:visible hidden -top-[450px] -right-[50px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
      </div>

    </div>
  );
};

export default JoinUs;
