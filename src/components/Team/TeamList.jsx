import { dm_sans, poppins } from '@/pages/_app';
import React from 'react';
import TeamsList from '../../../public/db//expert'

const TeamList = () => {

    const { teamList } = TeamsList;

    return (
        <div>
            <div className="container grid grid-cols-3 mt-[274px] gap-y-[200px]">
                {
                    teamList.map((team, index) => (
                        <div key={index} className='relative group p-4' data-aos="zoom-in">
                            <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                                <img className='-mt-[163px] w-[227px] z-10' src={team.image} alt="" />
                                <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px] z-20'
                                    style={{
                                        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px "
                                    }}
                                >

                                </div>
                                <div className='absolute bottom-10 skew-y-6 z-30'>
                                    <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>{team.name}</h1>
                                    <h1 className={`${dm_sans} text-white font-medium text-[18px] text-center`}>{team.title}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className=''>
                <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                {/* <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                {/* <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                {/* <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}


                {/* <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
            </div>
        </div>
    );
};

export default TeamList;