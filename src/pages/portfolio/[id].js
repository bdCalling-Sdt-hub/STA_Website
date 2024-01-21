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
import { GoArrowUpRight } from "react-icons/go";
import { Button } from '@/components/ui/button';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

const PortfolioDetails = () => {

    const route = useRouter();
    const iconTitle = route.query.id;
    console.log(iconTitle)
    const { portfolioList } = PortfolioList;
    const portfolio = portfolioList?.find(portfolio => portfolio?.iconTitle?.toString() === iconTitle);
    console.log(portfolio)


    const swiperContainerStyle = {
        width: "100%",
        padding: "50px 0",
    };

    const ourClinets = [
        "/images/portfolio/resid/1.png",
        "/images/portfolio/resid/2.png",
        "/images/portfolio/resid/3.png",
        "/images/portfolio/resid/4.png",
        "/images/portfolio/resid/5.png",
        "/images/portfolio/resid/6.png",
        "/images/portfolio/resid/6.png",
        "/images/portfolio/resid/6.png",
    ]

    return (
        <div>
            <BreadcrumbsDetails />
            <div className="grid grid-cols-12 container lg:mt-[150px] mt-[60px] gap-x-8">
                <div className='lg:col-span-8 col-span-12'>

                    {/* <Link href={`/portfolio/${portfolio?.iconTitle}/${portfolio?.projectInfo?.tag}`}> */}
                    <div className='relative'>
                        <img src="/images/portfolio/portfolio-bg-v.png" alt="banner image" />
                        <img className='absolute top-0 lg:mt-[58px] mt-[28px] lg:ms-[198px] ms-[88px] lg:h-[368px] h-[141px] lg:w-[475px] w-[216px]' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" src={portfolio?.bottomImage} alt="banner image" />
                    </div>
                    {/* </Link> */}
                    <p className={`${poppins.className}  lg:text-[50px] text-[24px] lg:mt-0 mt-[30px] text-white font-semibold`} data-aos="fade-right">{portfolio?.iconTitle}</p>
                    <p className={`${dm_sans.className} text-[#D6D6D6] text-[22px] font-medium`} data-aos="fade-left">{portfolio?.title.join(" - ")}</p>
                </div>

                <div style={{ boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.07)", borderRadius: "15px", height: "450px" }}
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

                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />

                    <Link target="_blank" href={`${portfolio?.caseStudy}`}>
                        <div className={`${dm_sans.className} text-center text-white p-4`}>
                            <Button className={`${dm_sans.className} bg-[#99D31B] hover:bg-[#99D31B] mt-[60px] h-[60px] w-[185px] text-[18px] transition-all`}>
                                Case Study
                                <span className="ms-[10px]">
                                    <GoArrowUpRight />
                                </span>
                            </Button>
                        </div>
                    </Link>


                </div>
            </div>

            <hr className='container' style={{ marginTop: "100px", borderColor: '#5C5C5C' }} />

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12' data-aos="fade-right">
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`}>About the Project</p>
                </div>
                <div className='lg:col-span-9 col-span-12 mb-[150px] lg:mt-0 mt-[20px]' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-normal text-[#F5F5F5]`}>{portfolio?.aboutProject}</p>
                    {/* <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5] mt-[30px]`}>Explore occasions like Summer or Dinner Date, discovering curated 10-second fashion videos of modeled store outfits.</p>
                    <p className={`${dm_sans.className} lg:text-[34px] text-[16px] font-normal text-[#F5F5F5] mt-[30px]`}>Want to join the Runwey? Upload your 10-second fashion statement and be part of the style conversation. Its about effortless fashion exploration tailored just for you.</p> */}
                </div>
            </div>




            <div className='relative'>
                {/* <img className='lg:h-[700px] h-[272px] w-full' src="/images/footer-bg 1.png" alt="banner image" /> */}

                <Swiper
                    spaceBetween={18}
                    breakpoints={{
                        428: { slidesPerView: 3 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                        1920: { slidesPerView: 6 },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    style={swiperContainerStyle}
                    modules={[Autoplay]}
                >
                    {portfolio?.projectImage?.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative group'>
                                <div className="flex flex-col items-center">
                                    <img className='mt-[50px]' src={client} alt="" />

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='absolute top-0 lg:h-[643px] h-[242px] lg:w-[486px] lg:mt-[56px] mt-[30px] lg:ms-[722px] ms-[122px]' src="/images/phone-hand.png" alt="banner image" /> */}
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Problems</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[24px] text-[16px] lg:mt-0 mt-[20px] font-normal text-[#F5F5F5]`}>{portfolio?.problems}</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Challanges</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-normal text-[#F5F5F5]`}>{portfolio?.challanges}</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='lg:col-span-3 col-span-12'>
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`} data-aos="fade-right">Our Solutions</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-normal text-[#F5F5F5]`}>{portfolio?.solutions}</p>
                </div>
            </div>


            <Testimonial></Testimonial>

            <Achievement></Achievement>

            <div className='text-white grid grid-cols-12 mt-[150px] container'>
                <div className='lg:col-span-3 col-span-12' data-aos="fade-right">
                    <p className={`${poppins.className} lg:text-[24px] text-[22px] font-semibold`}>Features</p>
                </div>
                <div className='lg:col-span-9 col-span-12' data-aos="fade-left">
                    <p className={`${dm_sans.className} lg:text-[24px] text-[16px] lg:mt-0 mt-[20px] font-normal text-[#F5F5F5]`}>{portfolio?.features}</p>
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