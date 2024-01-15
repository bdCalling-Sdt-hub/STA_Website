import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';

const SubmitDetails = () => {
    return (
        <div className="container mt-[150px]">
            <div className="text-center" data-aos="zoom-in">
                <h2 className={`${poppins.className} text-white lg:text-[54px] text-[34px] font-normal mt-[15px] lg:text-left`}>Didn’t find a role that clicks? Let us <br /> know what suits you best!</h2>
            </div>

            <div className="lg:text-left text-center mb-8" data-aos="fade-right">
                <Button className={`${dm_sans.className} w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] hover:bg-[#99D31B] hover:text-white mt-[60px] text-[18px] font-normal px-[30px] py-[20px]`}>Join Our Team
                    <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                </Button>
            </div>
        </div >
    );
};

export default SubmitDetails;