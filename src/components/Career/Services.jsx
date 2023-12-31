import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import { dm_sans, poppins } from '@/pages/_app';

const Services = () => {
    return (
        <div className=" h-auto mt-[200px] pb-14">

            <div className='text-center'>
                <h1 className={`${poppins.className} font-semibold leading-tight text-[54px]`} data-aos="zoom-in">
                    <span className="text-white">Our Core Values</span>
                </h1>

                <div className="container grid grid-cols-3 gap-y-24 mt-[124px]">
                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/accountability.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Accountability</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We recognize that the obligation of any individual is to account for their activities, accept responsibilities and to disclose the result in a transparent manner as committed</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/improvement.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Continuous Improvement</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We are constantly curious and creative. We embrace the power of new ideas and unique perspectives, and we courageously put them to work in the real world every day.</p>
                            </div>

                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/customer.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Customer Dedication</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We genuinely care about the success of our internal & external customers</p>
                            </div>

                        </div>
                    </div>

                    {/* <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Green Living</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We are committed to protect our environment</p>
                            </div>

                        </div>
                    </div> */}

                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/integrity.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Integrity</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We act responsibly and always hold ourselves accountable for our work and how it is achieved</p>
                            </div>

                        </div>
                    </div>

                    {/* <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Performance</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We are committed to drive exceptional business result and taking personal pride in everything we do</p>
                            </div>

                        </div>
                    </div> */}
                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/respect.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Respect</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We are respectful collaborators and communicators, treating others in ways we want to be treated</p>
                            </div>

                        </div>
                    </div>
                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/career/team-work.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px] skew-y-6`}>Team Work</h1>
                                <p className={`${dm_sans.className} text-white text-[18px] mt-[28px] px-4 skew-y-6`}>We recognize that every team member has their own unique role in the team and we respect & appreciate individual contributions</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;