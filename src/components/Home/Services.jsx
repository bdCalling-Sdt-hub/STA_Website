import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import ServiceList from '../../../public/db/services.json'
import { dm_sans, poppins } from '@/pages/_app';
import Link from 'next/link';

const Services = () => {

    const { serviceList } = ServiceList;
    console.log(serviceList)

    return (
        <div className="h-auto mt-[150px] pb-14" >

            <div className='relative text-center z-20'>
                <div data-aos="zoom-in">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>SERVICES</p>
                    <h1 className={`${poppins.className} font-semibold leading-tight text-[54px]`}>
                        <span className="text-white">Feel The Power Of Technology</span>
                        <br />
                        <span className="text-white">Software Service</span>
                    </h1>
                </div>

                <div className="container grid grid-cols-3 mt-[124px] z-50">
                    {
                        serviceList.map((service, index) => (
                            <div key={index} className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                                <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-5000">
                                    <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                                    <div className='my-auto'>
                                        <h1 className={`${poppins.className} text-white font-bold text-[24px]`}>{service.title}</h1>
                                        <p className={`${dm_sans.className} text-white text-[16px] mt-[28px] p-2`}>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                                    </div>
                                    <Link href={`services/${service.id}`}>
                                        <Button className="absolute -bottom-[40px] left-[175px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white transition duration-5000" variant="outline" size="icon">
                                            <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                    {/* <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-5000">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px]`}>UI/UX Design</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[28px] p-2`}>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                            </div>
                            <Button className="absolute -bottom-[40px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white transition duration-5000" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                            </Button>
                        </div>
                    </div>
                    <div className='relative group p-4' data-aos="flip-left" data-aos-duration="3000">
                        <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-5000">
                            <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                            <div className='my-auto'>
                                <h1 className={`${poppins.className} text-white font-bold text-[24px]`}>UI/UX Design</h1>
                                <p className={`${dm_sans.className} text-white text-[16px] mt-[28px] p-2`}>Lorem ipsum dolor sit amet consectetur. Ipsum sed elementum nibh potenti pulvinar nibh. Feugiat neque ut fermentum quam pellentesque ullamcorper libero.</p>
                            </div>
                            <Button className="absolute -bottom-[40px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white transition duration-5000" variant="outline" size="icon">
                                <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                            </Button>
                        </div>
                    </div> */}
                </div>
                <img className="absolute -z-10 top-[100px] right-[0px] h-[700px] w-[400px] mt-[300px]" src="/images/shape/10.png" alt="" />
            </div>


            <div className="relative">
                <img className="absolute bottom-[450px] right-[400px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[100px] right-[200px] animate-round-rotate360 inline-block" src="/images/shape/2.png" alt="" />
            </div>
        </div>
    );
};

export default Services;