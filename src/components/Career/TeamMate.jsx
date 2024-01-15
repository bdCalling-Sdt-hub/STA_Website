import React from 'react';
import teamMate from '../../../public/db/expert.json'
import { dm_sans, poppins } from '@/pages/_app';

const TeamMate = () => {
    const { teamMateList } = teamMate;


    return (
        <div className="container mt-[209px]">
            <div className="text-center" data-aos="zoom-in">
                <h2 className={`${poppins.className} text-3xl text-white lg:text-[54px] text-[34px] font-semibold mt-[15px]s`}>Being our Team mate</h2>
                <p className={`${dm_sans.className} text-[18px] font-normal text-[#d8d6d6] mt-[18px]`}>We work with you to understand your business goals, target audience, and the <br /> problem that your website.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {teamMateList.map((teamMate, index) => (
                    <div key={index} data-aos="flip-left" data-aos-duration="3000">
                        <img className='w-[138px] h-[94px] mt-[102px]' src={teamMate.image} alt="" />
                        <p className={`${poppins.className} text-[24px] font-semibold mt-[20px] text-white`}>{teamMate.title}</p>
                        <p className={`${dm_sans.className} text-[18px] font-normal mt-[24px] text-white w-[355px]`}>{teamMate.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TeamMate;