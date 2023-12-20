import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import portfolio from "../../../public/db/portfolio.json";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

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
                    <p className="text-[#99D31B] text-[24px]">PORTFOLIO</p>
                    <h1 className="mt-[15px] text-4xl font-normal text-[54px] leading-tight font-family: 'Roboto',">
                        <span className="text-white">Let's Check Some Awesome Work</span>
                        <br />
                        <span className="text-white">From SparkTech</span>
                    </h1>
                </div>



                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <Swiper
                        spaceBetween={18}
                        slidesPerView={5}
                        style={swiperContainerStyle}
                    >
                        {portfolioList.map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative group mt-[70px]'>
                                    <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                                        <img className='mt-[30px] h-[50px] w-[50px]' src={portfolio.icon} alt="" />
                                        <p className='text-[24px] text-white'>{portfolio.iconTitle}</p>
                                        <div className='mt-[33px] flex gap-3'>
                                            {portfolio.title.map((t, index) => (
                                                <p key={index} className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>{t}</p>
                                            ))}
                                        </div>
                                        <img className='mt-[50px]' src={portfolio.bottomImage} alt="" />
                                        <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                            <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>




                {/* <div className="grid grid-flow-col gap-5 overflow-x-auto">
                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group'>
                        <div className="flex flex-col items-center border-[1px] bg-[#222222] border-[#222222] transform rounded-[10px] h-[528px] w-[372px] hover:bg-gradient-to-t from-[#99D31B] via-[#222222] to-[#222222] hover:border-[#99D31B]  transition duration-700">
                            <img className='mt-[30px]' src="/images/shaadii-biyaah.png" alt="" />
                            <div className='mt-[33px] flex gap-3'>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                                <p className='bg-[#5C5C5C] p-4 rounded-full text-white text-[10px]'>UI/UX Design</p>
                            </div>
                            <img className='mt-[50px]' src="/images/shaadii-biyaah-app.png" alt="" />
                            <Button className="hidden absolute right-0 bottom-1 rounded-full h-[40px] w-[40px] bg-white group-hover:flex me-2 mb-2" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='#99D31B' />
                            </Button>
                        </div>
                    </div>
                </div> */}


            </div>

        </div>
    );
};

export default Portfolio;