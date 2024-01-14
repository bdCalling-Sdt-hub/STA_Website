import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/services.achievement.module.css'
import { dm_sans, poppins } from '@/pages/_app';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import IndustryList from '../../../public/db/services.json'

const Industry = () => {

    const swiperContainerStyle = {
        width: "100%",
        padding: "50px 0",
    };

    const { industryList } = IndustryList;

    return (
        <div className={`mt-[200px]`}>

            <div className='container flex flex-col items-center' data-aos="fade-down-right">
                <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-bold text-[#99D31B]`}>INDUSTRY</p>
                <p className={`${poppins.className} lg:text-[54px] text-[34px] font-semibold text-white leading-tight mt-[18px] text-center`}>
                    Do You Want to Create World-<br />
                    <span className='inline-block mx-auto'>Class Digital Products?</span>
                </p>
            </div>

            <Swiper
                spaceBetween={18}
                // slidesPerView={5}
                breakpoints={{
                    428: { slidesPerView: 1.3 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
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
                {industryList.map((industry, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative group'>
                            <div className="flex flex-col items-center">
                                <div className='relative group my-[100px]' data-aos="zoom-in">

                                    <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>
                                        <div className='my-auto text-center'>
                                            <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[26px] font-semibold`}>{industry.title}</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div>
                <img className="absolute top-[2650px] right-[420px] animate-round-rotate360" src="/images/shape/6.png" alt="" />

            </div>

            {/* <div className="relative">
                <img className="absolute top-[0px] -left-[100px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[130px] -right-[180px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute bottom-[600px] -right-[150px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
            </div> */}

        </div>
    );
};

export default Industry;