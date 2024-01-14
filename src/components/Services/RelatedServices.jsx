import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import ServiceList from '../../../public/db/services.json'
import { dm_sans, poppins } from '@/pages/_app';
import Link from 'next/link';

const RelatedServices = () => {

    const { serviceList } = ServiceList;


    return (
        <div className="h-auto mt-[150px] pb-14" >

            <div className='relative text-center z-20'>
                <div data-aos="zoom-in">
                    <p className={`${dm_sans.className} text-[#99D31B] text-[16px] lg:text-[24px]`}>SERVICES</p>
                    <h1 className={`${poppins.className} font-semibold leading-tight lg:text-[54px] text-[34px]`}>
                        <span className="text-white">Related Services</span>
                    </h1>
                </div>

                <div className="container grid lg:grid-cols-2 grid-cols-1 mt-[124px] z-50">
                    {
                        serviceList.slice(0, 2).map((service, index) => (
                            <div key={index} className='relative group p-4 lg:mt-[120px] mt-[120px]' data-aos="flip-left" data-aos-duration="3000">
                                <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] h-[300px] hover:bg-[#99D31B] transition duration-5000">
                                    <img className='absolute -top-16' src="/images/pc-image.png" alt="" />
                                    <div className='my-auto skew-y-6'>
                                        <h1 className={`${poppins.className} text-white font-bold text-[24px]`}>{service.title}</h1>
                                        <p className={`${dm_sans.className} text-white text-[16px] mt-[28px] p-2`}>{service.description}</p>
                                    </div>
                                    <Link href={`${service.id}`}>
                                        <Button className="absolute -bottom-[40px] lg:left-[280px] left-[125px] rounded-full h-[80px] w-[80px] bg-[#99D31B] border-[#333] border-4 hover:bg-[#99D31B] group-hover:border-white transition duration-5000" variant="outline" size="icon">
                                            <FaArrowRight className="h-[30px] w-[30px]" color='white' />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }


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

export default RelatedServices;