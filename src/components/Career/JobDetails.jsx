import { dm_sans, poppins } from '@/pages/_app';
import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';

const JobDetails = ({ jobList, id }) => {

    const job = jobList.find(job => job.id === id);

    return (
        <div className='containe my-[150px]'>
            <div className='container text-white'>
                <p className={`font-semibold, text-[24px] ${dm_sans.className}`} data-aos="fade-left">Job &#10140; {job?.title}</p>
                <p className={`font-bold, text-[62px] mt-[100px] ${poppins.className}`} data-aos="fade-right">{job?.title}</p>


                <div className='grid grid-cols-3 gap-16 mt-[70px]'>
                    <div className='col-span-2'>
                        <p className={`${dm_sans.className} font-medium text-[22px]`} data-aos="fade-right">We&#39;re on the hunt for enthusiastic and dedicated UX/UI Designers (Entry-Level) to join our dynamic team. While a background in design education is a plus, it&#39;s not a deal-breaker for us. What we value most is your passion for the UX/UI domain and your drive to excel in your career. If you possess a creative flair and an unwavering work ethic, you&#39;re the candidate we&#39;re looking for.</p>

                        <p className={`mt-[40px] ${dm_sans.className} font-medium text-[22px]`} data-aos="fade-left">We offer a work environment that is conducive to your professional growth and development. With us, you don&#39;t just get a job; you get an opportunity to make a significant impact while expanding your skill set. If you&#39;re eager to embrace new challenges and take your abilities to the next level, don&#39;t hesitate—apply today and let&#39;s create something amazing together!</p>
                    </div>
                    <div className='col-span-1' data-aos="fade-left">
                        <div className='flex items-center gap-4'>
                            <img src="/images/shape/2.png" alt="" />
                            <p className={`${poppins.className} text-[22px] font-medium`}>৳20,000 - ৳25,000</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/images/shape/2.png" alt="" />
                            <p className={`${poppins.className} text-[22px] font-medium`}>1229, Dhaka, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/images/shape/2.png" alt="" />
                            <p className={`${poppins.className} text-[22px] font-medium`}>Design</p>
                        </div>
                        <hr className='mt-[30px]' style={{ borderWidth: "1px" }} />

                        <Button data-aos="flip-left" className={`w-[211px] h-[59px] bg-[#333] text-[#99D31B] border-2 border-[#99D31B] rounded-[50px] hover:bg-[#99D31B] hover:text-white mt-[40px] ${poppins.className} text-[18px] font-normal px-[30px] py-[20px]`}>Apply Now
                            <span className='ms-2'><FaArrowRight></FaArrowRight></span>
                        </Button>
                    </div>
                </div>

                {/* Responsibilities:  */}
                <div className='mt-[60px]' data-aos="fade-right">
                    <p className={`${poppins.className} text-[34px] font-semibold`}>Responsibilities:</p>
                    <div className='flex items-center gap-4 mt-[22px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Conduct in-depth research to generate fresh concepts for designs, layouts, and visual elements.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Develop and refine visual designs, integrating constructive input from fellow designers.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Work closely with both the design and marketing departments to achieve cohesive and impactful outcomes.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Keep a pulse on current industry trends to weave into ongoing projects.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Adhere to project timelines, ensuring efficient collaboration within the team.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Cultivate a positive team atmosphere through open and effective communication.</p>
                    </div>
                </div>

                {/* Qualifications: */}
                <div className='mt-[60px]' data-aos="fade-left">
                    <p className={`${poppins.className} text-[34px] font-semibold`}>Qualifications:</p>
                    <div className='flex items-center gap-4 mt-[22px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>A clear understanding of user experience principles and design thinking.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Strong presentation skills and a keen eye for visual aesthetics.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Excellent interpersonal and communication skills.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Willingness to learn and ability to take constructive feedback from other designers.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Positive mindset with a can-do attitude, with the ability to work independently and collaboratively as part of a team.</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Familiarity with motion graphics and animation principles is a plus.</p>
                    </div>
                </div>

                {/* Benefits */}
                <div className='mt-[60px]' data-aos="fade-right">
                    <p className={`${poppins.className} text-[34px] font-semibold`}>Benefits</p>
                    <div className='flex items-center gap-4 mt-[22px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Two Festival Bonuses</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Performance Bonuses</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Annual Salary Increments</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Loyalty Bonus</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Leave Encashment</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Gym facilities</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Annual Pleasure Tour</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Separate Muslim prayer areas for male and female</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Other Benefits as Per Company Policy</p>
                    </div>
                </div>

                {/* Other Information */}
                <div className='mt-[60px]' data-aos="fade-left">
                    <p className={`${poppins.className} text-[34px] font-semibold`}>Other Information</p>
                    <div className='flex items-center gap-4 mt-[22px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Workdays: Sat-Thu (6 days per week)</p>
                    </div>
                    <div className='flex items-center gap-4 mt-[30px]'>
                        <img src="/images/shape/2.png" alt="" />
                        <p className={`${poppins.className} text-[22px] font-normal`}>Work hours: 09:00 AM to 6:00 PM (subject to change)</p>
                    </div>

                </div>


                <div className=''>
                    <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                    <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                    {/* <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}
                    {/* <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}

                    <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                    <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                    {/* <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                    {/* <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                    <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                    <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                    {/* <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                    {/* <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                    <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                    <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                    {/* <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}
                    {/* <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}


                    <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                    <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                    {/* <img className="absolute top-[4350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                    {/* <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                </div>

            </div>
        </div>
    );
};

export default JobDetails;