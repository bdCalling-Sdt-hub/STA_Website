import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const SubmitDetails = () => {
    return (
        <div className="container mt-[150px]">
            <div className="text-center" data-aos="zoom-in">
                <h2 className=" text-white font-family: Roboto; text-[54px] font-normal mt-[15px] text-left">Didn’t find a role that clicks? Let us <br /> know what suits you best!</h2>
            </div>

            <div className="" data-aos="fade-right">
                <Button className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white mt-[60px] text-[18px] font-normal font-family: Roboto; px-[30px] py-[20px]'>Join Our Team
                    <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                </Button>
            </div>
        </div >
    );
};

export default SubmitDetails;