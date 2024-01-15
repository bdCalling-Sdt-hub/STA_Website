import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PortfolioList from '../../../public/db/portfolio.json'
import BreadcrumbsDetails from '@/components/Portfolio/BreadcrumbsDetails';
import Testimonial from '@/components/Portfolio/Testimonial';
import Achievement from '@/components/Portfolio/Achievement';
import PortfolioRelated from '@/components/Portfolio/PortfolioRelated';
import FreeConsulting from '@/components/Portfolio/FreeConsulting';
import { dm_sans, poppins } from '../_app';
import Link from 'next/link';
import CaseStaudy from '@/components/Portfolio/CaseStaudy';

const PortfolioDetails = () => {

    const route = useRouter();
    const iconTitle = route.query.id;
    console.log(iconTitle)
    const { portfolioList } = PortfolioList;
    const portfolio = portfolioList?.find(portfolio => portfolio?.iconTitle?.toString() === iconTitle);
    console.log(portfolio)




    return (
        <div>
            <BreadcrumbsDetails />
            <div className="grid grid-cols-12 container lg:mt-[150px] mt-[60px] gap-x-8">
                <div className='lg:col-span-8 col-span-12'>

                    <Link href={`/portfolio/${portfolio?.iconTitle}/${portfolio?.projectInfo?.tag}`}>
                        <div className='relative'>
                            <img src="/images/portfolio/portfolio-bg-v.png" alt="banner image" />
                            <img className='absolute top-0 lg:mt-[58px] mt-[28px] lg:ms-[198px] ms-[88px] lg:h-[368px] h-[141px] lg:w-[475px] w-[216px]' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={portfolio?.bottomImage} alt="banner image" />
                        </div>
                    </Link>
                    <p className={`${poppins.className}  lg:text-[50px] text-[24px] lg:mt-0 mt-[30px] text-white font-semibold`} data-aos="fade-right">{portfolio?.iconTitle}</p>
                    <p className={`${dm_sans.className} text-[#D6D6D6] text-[22px] font-medium`} data-aos="fade-left">{portfolio?.title.join(" - ")}</p>
                </div>

                <div style={{ boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.07)", borderRadius: "15px", height: "280px" }}
                    className='lg:col-span-4 col-span-12 lg:mt-0 mt-[30px] lg:w-[424px]' data-aos="fade-down">
                    <div className='h-[90px] border border-[#99D31B] text-center rounded-t-xl flex items-center justify-center'>
                        <p className={`${poppins.className} text-white text-[34px] font-semibold justify-center`}>Project Information</p>
                    </div>
                    <div className={`${dm_sans.className} text-start text-white p-4`}>
                        <p>CLIENT DOMAIN</p>
                        <p>{portfolio?.projectInfo?.domainName}</p>
                    </div>
                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />
                    <div className={`${dm_sans.className} text-start text-white p-4`}>
                        <p>CATEGORY</p>
                        <p>{portfolio?.projectInfo?.category}</p>
                    </div>

                </div>
            </div>

            <hr className='container' style={{ marginTop: "100px", borderColor: '#5C5C5C' }} />

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12' data-aos="fade-right">
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`}>About the Project</p>
                </div>
                <div className='lg:col-span-9 col-span-12 mb-[150px] lg:mt-0 mt-[20px]' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5]`}>Experience Trendy Project, a showcase of fashion Trendys made simple. Begin with a stylish animated Runwey, then customize your journey by selecting your gender.</p>
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5] mt-[30px]`}>Explore occasions like Summer or Dinner Date, discovering curated 10-second fashion videos of modeled store outfits.</p>
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5] mt-[30px]`}>Want to join the Runwey? Upload your 10-second fashion statement and be part of the style conversation. Its about effortless fashion exploration tailored just for you.</p>
                </div>
            </div>


            <div className='relative'>
                <img className='lg:h-[700px] h-[272px] w-full' src="/images/footer-bg 1.png" alt="banner image" />
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='absolute top-0 lg:h-[643px] h-[242px] lg:w-[486px] lg:mt-[56px] mt-[30px] lg:ms-[722px] ms-[122px]' src="/images/phone-hand.png" alt="banner image" />
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Problems</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] lg:mt-0 mt-[20px] font-normal text-[#F5F5F5]`}>Tamara wanted to add a feature that would allow users to browse stores with greater convenience and make purchases without having to leave the app.</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Challanges</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5]`}>Our Design challenges included optimizing user flow for one-tap checkout, ensuring payment security, maintaining consistency & compatibility across devices for a seamless user experience.</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Our Solutions</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5]`}>We integrated a “One-tap checkout” option that allows users to quickly complete their purchases without the need for multiple steps. Also, We applied minimalist design, ensuring that the app provides an aesthetic and engaging experience.</p>
                </div>
            </div>


            <Testimonial></Testimonial>

            <Achievement></Achievement>

            <div className='text-white grid grid-cols-12 mt-[150px] container'>
                <div className='lg:col-span-3 col-span-12' data-aos="fade-right">
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`}>Features</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] lg:mt-0 mt-[20px] font-normal text-[#F5F5F5]`}>Our collective endeavors aimed to offer Tamara&#39;s users a more captivating, efficient, and delightful platform experience.</p>
                </div>
            </div>

            <PortfolioRelated></PortfolioRelated>

            <FreeConsulting></FreeConsulting>


            <div className=''>
                <img className="absolute top-[1250px] left-[120px] lg:visible hidden animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute top-[1150px] right-[120px] lg:visible hidden animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute top-[6150px] right-[120px] lg:visible hidden animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute top-[6150px] right-[120px] lg:visible hidden animate-round-rotate" src="/images/shape/4.png" alt="" />

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] lg:visible hidden animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />


                <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                <img className="absolute top-[4350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
            </div>

        </div>
    );
};

export default PortfolioDetails;

PortfolioDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}