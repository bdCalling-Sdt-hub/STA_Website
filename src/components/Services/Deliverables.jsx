import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';

const Deliverables = () => {

    return (
        <div className="h-auto mt-[150px] pb-14" >

            <div className='relative text-center z-20'>
                <div data-aos="zoom-in">
                    <h1 className={`${poppins.className} font-semibold leading-tight text-[54px]`}>
                        <span className="text-white">Deliverables</span>
                    </h1>
                </div>

                {/* <hr className=" w-[118px]" style={{ marginTop: "15px", borderColor: '#384B0E', paddingLeft: "30px" }} /> */}

                <div className="container grid grid-cols-2 gap-8 mt-[124px] z-50">
                    <div data-aos="flip-left" data-aos-duration="3000">
                        <div className="border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px]">

                            <div className='skew-y-6 mt-[59px] ml-[30px]'>
                                <p className='text-left font-semibold text-[24px] text-white'>UX Design:</p>
                                <hr className='w-[128px]' style={{ borderWidth: "2px", marginTop: "5px", borderColor: "#99D31B" }} />
                            </div>

                            <div className='grid grid-cols-2 skew-y-6 mt-[30px] mb-[30px] ml-[30px]'>
                                <div>
                                    <div className="flex items-center">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>User Flowr</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Information Architecture</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>SWOT Analysis</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Competitor Analysis</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Lo-fi Wireframes</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Hi-fi Wireframes</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-left" data-aos-duration="3000">
                        <div className="border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px]">

                            <div className='skew-y-6 mt-[59px] ml-[30px]'>
                                <p className='text-left font-semibold text-[24px] text-white'>UX Design:</p>
                                <hr className='w-[128px]' style={{ borderWidth: "2px", marginTop: "5px", borderColor: "#99D31B" }} />
                            </div>

                            <div className='grid grid-cols-2 skew-y-6 mt-[30px] mb-[30px] ml-[30px]'>
                                <div>
                                    <div className="flex items-center">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>User Flowr</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Information Architecture</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>SWOT Analysis</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Competitor Analysis</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Lo-fi Wireframes</p>
                                    </div>
                                    <div className="flex items-center mt-[40px]">
                                        <img src="/images/mid-banner-star.png" alt="" />
                                        <p className={`${dm_sans.className} text-white text-[20px] font-normal`}>Hi-fi Wireframes</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <img className="absolute -z-10 top-[100px] right-[0px] h-[700px] w-[400px] mt-[300px]" src="/images/shape/10.png" alt="" />
            </div>


            <div className="relative">
                <img className="absolute bottom-[450px] right-[400px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[100px] right-[200px] animate-round-rotate360 inline-block" src="/images/shape/2.png" alt="" />
            </div>
        </div>
    );
};

export default Deliverables;