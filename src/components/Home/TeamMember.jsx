import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const TeamMember = () => {
    return (
        <div className="h-auto mt-[150px] pb-14 relative">

            <img className="absolute bottom-[50px] left-[00px]" src="/images/shape/9.png" alt="" />


            <div className='text-center'>
                <div data-aos="zoom-out-right">
                    <p className="text-[#99D31B] text-[24px]">Expart Member</p>
                    <h1 className="text-4xl font-normal leading-tight text-[54px] font-family: 'Roboto',">
                        <span className="text-white">Meet Our Team</span>
                    </h1>
                </div>

                <div className="container grid grid-cols-3 mt-[274px]"
                    data-aos="zoom-in">
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[173px] w-[227px] z-10' src="/images/team_mem1.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px]'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>

                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[173px] w-[227px] z-10' src="/images/team_mem2.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px] z-10'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6 z-50'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[170px] w-[227px] z-10' src="/images/team_mem3.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px] z-10'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6 z-50'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Button data-aos="fade-right" className=' bg-[#99D31B] mt-[75px] text-[18px] font-normal font-family: Roboto; px-[30px] py-[16px] h-[40px]'>All Members
                    <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                </Button>

            </div>

            <div className="relative">
                <img className="absolute bottom-[550px] left-[650px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute -top-[20px] left-[200px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[0px] right-[150px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute bottom-[550px] right-[250px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
            </div>

        </div>
    );
};

export default TeamMember;