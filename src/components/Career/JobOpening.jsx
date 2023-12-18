import React from 'react';
import style from '@/styles/job.opening.module.css'
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const JobOpening = () => {
    return (
        <div>
            <div className={`${style.bkImage}`}>
                <div className="container mt-[100px]">

                    <div className='text-center pt-[100px]'>
                        <h2 className="text-3xl text-white font-family: Roboto; text-[54px] font-normal mt-[15px]">Being our Team mate</h2>
                    </div>

                    <div class="divide-y divide-white">
                        <div class="text-center py-2  pt-[70px]"></div>

                        <div class="">
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
                                    <Button className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4 text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
                                        <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div class="">
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
                                    <Button className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4 text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
                                        <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div class="text-center py-2"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobOpening;