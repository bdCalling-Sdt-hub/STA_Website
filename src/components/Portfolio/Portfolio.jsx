import React from 'react';
import style from '@/styles/portfolio.module.css'
import PortfolioList from '../../../public/db/portfolio.json'
import Link from 'next/link';


const Portfolio = () => {

    const { portfolioList } = PortfolioList;

    return (
        <div className=''>
            <div className='container grid grid-cols-2 mt-[150px] gap-4 z-50'>
                {
                    portfolioList.map((portfolio, index) => (
                        <Link href={`/portfolio/${portfolio.id}`} key={index}>
                            <div className='z-50' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
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
                        </Link>
                    ))
                }



            </div>

            <div className=''>
                <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />


                <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
            </div>

        </div>
    );
};

export default Portfolio;