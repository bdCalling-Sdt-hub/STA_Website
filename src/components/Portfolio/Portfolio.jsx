import React from 'react';
import style from '@/styles/portfolio.module.css'
import PortfolioList from '../../../public/db/portfolio.json'


const Portfolio = () => {

    const { portfolioList } = PortfolioList;

    return (
        <div className='container grid grid-cols-2 mt-[150px] gap-4'>
            {
                portfolioList.map((portfolio, index) => (
                    <div key={index}>
                        <div className={`${style.bkImage} flex flex-col items-center`}>
                            <div className='flex items-center pt-[80px] gap-1'>
                                <img className='w-[85px] h-[85px]' src={portfolio.icon} alt="" />
                                <p className='w-[356px] text-[50px] text-white font-semibold'>{portfolio.iconTitle}</p>
                            </div>
                            <img className={`w-[475px] text-[50px] pt-[60px] hover:scale-125 ${style.bottomImage}`} src={portfolio.bottomImage} alt="" />
                        </div>
                        <div>
                            <p className='text-[#99D31B] text-[34px] font-semibold font-family: Roboto mt-[20px]'>{portfolio.iconTitle}</p>
                            <p className='text-white text-[22px] font-medium font-family: Roboto mt-[20px] mb-[48px]'>Mobile App UI/UX Design</p>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default Portfolio;