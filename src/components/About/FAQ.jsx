import React, { useState } from 'react';

const FAQ = () => {

    const [selectedItem, setSelectedItem] = useState('my-accordion-1');

    const handleInputChange = (name) => {
        setSelectedItem(name);
    };

    const isItemSelected = (name) => selectedItem === name;

    return (
        <div className="pt-[190px] pb-14 container">

            <div className='grid grid-cols-2'>
                <div className='text-start' data-aos="fade-down-right">
                    <p className="text-[#99D31B] text-[24px]">OUR FAQ</p>
                    <h1 className="mt-[15px] font-semibold text-[54px] leading-tight font-family: 'Roboto',">
                        <span className="text-white">Best Awwards And</span>
                        <br />
                        <span className="text-white">Recognition</span>
                    </h1>

                </div>

                <div data-aos="fade-down-left">
                    <div className={`collapse collapse-plus`}>

                        <input
                            type="radio"
                            name="my-accordion-1"
                            checked={isItemSelected('my-accordion-1')}
                            onClick={() => handleInputChange('my-accordion-1')}
                        />

                        <div className={`collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-1" ? 'text-[#99D31B]' : 'text-white'}`}>
                            01 Business Events
                        </div>
                        <div className="collapse-content text-white text-[16px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero sit enim esse quidem maiores assumenda architecto deleniti doloribus porro id vero expedita, magni accusantium sint reprehenderit voluptatum deserunt, repudiandae quaerat, distinctio nobis temporibus itaque sed neque.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={isItemSelected('my-accordion-2')}
                            onClick={() => handleInputChange('my-accordion-2')}
                        />

                        <div className={`collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-2" ? 'text-[#99D31B]' : 'text-white'}`}>
                            02 Development & Design
                        </div>
                        <div className="collapse-content text-white text-[16px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero sit enim esse quidem maiores assumenda architecto deleniti doloribus porro id vero expedita, magni accusantium sint reprehenderit voluptatum deserunt, repudiandae quaerat, distinctio nobis temporibus itaque sed neque.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-3"
                            checked={isItemSelected('my-accordion-3')}
                            onClick={() => handleInputChange('my-accordion-3')}
                        />

                        <div className={`collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-3" ? 'text-[#99D31B]' : 'text-white'}`}>
                            03 Analysis
                        </div>
                        <div className="collapse-content text-white text-[16px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero sit enim esse quidem maiores assumenda architecto deleniti doloribus porro id vero expedita, magni accusantium sint reprehenderit voluptatum deserunt, repudiandae quaerat, distinctio nobis temporibus itaque sed neque.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-4"
                            checked={isItemSelected('my-accordion-4')}
                            onClick={() => handleInputChange('my-accordion-4')}
                        />

                        <div className={`collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-4" ? 'text-[#99D31B]' : 'text-white'}`}>
                            04 Start With Mentors
                        </div>
                        <div className="collapse-content text-white text-[16px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero sit enim esse quidem maiores assumenda architecto deleniti doloribus porro id vero expedita, magni accusantium sint reprehenderit voluptatum deserunt, repudiandae quaerat, distinctio nobis temporibus itaque sed neque.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img className="absolute -top-[500px] -left-[300px]" src="/images/shape/9.png" alt="" />
                <img className="absolute bottom-[50px] -right-[150px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute -bottom-[200px] -right-[100px] animate-round-rotate360" src="/images/shape/6.png" alt="" />
                {/* <img className="absolute top-[100px] right-[200px] animate-round-rotate360 inline-block" src="/images/shape/2.png" alt="" /> */}
            </div>

        </div>
    );
};

export default FAQ;