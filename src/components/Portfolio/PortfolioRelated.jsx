import React from 'react';
import style from '@/styles/portfolio.module.css'
import PortfolioList from '../../../public/db/portfolio.json'
import Link from 'next/link';
import { dm_sans, poppins } from '@/pages/_app';


const PortfolioRelated = () => {

    const { portfolioList } = PortfolioList;

    return (
        <div>
            <div className='my-auto mt-[150px] flex flex-col items-center justify-center' data-aos="zoom-in">
                <p className={`${dm_sans.className} text-[#99D31B] text-[24px] font-family: Roboto font-semibold text-start px-[30px]`}>Portfolio</p>

                <p className={`${poppins.className} text-[#F7F9F3] text-[54px] mt-[10px] font-family: Roboto font-semibold text-start px-[30px]s`}>Related Portfolio </p>
            </div>
            <div className='container grid grid-cols-2 mt-[75px] gap-4'>
                {
                    portfolioList.slice(0, 2).map((portfolio, index) => (
                        <Link href={`/portfolio/${portfolio.id}`} key={index}>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className={`${style.bkImage} flex flex-col items-center`}>
                                    <div className='flex items-center pt-[80px] gap-1'>
                                        <img className='w-[85px] h-[85px]' src={portfolio.icon} alt="" />
                                        <p className={`${poppins.className} w-[356px] text-[44px] text-white font-semibold`}>{portfolio.iconTitle}</p>
                                    </div>
                                    <img className={`w-[475px] text-[50px] pt-[60px] hover:scale-125 ${style.bottomImage}`} src={portfolio.bottomImage} alt="" />
                                </div>
                                <div>
                                    <p className={`${poppins.className} text-[#99D31B] text-[34px] font-semibold mt-[20px]`}>{portfolio.iconTitle}</p>
                                    <p className={`${dm_sans.className} text-white text-[22px] font-medium mt-[20px] mb-[48px]`}>Mobile App UI/UX Design</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default PortfolioRelated;