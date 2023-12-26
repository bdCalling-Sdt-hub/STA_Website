import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/services.achievement.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const Achievement = () => {
    return (
        <div className={`mt-[150px]`}>

            <div className={`text-center`}>

                <div className="container grid grid-cols-3 mt-[124px]">
                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[290px] w-[424px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto flex flex-col justify-center items-center'>
                                <img className='items-center justify-center' src="/images/phones.png" alt="" />
                                <p className={`${dm_sans.className} text-white text-[24px] mt-[10px] font-medium`}>Phone Number</p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>+88 01321231802</p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>+88 01321231802</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[290px] w-[424px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto flex flex-col justify-center items-center'>
                                <img className='items-center justify-center' src="/images/location.png" alt="" />
                                <p className={`${dm_sans.className} text-white text-[24px] mt-[10px] font-medium`}>Address line</p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>House 35 -Floor - 2, Block - B, Road-2,  </p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>Banasree, Dhaka-1219.</p>
                            </div>


                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[290px] w-[424px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto flex flex-col justify-center items-center'>
                                <img className='items-center justify-center' src="/images/support.png" alt="" />
                                <p className={`${dm_sans.className} text-white text-[24px] mt-[10px] font-medium`}>24/7 Support</p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>Saturday - Friday</p>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[10px] font-normal`}>09:00 AM - 06:00 PM</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            <div>
                <img className="absolute top-[2650px] right-[220px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[2850px] left-[120px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[2150px] -right-[100px] w-[400px] me-[100px]" src="/images/shape/10.png" alt="" />
            </div>

        </div>
    );
};

export default Achievement;