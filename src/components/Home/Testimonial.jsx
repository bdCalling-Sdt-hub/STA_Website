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
        <HeadingText sTitle={"TESTIMONIAL"} title={"Some Words From Our Happy"} subTitle={"Clients"} />
      </div>

      <div className="grid grid-cols-2">

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
              <div className="p-5 relative w-[424px] text-center">

                <div className="absolute top-4 -left-4">
                  <Image
                    src={testimonial?.qutes66}
                    className="w-[36px] h-[29px]"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <p className="text-white text-start text-[24px] ml-2">{testimonial?.feedback}</p>
                <div className="absolute bottom-4 -right-2 p-1 ">
                  <Image
                    src={testimonial?.qutes99}
                    className="w-[36px] h-[29px]"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div>
                <div className="mt-8 ms-8">
                  <h2 className="text-[#99D31B] text-[24px] font-family: Roboto; font-normal">{testimonial?.name}</h2>
                  <p className="text-white  text-[16px] font-family: Roboto; font-normal">{testimonial?.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper >

        <div data-aos="zoom-in">
          <img className="mt-[40px]" src="/images/testimonial-image.png" alt="" />
        </div>


        <div className='relative'>
          <img className="absolute bottom-[00px] left-[950px] w-[1096px]" src="/images/shape/10.png" alt="" />
        </div>

      </div >

      <div className="relative">
        <img className="absolute top-[0px] -left-[100px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        <img className="absolute top-[130px] -right-[180px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute bottom-[600px] -right-[150px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
      </div>
    </div >
  );
};

export default Testimonial;
