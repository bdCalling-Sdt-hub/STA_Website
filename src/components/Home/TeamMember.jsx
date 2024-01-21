import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';
import Link from 'next/link';
import TeamsList from '../../../public/db//expert'

const TeamMember = () => {

    const { teamList } = TeamsList;

    return (
        <div className="h-auto mt-[150px] pb-14 relative">

            <img className="absolute hidden bottom-[50px] left-[00px]" src="/images/shape/9.png" alt="" />


            <div className='text-center'>
                <div data-aos="zoom-out-right">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>Expert Member</p>
                    <h1 className={`${poppins.className} font-semibold lg:leading-tight lg:text-[54px] text-[34px] mt-[15px]`}>
                        <span className="text-white">Meet Our Team</span>
                    </h1>
                </div>
                

                <div className="container grid lg:grid-cols-3 grid-cols-1 mt-[274px] gap-y-[200px]">
                    {
                        teamList.slice(0, 3).map((team, index) => (
                            <div key={index} className='relative group lg:p-4' data-aos="zoom-in">
                                <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] lg:w-[424px] w-[380px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                                    <img className='-mt-[163px] w-[227px] z-10' src={team.image} alt="" />
                                    <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px] z-20' style={{
                                        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px "
                                    }}>

                                    </div>
                                    <div className='absolute bottom-10 skew-y-6 z-30'>
                                        <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>{team.name}</h1>
                                        <h1 className={`${dm_sans} text-white font-medium text-[18px]`}>{team.title}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <div className="container grid grid-cols-3 mt-[274px]">
                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[173px] w-[227px] z-10' src="/images/team_mem1.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px]'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6'>
                                <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>Kevin Martin</h1>
                                <h1 className={`${dm_sans} text-white font-medium text-[18px]`}>CEO Founder</h1>
                            </div>
                        </div>
                    </div>

                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[173px] w-[227px] z-10' src="/images/team_mem2.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px] z-10'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6 z-50'>
                                <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>Kevin Martin</h1>
                                <h1 className={`${dm_sans} text-white font-medium text-[18px]`}>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative group p-4' data-aos="zoom-in">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                            <img className='-mt-[170px] w-[227px] z-10' src="/images/team_mem3.png" alt="" />
                            <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[150px] z-10'>

                            </div>
                            <div className='absolute bottom-10 skew-y-6 z-50'>
                                <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>Kevin Martin</h1>
                                <h1 className={`${dm_sans} text-white font-medium text-[18px]`}>CEO Founder</h1>
                            </div>
                        </div>
                    </div>
                </div> */}

                <Link href={'/team'}>
                    <Button data-aos="fade-right" className={`${poppins.className} bg-[#99D31B] mt-[75px] text-[18px] font-normal h-[59px] px-[30px] py-[16px] hover:bg-[#99D31B] hover:text-white`}>All Members
                        <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                    </Button>
                </Link>

            </div>

            <div className="relative">
                <img className="absolute lg:visible hidden bottom-[550px] left-[650px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute lg:visible invisible -top-[20px] left-[200px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute lg:visible invisible top-[0px] right-[150px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute lg:visible invisible bottom-[550px] right-[250px] animate-round-rotate360" src="/images/shape/2.png" alt="" />
            </div>

        </div>
    );
};

export default TeamMember;