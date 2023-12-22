import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';

const Services = () => {
    return (
        <div className=" h-auto mt-[200px] pb-14">

            <div className='text-center'>
                <h1 className="text-4xl font-semibold leading-tight text-[54px] font-family: 'Roboto'," data-aos="zoom-in">
                    <span className="text-white">Our Core Valuesy</span>
                </h1>

                <div className="container grid grid-cols-3 gap-y-24 mt-[124px]">
                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Innovation</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>We thrive on fresh ideas, driving us to pioneer solutions that redefine norms and position us as a trailblazing team!</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Collaboration</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>Diverse viewpoints unite in seamless collaboration, nurturing a rich ecosystem of creativity, ensuring we deliver excellence!</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Empathy</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>Our empathetic approach enables us to understand user needs deeply, resulting in designs that truly resonate and set us apart.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Excellence</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>Striving for excellence is our hallmark, propelling us to craft extraordinary work that showcases our team&#39;s exceptional dedication and competence.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Adaptability</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>Thriving amidst change showcases our flexibility, enhancing our ability to swiftly navigate challenges, cementing our status as a resilient and agile team.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px] skew-y-6'>Accountability</h1>
                                <p className='text-white text-[18px] mt-[28px] px-4 skew-y-6'>Ownership breeds trust; our commitment to meeting and exceeding expectations amplifies our reputation as a reliable and accomplished team.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;