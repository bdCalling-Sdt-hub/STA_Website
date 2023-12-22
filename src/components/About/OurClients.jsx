import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import portfolio from "../../../public/db/portfolio.json";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

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
        <div className="pt-[190px] pb-14 container">

            <div className='text-center'>
                <div data-aos="zoom-in">
                    <p className="text-[#99D31B] text-[24px]">OUR CLIENTS</p>
                    <h1 className="mt-[15px]font-normal text-[54px] leading-tight font-family: 'Roboto',">
                        <span className="text-white">We Have Had The Pleasure Of</span>
                        <br />
                        <span className="text-white">Working Some Clients</span>
                    </h1>

                </div>


                <Swiper
                    spaceBetween={18}
                    slidesPerView={5}
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