import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/services.achievement.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const Achievement = () => {
    return (
        <div className={`mt-[200px]  ${style.bkImage} z-50`}>

            <div className={`text-center z-50`}>

                <div className="container grid grid-cols-4 mt-[124px]">
                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>214+</h1>
                                <p className={`${dm_sans.className} text-white`}>Satisfied Customer</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>45+</h1>
                                <p className={`${dm_sans.className} text-white`}>Experience Team</p>
                            </div>


                        </div>
                    </div>
                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>1.5K+</h1>
                                <p className={`${dm_sans.className} text-white`}>Project Completed</p>
                            </div>


                        </div>
                    </div>
                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>15+</h1>
                                <p className={`${dm_sans.className} text-white`}>Winning Awards</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className="absolute top-[2650px] right-[420px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
            </div>

        </div>
    );
};

export default Achievement;