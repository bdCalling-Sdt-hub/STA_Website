import React from 'react';
import style from '@/styles/portfolio.achievment.module.css'
import { dm_sans, poppins } from '@/pages/_app';

const DesignProcess = () => {

    const designProcess = [
        {
            id: "1",
            title: 'Business Strategy',
            item: {
                itemOne: "Business Goals",
                itemTwo: "SWOT analysis",
                itemThree: "Target market",
                itemFour: "Business Model canvas",
                itemFive: "Value proposition",
            }
        },
        {
            id: "2",
            title: 'Research',
            item: {
                itemOne: "Competitive Analysis",
                itemTwo: "User Interviews",
                itemThree: "Journey mapping",
                itemFour: "Value proposition",
            }
        },
        {
            id: "3",
            title: 'Define',
            item: {
                itemOne: "Competitive Analysis",
                itemTwo: "User Interviews",
                itemThree: "Journey mapping",
                itemFour: "Value proposition",
            }
        },
        {
            id: "4",
            title: 'Design',
            item: {
                itemOne: "Competitive Analysis",
                itemTwo: "User Interviews",
                itemThree: "Journey mapping",
                itemFour: "Value proposition",
            }
        },
        {
            id: "5",
            title: 'Evaluate',
            item: {
                itemOne: "Competitive Analysis",
                itemTwo: "User Interviews",
                itemThree: "Journey mapping",
                itemFour: "Value proposition",
            }
        },
        {
            id: "6",
            title: 'Business Outcome',
            item: {
                itemOne: "Competitive Analysis",
                itemTwo: "User Interviews",
                itemThree: "Journey mapping",
                itemFour: "Value proposition",
            }
        },
    ]

    return (
        <div className=' mt-[200px] '>
            <div className='container flex flex-col items-center' data-aos="fade-down-right">
                <p className={`${dm_sans.className} lg:text-[24px] text-[16px] font-bold text-[#99D31B]`}>Why choose Invite?</p>
                <p className={`${poppins.className} lg:text-[54px] text-[34px] font-semibold text-white leading-tight mt-[18px] text-center`}>
                    Business-Driven UX Design <br />
                    <span className='inline-block mx-auto'>Process</span>
                </p>
            </div>


            <div className={`${style.bkImage}`}>

                <div className={`text-center`}>

                    <div className="container grid lg:grid-cols-3 grid-cols-1 mt-[124px] gap-y-[64px] gap-x-32">

                        {
                            designProcess.map((design, index) => (
                                <div key={index} className='relative group -skew-y-6'>
                                    <div data-aos="zoom-in" className={`flex flex-col transform lg:w-[424px] lg:h-[300px] w-[360px] h-[324px] ${style.card}`}>

                                        <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                            <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>{design.id}</h1>
                                        </div>

                                        <div className='my-auto skew-y-6'>
                                            <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>{design.title}</p>
                                            <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                            <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                                <div>
                                                    <div className='flex items-center gap-4 mt-[15px]'>
                                                        <img src="/images/shape/2.png" alt="" />
                                                        <h1 className='text-[16px] font-normal'>Target market</h1>
                                                    </div>
                                                    <div className='flex items-center gap-4 mt-[15px]'>
                                                        <img src="/images/shape/2.png" alt="" />
                                                        <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                                    </div>
                                                    <div className='flex items-center gap-4 mt-[15px]'>
                                                        <img src="/images/shape/2.png" alt="" />
                                                        <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex items-center gap-4 mt-[15px]'>
                                                        <img src="/images/shape/2.png" alt="" />
                                                        <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                                    </div>
                                                    <div className='flex items-center gap-4 mt-[15px]'>
                                                        <img src="/images/shape/2.png" alt="" />
                                                        <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }



                        {/* <div className='relative group -skew-y-6'>
                            <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                                <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                    <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>02</h1>
                                </div>

                                <div className='my-auto skew-y-6'>
                                    <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Research</p>
                                    <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                    <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Target market</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='relative group -skew-y-6'>
                            <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                                <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                    <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>03</h1>
                                </div>

                                <div className='my-auto skew-y-6'>
                                    <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Design</p>
                                    <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                    <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Target market</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='relative group -skew-y-6'>
                            <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                                <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                    <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>04</h1>
                                </div>

                                <div className='my-auto skew-y-6'>
                                    <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Testing</p>
                                    <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                    <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Target market</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='relative group -skew-y-6'>
                            <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                                <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                    <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>05</h1>
                                </div>

                                <div className='my-auto skew-y-6'>
                                    <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Implementation</p>
                                    <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                    <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Target market</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='relative group -skew-y-6'>
                            <div data-aos="zoom-in" className={`flex flex-col transform h-[197px] w-[312px] ${style.card}`}>

                                <div className='absolute right-0 w-[80px] h-[80px] bg-[#99D31B]' style={{ borderBottomLeftRadius: "70px", borderTopRightRadius: "25px" }}>
                                    <h1 className={`${poppins.className} text-white text-[45px] font-semibold skew-y-6`}>06</h1>
                                </div>

                                <div className='my-auto skew-y-6'>
                                    <p className={`${poppins.className} text-white text-[24px] mt-[10px] font-semibold text-start px-[30px]`}>Iteration</p>
                                    <hr className="w-full" style={{ marginTop: "15px", borderColor: '#384B0E' }} />
                                    <div className={`grid grid-cols-2 text-left ml-[30px] text-white ${dm_sans.className}`}>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Target market</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Goals</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Value proposition</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>SWOT analysis</h1>
                                            </div>
                                            <div className='flex items-center gap-4 mt-[15px]'>
                                                <img src="/images/shape/2.png" alt="" />
                                                <h1 className='text-[16px] font-normal'>Business Model canva</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>

            </div>


        </div>
    );
};

export default DesignProcess;