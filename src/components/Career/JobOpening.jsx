import React from 'react';
import style from '@/styles/job.opening.module.css'
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';
import Link from 'next/link';
import JobList from '../../../public/db/job.json'

const JobOpening = () => {

    const { jobList } = JobList;

    return (
        <div>
            <div className={`${style.bkImage}`}>
                <div className="container mt-[100px]">

                    <div className='text-center pt-[100px]' data-aos="zoom-in">
                        <h2 className={`${poppins.className} text-white lg:text-[54px] text-[34px] font-normal mt-[15px]`}>Current Opening</h2>
                    </div>

                    <div class="divide-y divide-white">
                        <div class="text-center py-2  pt-[70px]"></div>

                        {
                            jobList.map((job, index) => (
                                <div key={index} class="" data-aos="fade-right">
                                    <p className={`${poppins.className} text-white text-[34px] font-semibold mt-[15px] pt-[41px]`}>{job.title}</p>
                                    <div className='grid lg:grid-cols-4 grid-cols-1 text-white  pt-[40px] pb-[51px]'>
                                        <div>
                                            <p className={`${poppins.className} text-[18px]`}>Address</p>
                                            <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>{job.address}</p>
                                        </div>
                                        <div>
                                            <p className={`${poppins.className} text-[18px]`}>SALARY</p>
                                            <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>{job.salary}</p>
                                        </div>
                                        <div>
                                            <p className={`${poppins.className} text-[18px]`}>APPLY DEADLINE</p>
                                            <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>{job.applyDeadline}</p>
                                        </div>
                                        <div>
                                            <Link href={`career/${job.id}`}>
                                                <Button data-aos="flip-left" className={`w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4 ${poppins.className} text-[18px] font-normal px-[30px] py-[20px]`}>Apply Now
                                                    <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div class="" data-aos="fade-left">
                            <p className={`${poppins.className} text-white text-[34px] font-semibold mt-[15px] pt-[41px]`}>UI/UX Designers (Entry-Level)</p>
                            <div className='grid grid-cols-4 text-white  pt-[40px] pb-[51px]'>
                                <div>
                                    <p className={`${poppins.className} text-[18px]`}>Address</p>
                                    <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>Dhaka,Bangaldesh</p>
                                </div>
                                <div>
                                    <p className={`${poppins.className} text-[18px]`}>SALARY</p>
                                    <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>20k - 25k BDT</p>
                                </div>
                                <div>
                                    <p className={`${poppins.className} text-[18px]`}>APPLY DEADLINE</p>
                                    <p className={`${dm_sans.className} text-[22px] pt-[25px]`}>31-Oct-2023</p>
                                </div>
                                <div>
                                    <Link href={`career/2?UI/UX Designers (Entry-Level)`}>
                                        <Button data-aos="flip-up" className='w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-4{`${poppins.className } text-[18px]`}font-normal px-[30px] py-[20px]'>Apply Now
                                            <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        <div class="text-center py-2"></div>

                    </div>

                </div>
            </div>

            <div className="relative">
                <img className="absolute -top-[1950px] right-[100px] animate-round-rotate360 lg:visible hidden" src="/images/shape/6.png" alt="" />
                <img className="absolute -top-[1400px] right-[300px] animate-round-rotate360  lg:visible hidden" src="/images/shape/2.png" alt="" />
                <img className="absolute -top-[1700px] right-[150px] animate-round-rotate lg:visible hidden" src="/images/shape/11.png" alt="" />

                {/* <img className="absolute -top-[1950px] -left-[200px] -ms-[100px]" src="/images/shape/8.png" alt="" /> */}
            </div>

            <div className="relative">
                <img className="absolute  -top-[150px] right-[250px] animate-round-rotate360 lg:visible hidden" src="/images/shape/6.png" alt="" />
                <img className="absolute -top-[100px] right-[150px] animate-round-rotate360 lg:visible hidden" src="/images/shape/2.png" alt="" />
                <img className="absolute -top-[200px] left-[150px] animate-round-rotate lg:visible hidden" src="/images/shape/11.png" alt="" />
                <img className="absolute -top-[450px] left-[150px] animate-round-rotate360 lg:visible hidden" src="/images/shape/6.png" alt="" />
                <img className="absolute top-[100px] left-[450px] animate-round-rotate360 lg:visible hidden" src="/images/shape/6.png" alt="" />

                {/* <img className="absolute -top-[300px] -right-[200px] -me-[100px]" src="/images/shape/8.png" alt="" /> */}
            </div>

        </div>
    );
};

export default JobOpening;