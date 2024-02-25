import React from 'react';
import style from '@/styles/portfolio.module.css'
import PortfolioList from '../../../public/db/portfolio.json'
import Link from 'next/link';
import { dm_sans, poppins } from '@/pages/_app';


const Portfolio = () => {

    const { portfolioList } = PortfolioList;

    console.log(portfolioList)

    return (
        <div className=''>
            <div className='container grid lg:grid-cols-2 grid-cols-1 mt-[150px] gap-4 z-50'>
                {
                    portfolioList.map((portfolio, index) => (
                        <Link href={`/portfolio/${portfolio.iconTitle}`} key={index}>
                            <div className='z-50' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className={`${style.bkImage} flex flex-col items-center`}>
                                    <div className='flex items-center pt-[80px] gap-1'>
                                        <img className='w-[85px] h-[85px]' src={portfolio.icon} alt="" />
                                        <p className={`${poppins.className} w-[356px] text-[44px] text-white font-semibold`}>{portfolio.iconTitle}</p>
                                    </div>
                                    <img className={`lg:w-[475px] w-[284px] lg:h-[372px] h-[222px] text-[50px] pt-[60px] hover:scale-125 ${style.bottomImage}`} src={portfolio.bottomImage} alt="" />
                                </div>
                                <div>
                                    <p className={`${poppins.className} text-[#99D31B] text-[34px] font-semibold font-family: Roboto mt-[20px]`}>{portfolio.iconTitle}</p>
                                    <p className={`${dm_sans.className} text-white text-[22px] font-medium font-family: Roboto mt-[20px] mb-[48px]`}>Mobile App UX/UI Design</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }



            </div>

            <div className=''>
                <img className="absolute top-[1250px] left-[120px] hidden lg:visible animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute top-[1150px] right-[120px] hidden lg:visible animate-round-rotate" src="/images/shape/4.png" alt="" />

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] hidden lg:visible animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[550px] -left-[100px] lg:w-[300px] w-[200px] mt-[300px] ms-[100px] z-50" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[2350px] -left-[100px] lg:w-[300px] w-[200px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />


                <img className="absolute top-[3100px] -right-[100px] lg:w-[400px] w-[200px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
            </div>

        </div>
    );
};

export default Portfolio;