import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import portfolio from "../../../public/db/portfolio.json";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { dm_sans, poppins } from '@/pages/_app';

const OurClients = () => {

    const swiperContainerStyle = {
        width: "100%",
        padding: "50px 0",
    };

    const ourClinets = [
        "/images/c1.png",
        "/images/c2.png",
        "/images/c3.png",
        "/images/c4.png",
        "/images/c5.png",
        "/images/c5.png",
        "/images/c5.png",
        "/images/c5.png",
    ]

    return (
        <div className="pt-[150px] pb-14 container">

            <div className='text-center'>
                {/* <div data-aos="zoom-in">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>OUR CLIENTS</p>
                    <h1 className={`${poppins.className} mt-[15px] font-semibold lg:text-[54px] text-[30px] leading-tights`}>
                        <span className="text-white">We Have Had The Pleasure Of</span>
                        <br />
                        <span className="text-white">Working Some Clients</span>
                    </h1>

                </div> */}
                <div data-aos="zoom-in">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>OUR PARTNERS</p>
                    <h1 className={`${poppins.className} mt-[15px] font-semibold lg:text-[54px] text-[30px] leading-tights`}>
                        <span className="text-white">Empowering Your Vision</span>
                        <br />
                        <span className="text-white">Our Supportive Partnerships</span>
                    </h1>

                </div>


                <Swiper
                    spaceBetween={18}
                    breakpoints={{
                        428: { slidesPerView: 3 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                        1920: { slidesPerView: 5 },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    style={swiperContainerStyle}
                    modules={[Autoplay]}
                >
                    {ourClinets.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative group mt-[15px]'>
                                <div className="flex flex-col items-center">
                                    <img className='mt-[50px]' src={client} alt="" />

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className="relative">
                <img className="absolute bottom-[50px] right-[250px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
                <img className="absolute bottom-[100px] left-[250px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
            </div>

        </div>
    );
};

export default OurClients;