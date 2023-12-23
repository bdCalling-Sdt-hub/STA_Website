import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/achievement.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const Achievement = () => {
    return (
        <div className=" h-auto mt-[200px] pb-14">

            <div className='text-center'>
                <div data-aos="zoom-in">
                    <p className={`${poppins.className} text-white text-[24px]`}><span className={`${poppins.className} text-[#99D31B] text-[24px]`}>We have a great</span> achievement</p>
                    <h1 className={`${poppins.className} font-semibold leading-tight text-[54px] mt-[15px]`}>
                        <span className="text-white">Our best achievement!</span>
                    </h1>
                </div>

                <div className="container grid grid-cols-4 mt-[124px]">
                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform -skew-y-6  h-[246px] w-[312px] ${style.card}`}>

                            <div className='my-auto skew-y-6'>
                                <h1 className={`${poppins.className} text-white text-[52px] font-semibold`}>214+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Saticfied Custimer</p>
                            </div>

                            <Button className="absolute -top-[40px] rounded-full h-[80px] w-[80px] bg-[#3F3E3E] border-none hover:bg-[#99D31B] group-hover:bg-[#99D31B]" variant="outline" size="icon">
                                <img className='' src="/images/a-setting.png" alt="" />
                            </Button>
                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform -skew-y-6  h-[246px] w-[312px] ${style.card}`}>

                            <div className='my-auto skew-y-6'>
                                <h1 className={`${poppins.className} text-white text-[52px] font-semibold`}>45+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Experience Team</p>
                            </div>

                            <Button className="absolute -top-[40px] rounded-full h-[80px] w-[80px] bg-[#3F3E3E] border-none hover:bg-[#99D31B] group-hover:bg-[#99D31B]" variant="outline" size="icon">
                                <img className='' src="/images/a-setting.png" alt="" />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform -skew-y-6  h-[246px] w-[312px] ${style.card}`}>

                            <div className='my-auto skew-y-6'>
                                <h1 className={`${poppins.className} text-white text-[52px] font-semibold`}>1.5K+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Project Completed</p>
                            </div>

                            <Button className="absolute -top-[40px] rounded-full h-[80px] w-[80px] bg-[#3F3E3E] border-none hover:bg-[#99D31B] group-hover:bg-[#99D31B]" variant="outline" size="icon">
                                <img className='' src="/images/a-setting.png" alt="" />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform -skew-y-6  h-[246px] w-[312px] ${style.card}`}>

                            <div className='my-auto skew-y-6'>
                                <h1 className={`${poppins.className} text-white text-[52px] font-semibold`}>15+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Winning Awards</p>
                            </div>

                            <Button className="absolute -top-[40px] rounded-full h-[80px] w-[80px] bg-[#3F3E3E] border-none hover:bg-[#99D31B] group-hover:bg-[#99D31B]" variant="outline" size="icon">
                                <img className='' src="/images/a-setting.png" alt="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <img className="absolute top-[2150px] right-[420px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
            </div>
        </div>
    );
};

export default Achievement;