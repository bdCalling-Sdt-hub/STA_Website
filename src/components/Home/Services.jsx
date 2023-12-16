import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';

const Services = () => {
    return (
        <div className=" h-auto mt-[200px] pb-14">

            <div className='text-center'>
                <p className="text-[#99D31B] text-[24px]">SERVICES</p>
                <h1 className="text-4xl font-normal leading-tight text-[54px] font-family: 'Roboto',">
                    <span className="text-white">Feel The Power Of Technology</span>
                    <br />
                    <span className="text-white">Software Service</span>
                </h1>

                <div className="container grid grid-cols-3 mt-[124px]">
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px]'>UI/UX Design</h1>
                                <p className='text-white text-[16px] mt-[28px]'>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                            </div>
                            <Button className="absolute -bottom-[40px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                            </Button>
                        </div>
                    </div>

                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px]'>UI/UX Design</h1>
                                <p className='text-white text-[16px] mt-[28px]'>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                            </div>
                            <Button className="absolute -bottom-[40px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group p-4'>
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-700">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className='text-white font-bold text-[24px]'>UI/UX Design</h1>
                                <p className='text-white text-[16px] mt-[28px]'>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                            </div>
                            <Button className="absolute -bottom-[40px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;