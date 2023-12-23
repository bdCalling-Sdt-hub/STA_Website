import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/portfolio.achievment.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const Achievement = () => {
    return (
        <div className={`mt-[200px]  ${style.bkImage}`}>

            <div className={`text-center`}>

                <div className="container grid grid-cols-3 mt-[124px] gap-y-[64px]">

                    <div className='relative group'>
                        <div className='my-auto mt-[112px]' data-aos="zoom-in">
                            <p className={`${dm_sans.className} text-[#99D31B] text-[24px] font-family: Roboto font-semibold text-start px-[30px]`}>PROCESS</p>

                            <p className={`${poppins.className} text-[#F7F9F3] text-[44px] mt-[10px] font-family: Roboto font-semibold text-start px-[30px]`}>Design Process</p>
                        </div>
                    </div>

                    <div className='relative group -skew-y-6'>
                        <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                            <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>01</h1>
                            </div>

                            <div className='my-auto skew-y-6'>
                                <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Research</p>
                                <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                <p className={`${dm_sans.className} text-[#F7F9F3] text-[16px] mt-[10px] font-normal text-start px-[30px]`}>In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group -skew-y-6'>
                        <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                            <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>02</h1>
                            </div>

                            <div className='my-auto skew-y-6'>
                                <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Design</p>
                                <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                <p className={`${dm_sans.className} text-[#F7F9F3] text-[16px] mt-[10px] font-normal text-start px-[30px]`}>During the design phase, we create wireframes and prototypes, visually conceptualizing solutions. These serve as blueprints for the user interface&#39;s structure, layout, and functionality.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group -skew-y-6'>
                        <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                            <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>03</h1>
                            </div>

                            <div className='my-auto skew-y-6'>
                                <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Testing</p>
                                <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                <p className={`${dm_sans.className} text-[#F7F9F3] text-[16px] mt-[10px] font-normal text-start px-[30px]`}>In the testing phase, we gather user feedback on prototypes, assess usability, and refine designs. This iterative process ensures the final product meets user expectations and needs</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group -skew-y-6'>
                        <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                            <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>04</h1>
                            </div>

                            <div className='my-auto skew-y-6'>
                                <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Implementation</p>
                                <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                <p className={`${dm_sans.className} text-[#F7F9F3] text-[16px] mt-[10px] font-normal text-start px-[30px]`}>In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group -skew-y-6'>
                        <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                            <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>05</h1>
                            </div>

                            <div className='my-auto skew-y-6'>
                                <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Iteration</p>
                                <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                <p className={`${dm_sans.className} text-[#F7F9F3] text-[16px] mt-[10px] font-normal text-start px-[30px]`}>In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Achievement;