import { dm_sans, poppins } from '@/pages/_app';
import React from 'react';
import TeamsList from '../../../public/db/expert.json'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

const TeamList = () => {

    const { teamList } = TeamsList;
    const categories = Array.from(new Set(teamList.map((team) => team.teamCategory)));

    const swiperContainerStyle = {
        width: "100%",
        padding: "50px 0",
    };

    return (

        <div>
            {categories.map((category, catIndex) => (
                <div key={catIndex} className="category-container">
                    <h2 className={`${poppins.className} text-white font-semibold lg:text-[54px] text-[34px] text-center mt-[150px]`}>{category}</h2>
                    <Swiper
                        spaceBetween={18}
                        breakpoints={{
                            428: { slidesPerView: 1 },
                            640: { slidesPerView: 1.3 },
                            768: { slidesPerView: 2.3 },
                            1024: { slidesPerView: 2.3 },
                            1920: { slidesPerView: 4.3 },
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        style={swiperContainerStyle}
                        modules={[Autoplay]}
                    >
                        {teamList
                            .filter((team) => team.teamCategory === category)
                            .map((team, index) => (
                                <SwiperSlide key={index}>
                                    <div className="container grid lg:grid-cols-3 mt-[174px] gap-y-[200px]">
                                        <div className='relative group p-4' data-aos="zoom-in">
                                            <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
                                                <img className='-mt-[163px] w-[227px] z-10' src={team.image} alt="" />
                                                <div
                                                    className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px] z-20'
                                                    style={{
                                                        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px ",
                                                    }}
                                                ></div>
                                                <div className='absolute bottom-10 skew-y-6 z-30'>
                                                    <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>{team.name}</h1>
                                                    <h1 className={`${dm_sans} text-white font-medium text-[18px] text-center`}>{team.title}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            ))}
        </div>
        // <div>

        //     <Swiper
        //         spaceBetween={18}
        //         breakpoints={{
        //             428: { slidesPerView: 3 },
        //             640: { slidesPerView: 3 },
        //             768: { slidesPerView: 3 },
        //             1024: { slidesPerView: 5 },
        //             1920: { slidesPerView: 5 },
        //         }}
        //         autoplay={{
        //             delay: 2500,
        //             disableOnInteraction: false,
        //         }}
        //         style={swiperContainerStyle}
        //         modules={[Autoplay]}
        //     >
        //         {teamList.map((team, index) => (
        //             <SwiperSlide key={index}>
        //                 <div className="container grid grid-cols-3 mt-[274px] gap-y-[200px]">
        //                     <div key={index} className='relative group p-4' data-aos="zoom-in">
        //                         <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
        //                             <img className='-mt-[163px] w-[227px] z-10' src={team.image} alt="" />
        //                             <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px] z-20'
        //                                 style={{
        //                                     boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px "
        //                                 }}
        //                             >

        //                             </div>
        //                             <div className='absolute bottom-10 skew-y-6 z-30'>
        //                                 <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>{team.name}</h1>
        //                                 <h1 className={`${dm_sans} text-white font-medium text-[18px] text-center`}>{team.title}</h1>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>

        //     <div className="container grid grid-cols-3 mt-[274px] gap-y-[200px]">
        //         {
        //             teamList.map((team, index) => (
        //                 <div key={index} className='relative group p-4' data-aos="zoom-in">
        //                     <div className="flex flex-col items-center border-[1px] border-[#99D31B] transform -skew-y-6 rounded-[50px] w-[424px] h-[300px] hover:bg-[#99D31B] transition duration-700 -z-10">
        //                         <img className='-mt-[163px] w-[227px] z-10' src={team.image} alt="" />
        //                         <div className='absolute bottom-[00px] bg-[#99D31B] w-full rounded-b-[50px] h-[120px] z-20'
        //                             style={{
        //                                 boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px "
        //                             }}
        //                         >

        //                         </div>
        //                         <div className='absolute bottom-10 skew-y-6 z-30'>
        //                             <h1 className={`${poppins.className} text-white font-semibold text-[24px]`}>{team.name}</h1>
        //                             <h1 className={`${dm_sans} text-white font-medium text-[18px] text-center`}>{team.title}</h1>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))
        //         }
        //     </div>

        //     <div className=''>
        //         <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        //         <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

        //         <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        //         {/* <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

        //         <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
        //         {/* <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

        //         <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
        //         {/* <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}


        //         {/* <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
        //         <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
        //     </div>
        // </div>
    );
};

export default TeamList;