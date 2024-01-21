import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import portfolio from "../../../public/db/portfolio.json";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { dm_sans, poppins } from '@/pages/_app';
import Link from 'next/link';

const Portfolio = () => {

    const { portfolioList } = portfolio;
    const swiperContainerStyle = {
        width: "100%",
        padding: "50px 0",
    };

    return (
        <div className="relative h-auto pt-[190px] pb-14 z-20">

            <div className='text-center'>
                <div data-aos="zoom-in">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>PORTFOLIO</p>
                    <h1 className={`${poppins.className} mt-[15px] font-semibold lg:text-[54px] text-[30px] lg:leading-tight`}>
                        <span className="text-white">Let&#39;s Check Some Awesome Work</span>
                        <br />
                        <span className="text-white">From SparkTech</span>
                    </h1>
                </div>



                <div
                // data-aos="flip-left"
                //     data-aos-easing="ease-out-cubic"
                //     data-aos-duration="2000"
                >
                    <Swiper
                        spaceBetween={18}
                        slidesPerView={1}
                        breakpoints={{
                            428: {
                                slidesPerView: 1.5,
                                spaceBetween: 18,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 18,
                            },
                        }}
                        style={swiperContainerStyle}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {portfolioList.map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative group mt-[70px]' data-aos="zoom-in">
                                    <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px]  hover:bg-gradient-to-t from-[#99d31bc3] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                                        <img className='mt-[30px] h-[50px] w-[50px]' src={portfolio.icon} alt="" />
                                        <p className={`${poppins.className} text-[24px] text-white`}>{portfolio.iconTitle}</p>
                                        <div className='mt-[33px] flex gap-3'>
                                            {portfolio.title.map((t, index) => (
                                                <p key={index} className={`${dm_sans.className} flex items-center group-hover:bg-[#99D31B] h-[26px] bg-[#5C5C5C] lg:p-4 p-2 rounded-full text-white text-[10px]`}>{t}</p>
                                            ))}
                                        </div>
                                        <img className='mt-[50px]' src={portfolio.bottomImage} alt="" />
                                        <Link href={`/portfolio/${portfolio.id}`}>
                                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



                <div className="relative">
                    <img className="absolute bottom-[540px] left-[170px] animate-round-rotate -z-10" src="/images/shape/11.png" alt="" />
                    <img className="absolute top-[10px] left-[100px] animate-round-rotate -z-10" src="/images/shape/11.png" alt="" />
                    <img className="absolute top-[10px] right-[150px] animate-round-rotate360 -z-10" src="/images/shape/6.png" alt="" />
                </div>


            </div>

        </div>
    );
};

export default Portfolio;