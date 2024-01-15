import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import style from '@/styles/services.achievement.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const Achievement = () => {

    const achievementList = [
        {
            title: 'Satisfied Customer',
            count: '214+'
        },
        {
            title: 'Experience Team',
            count: '45+'
        },
        {
            title: 'Project Completed',
            count: '1.5k+'
        },
        {
            title: 'Winning Awards',
            count: '15+'
        },
    ]

    return (
        <div className={`mt-[200px]  ${style.bkImage}`}>

            <div className={`text-center`}>

                <div className="container grid lg:grid-cols-4 grid-cols-1 mt-[124px] gap-4">

                    {achievementList.map((achievement, index) => (
                        <div key={index} className='relative group my-[20px] lg:my-[100px]' data-aos="zoom-in">
                            <div className={`flex flex-col items-center transform h-[197px] lg:w-[312px] w-full ${style.card} hover:bg-[#99D31B]`}>

                                <div className='my-auto text-center'>
                                    <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-2xl lg:text-[52px] font-semibold`}>{achievement.count}</h1>
                                    <p className={`${dm_sans.className} text-white text-sm lg:text-base`}>{achievement.title}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* <div className="container grid lg:grid-cols-4 grid-cols-1 lg:mt-[124px]">
                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>214+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Satisfied Customer</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>45+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Experience Team</p>
                            </div>


                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>1.5K+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Project Completed</p>
                            </div>


                        </div>
                    </div>

                    <div className='relative group my-[100px]' data-aos="zoom-in">
                        <div className={`flex flex-col items-center transform h-[197px] w-[312px] ${style.card} hover:bg-[#99D31B]`}>

                            <div className='my-auto'>
                                <h1 className={`${poppins.className} group text-[#99D31B] group-hover:text-white text-[52px] font-semibold`}>15+</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[10px] font-normal`}>Winning Awards</p>
                            </div>


                        </div>
                    </div>
                </div> */}
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