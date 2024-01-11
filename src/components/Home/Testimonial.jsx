import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../../../public/db/testimonial.json";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dm_sans, poppins } from "@/pages/_app";

const Testimonial = () => {
  const { testimonialList } = testimonials;

  const swiperContainerStyle = {
    width: "100%",
    padding: "0px 18px",
  };

  return (
    <div className="container mt-[209px]" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div>
        <HeadingText sTitle={"TESTIMONIAL"} title={"Some Words From Our"} subTitle={"Happy Clients"} />
      </div>

      <div className="grid grid-cols-12">

        <div className="lg:col-span-6 col-span-12">
          <Swiper
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            modules={[Navigation]}
            spaceBetween={60}
            // slidesPerView={1}
            navigation={
              true}
            style={swiperContainerStyle}
          >
            {testimonialList.map((testimonial, index) => (
              <SwiperSlide key={index} className="mt-16">
                <div className="p-5 relative w-[424px] h-[400px] text-center">

                  <div className="absolute top-4 -left-4">
                    <Image
                      src={testimonial?.qutes66}
                      className="w-[36px] h-[29px]"
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>
                  <p className={`${dm_sans.className} text-white text-start lg:w-[424px] h-[200px] lg:text-[24px] text-[20px] ml-2`}>{testimonial?.feedback}</p>
                  <div className="absolute lg:bottom-32 bottom-40 lg:-right-2 right-20 p-1 ">
                    <Image
                      src={testimonial?.qutes99}
                      className="w-[36px] h-[29px]"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>

                  <div>
                    <div className="mt-8 ms-8 text-left">
                      <h2 className={`${poppins.className} text-[#99D31B] text-[24px] font-normal`}>{testimonial?.name}</h2>
                      <p className={`${dm_sans.className} text-white text-[16px] font-normal`}>{testimonial?.designation}</p>
                    </div>
                  </div>
                </div>


              </SwiperSlide>
            ))
            }
          </Swiper >
        </div>

        <div className="lg:col-span-6 col-span-12 lg:mt-[0px] mt-[50px]" data-aos="zoom-in">
          <img className="mt-[40px]" src="/images/testimonial-image.png" alt="" />
        </div>


        <div className='relative lg:visible hidden'>
          <img className="absolute bottom-[00px] left-[950px] w-[1096px]" src="/images/shape/10.png" alt="" />
        </div>

      </div >

      <div className="relative hidden">
        <img className="absolute top-[0px] -left-[100px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        <img className="absolute top-[130px] -right-[180px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute bottom-[600px] -right-[150px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
      </div>
    </div >
  );
};

export default Testimonial;
