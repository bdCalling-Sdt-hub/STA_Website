import React from 'react';
import teamMate from '../../../public/db/expert.json'

const TeamMate = () => {
    const { teamMateList } = teamMate;


    return (
        <div className="container mt-[209px]">
            <div className="text-center">
                <h2 className="text-3xl text-white font-family: Roboto; text-[54px] font-normal mt-[15px]">Being our Team mate</h2>
                <p className="text-[18px] font-family: Roboto font-normal text-[#d8d6d6] mt-[18px]">We work with you to understand your business goals, target audience, and the <br /> problem that your website.</p>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {teamMateList.map((teamMate, index) => (
                    <div key={index}>
                        <img className='w-[138px] h-[94px] mt-[102px]' src={teamMate.image} alt="" />
                        <p className='text-[24px] font-semibold mt-[20px] text-white'>{teamMate.title}</p>
                        <p className='text-[18px] font-normal mt-[24px] text-white w-[355px]'>{teamMate.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TeamMate;