import React from 'react';
import style from '@/styles/job.opening.module.css'
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const JobOpening = () => {
    return (
        <div>
            <div className={`${style.bkImage}`}>
                <div className="container mt-[100px]">

                    <div className='text-center pt-[100px]' data-aos="zoom-in">
                        <h2 className="text-3xl text-white font-family: Roboto; text-[54px] font-normal mt-[15px]">Being our Team mate</h2>
                    </div>

                    <div class="divide-y divide-white">
                        <div class="text-center py-2  pt-[70px]"></div>

                        <div class="" data-aos="fade-right">
                            <p className='text-white font-family: Roboto; text-[34px] font-semibold mt-[15px] pt-[41px]'>Sr, UI/UX Designer</p>
                            <div className='grid grid-cols-4 text-white  pt-[40px] pb-[51px]'>
                                <div>
                                    <p className='text-[18px]'>Address</p>
                                    <p className='text-[22px] pt-[25px]'>Dhaka,Bangaldesh</p>
                                </div>
                                <div>
                                    <p className='text-[18px]'>SALARY</p>
                                    <p className='text-[22px] pt-[25px]'>30k - 40k BDT</p>
                                </div>
                                <div>
                                    <p className='text-[18px]'>APPLY DEADLINE</p>
                                    <p className='text-[22px] pt-[25px]'>31-Oct-2023</p>
                                </div>
                                <div>
                                    <Button data-aos="flip-left" className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4 text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
                                        <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div class="" data-aos="fade-left">
                            <p className='text-white font-family: Roboto; text-[34px] font-semibold mt-[15px] pt-[41px]'>UI/UX Designers (Entry-Level)</p>
                            <div className='grid grid-cols-4 text-white  pt-[40px] pb-[51px]'>
                                <div>
                                    <p className='text-[18px]'>Address</p>
                                    <p className='text-[22px] pt-[25px]'>Dhaka,Bangaldesh</p>
                                </div>
                                <div>
                                    <p className='text-[18px]'>SALARY</p>
                                    <p className='text-[22px] pt-[25px]'>20k - 25k BDT</p>
                                </div>
                                <div>
                                    <p className='text-[18px]'>APPLY DEADLINE</p>
                                    <p className='text-[22px] pt-[25px]'>31-Oct-2023</p>
                                </div>
                                <div>
                                    <Button data-aos="flip-up" className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4 text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
                                        <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div class="text-center py-2"></div>

                    </div>

                </div>
            </div>

            <div className="relative">
                <img className="absolute -top-[1950px] right-[100px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute -top-[1400px] right-[300px] animate-round-rotate360 inline-block" src="/images/shape/2.png" alt="" />
                <img className="absolute -top-[1700px] right-[150px] animate-round-rotate inline-block" src="/images/shape/11.png" alt="" />

                <img className="absolute -top-[1950px] -left-[200px] -ms-[100px]" src="/images/shape/8.png" alt="" />
            </div>

            <div className="relative">
                <img className="absolute  -top-[150px] right-[250px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute -top-[100px] right-[150px] animate-round-rotate360 inline-block" src="/images/shape/2.png" alt="" />
                <img className="absolute -top-[200px] left-[150px] animate-round-rotate inline-block" src="/images/shape/11.png" alt="" />
                <img className="absolute -top-[450px] left-[150px] animate-round-rotate360 inline-block" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[100px] left-[450px] animate-round-rotate360 inline-block" src="/images/shape/6.png" alt="" />

                <img className="absolute -top-[400px] -right-[200px] -me-[100px]" src="/images/shape/8.png" alt="" />
            </div>

        </div>
    );
};

export default JobOpening;