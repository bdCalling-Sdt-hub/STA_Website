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
                <div className='text-start'>
                    <p className="text-[#99D31B] text-[24px]">OUR FAQ</p>
                    <h1 className="mt-[15px] font-semibold text-[54px] leading-tight font-family: 'Roboto',">
                        <span className="text-white">Best Awwards And</span>
                        <br />
                        <span className="text-white">Recognition</span>
                    </h1>

                </div>

                <div>
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

        </div>
    );
};

export default FAQ;