import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const TeamMember = () => {
    return (
        <div className=" h-auto mt-[150px] pb-14">

            <div className='text-center'>
                <p className="text-[#99D31B] text-[24px]">Expart Member</p>
                <h1 className="text-4xl font-normal leading-tight text-[54px] font-family: 'Roboto',">
                    <span className="text-white">Meet Our Team</span>
                </h1>

                <div className="container grid grid-cols-3 mt-[274px]">
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='-mt-[170px] w-[227px]' src="/images/team_mem1.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px]'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>

                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='-mt-[170px] w-[227px]' src="/images/team_mem2.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px]'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='-mt-[170px] w-[227px]' src="/images/team_mem3.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px]'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6'>
                                <h1 className='text-white font-semibold text-[24px]'>Kevin Martin</h1>
                                <h1 className='text-white font-medium text-[18px]'>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className=' bg-[#99D31B] mt-[75px] text-[18px] font-normal font-family: Roboto; px-[30px] py-[16px] h-[40px]'>All Members
                    <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                </Button>
            </div>

        </div>
    );
};

export default TeamMember;