import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PortfolioList from '../../../public/db/portfolio.json'
import BreadcrumbsDetails from '@/components/Portfolio/BreadcrumbsDetails';
import Testimonial from '@/components/Portfolio/Testimonial';
import Achievement from '@/components/Portfolio/Achievement';
import PortfolioRelated from '@/components/Portfolio/PortfolioRelated';
import FreeConsulting from '@/components/Portfolio/FreeConsulting';

const PortfolioDetails = () => {

    const route = useRouter();
    const id = route.query.id;
    const { portfolioList } = PortfolioList;
    const portfolio = portfolioList.find(portfolio => portfolio.id.toString() === id);
    console.log(portfolio)

    return (
        <div>
            <BreadcrumbsDetails />

            <div className="grid grid-cols-12 container mt-[150px] gap-x-8">
                <div className='col-span-8'>
                    <div className='relative'>
                        <img src="/images/portfolio/portfolio-bg-v.png" alt="banner image" />
                        <img className='absolute top-0 mt-[58px] ms-[198px] h-[368px]' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" src={portfolio.bottomImage} alt="banner image" />
                    </div>
                    <p className='w-[356px] text-[50px] text-white font-family: Roboto font-semibold' data-aos="fade-right">{portfolio.iconTitle}</p>
                    <p className='text-[#D6D6D6] text-[22px] font-family: Roboto font-medium' data-aos="fade-left">{portfolio.title.join(" - ")}</p>
                </div>

                <div style={{ boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.07)", borderRadius: "15px" }} className='col-span-4 w-[424px]' data-aos="fade-down">
                    <div className='h-[90px] border border-[#99D31B] text-center rounded-t-xl flex items-center justify-center'>
                        <p className='text-white text-[34px] font-semibold font-family: Roboto justify-center'>Project Information</p>
                    </div>
                    <div className='text-start text-white p-4'>
                        <p>CLIENT NAME</p>
                        <p>Omar Aly</p>
                    </div>
                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />
                    <div className='text-start text-white p-4'>
                        <p>CLIENT NAME</p>
                        <p>Omar Aly</p>
                    </div>
                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />
                    <div className='text-start text-white p-4'>
                        <p>CLIENT NAME</p>
                        <p>Omar Aly</p>
                    </div>
                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />
                    <div className='text-start text-white p-4'>
                        <p>CLIENT NAME</p>
                        <p>Omar Aly</p>
                    </div>
                    <hr style={{ marginLeft: '15px', marginRight: '15px', borderColor: '#5C5C5C' }} />
                    <div className='text-start text-white p-4'>
                        <p>CLIENT NAME</p>
                        <p>Omar Aly</p>
                    </div>
                </div>
            </div>

            <hr className='container' style={{ marginTop: "100px", borderColor: '#5C5C5C' }} />

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='col-span-3' data-aos="fade-right">
                    <p className='font-family: Roboto text-[24px] font-semibold'>About the Project</p>
                </div>
                <div className='col-span-9 mb-[150px]' data-aos="fade-left">
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] '>The Tamara project revolves around optimizing the largest BNPL (Buy Now, Pay Later) platform in Saudi Arabia, Tamara.</p>
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] mt-[30px]'>Our collaboration involved adding innovative features and refining the platform&#39;s design for enhanced aesthetics and user experience.</p>
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] mt-[30px]'>The result was an expanded set of capabilities that elevated user engagement on the Tamara platform.</p>
                </div>
            </div>


            <div className='relative'>
                <img className='h-[700px] w-full' src="/images/footer-bg 1.png" alt="banner image" />
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='absolute top-0 mt-[56px] ms-[722px]' src="/images/phone-hand.png" alt="banner image" />
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='col-span-3'>
                    <p className='font-family: Roboto text-[24px] font-semibold' data-aos="fade-right">Problems</p>
                </div>
                <div className='col-span-9' data-aos="fade-left">
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] '>Tamara wanted to add a feature that would allow users to browse stores with greater convenience and make purchases without having to leave the app.</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='col-span-3'>
                    <p className='font-family: Roboto text-[24px] font-semibold' data-aos="fade-right">Challanges</p>
                </div>
                <div className='col-span-9' data-aos="fade-left">
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] '>Our Design challenges included optimizing user flow for one-tap checkout, ensuring payment security, maintaining consistency & compatibility across devices for a seamless user experience.</p>
                </div>
            </div>

            <div className='text-white grid grid-cols-12 mt-[100px] container'>
                <div className='col-span-3'>
                    <p className='font-family: Roboto text-[24px] font-semibold' data-aos="fade-right">Our Solutions</p>
                </div>
                <div className='col-span-9' data-aos="fade-left">
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] '>We integrated a “One-tap checkout” option that allows users to quickly complete their purchases without the need for multiple steps. Also, We applied minimalist design, ensuring that the app provides an aesthetic and engaging experience.</p>
                </div>
            </div>


            <Testimonial></Testimonial>

            <Achievement></Achievement>

            <div className='text-white grid grid-cols-12 mt-[150px] container'>
                <div className='col-span-3' data-aos="fade-right">
                    <p className='font-family: Roboto text-[24px] font-semibold'>Features</p>
                </div>
                <div className='col-span-9' data-aos="fade-left">
                    <p className='font-family: Roboto text-[34px] font-normal text-[#F5F5F5] '>Our collective endeavors aimed to offer Tamara&#39;s users a more captivating, efficient, and delightful platform experience.</p>
                </div>
            </div>

            <PortfolioRelated></PortfolioRelated>

            <FreeConsulting></FreeConsulting>


            <div className=''>
                <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

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