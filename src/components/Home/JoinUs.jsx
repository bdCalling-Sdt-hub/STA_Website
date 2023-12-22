import TopHeading from "../Common/TopHeading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const JoinUs = () => {
  return (
    <div className="container mt-[228px]" data-aos="fade-down">
      <div className="h-14 rounded-t-3xl bg-[#99D31B]">
      </div>

      <div className="relative p-[84px] mb-[84px] rounded-3xl -mt-6 bg-gradient-to-b from-[#353534] to-[#5C5C5C]">
        <img className="absolute top-[100px] right-0 z-0" src="/images/message.png" alt="" />
        <TopHeading blueText={'Contacts'} description="Get free consultation" />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <Input placeholder="Full Name" className="bg-[#333333] border-0 text-white placeholder:text-white" />
          <Input placeholder="Address" className="bg-[#333333] border-0 text-white placeholder:text-white" />
        </div>
        <Textarea
          placeholder="Your Message"
          className="h-[225px] mt-4 bg-[#333333] border-0 text-white placeholder:text-white"
        />
        <img className="absolute bottom-[50px] left-0 z-0" src="/images/message.png" alt="" />
      </div>

      <div className='relative'>
        <img className="absolute -bottom-[300px] -left-[300px] w-[400px] h-[896px]" src="/images/shape/9.png" alt="" />
        <img className="absolute -top-[80px] -left-[200px] animate-round-rotate" src="/images/shape/7.png" alt="" />
        <img className="absolute -top-[30px] right-[900px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
        <img className="absolute top-[0px] right-[500px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
        <img className="absolute -top-[120px] -right-[100px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        <img className="absolute -top-[450px] -right-[50px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
      </div>

    </div>
  );
};

export default JoinUs;
