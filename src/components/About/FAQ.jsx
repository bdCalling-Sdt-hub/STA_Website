import { dm_sans, poppins } from '@/pages/_app';
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
                    <p className={`${dm_sans.className} text-[#99D31B] text-[24px]`}>OUR FAQ</p>
                    <h1 className={`${poppins.className} mt-[15px] font-semibold text-[54px] leading-tight`}>
                        <span className="text-white">EXPLORE OUR OFFERS TO HELP YOUR PROJECT</span>
                        <br />
                        <span className="text-white"> GET OFF TO A GOOD START.</span>
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

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-1" ? 'text-[#99D31B]' : 'text-white'}`}>
                            01 Mobile App Development
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Spark Tech provides custom mobile development application services. Increase your sales and clients’ loyalty with a stable, interactive, and high-performance mobile app.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Mobile App Development Services</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>iOS App Development Services</p>
                                </div>
                            </div>
                            <div className='flex gap-[54px] mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Android App Development Services</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Hybrid App Development Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={isItemSelected('my-accordion-2')}
                            onClick={() => handleInputChange('my-accordion-2')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-2" ? 'text-[#99D31B]' : 'text-white'}`}>
                            02 Web Development
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>We build functional and engaging web products for businesses in diverse industries. Our broad scope of technologies allows us to select the best-fit approach for your specific project. Our engineers create progressive web apps, AR-powered e-commerce stores, and more.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Web Development Services</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Web Application Development Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-3"
                            checked={isItemSelected('my-accordion-3')}
                            onClick={() => handleInputChange('my-accordion-3')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-3" ? 'text-[#99D31B]' : 'text-white'}`}>
                            03 MVP for Startups and Enterprises
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Our experienced managers, business analytics, developers, and designers help companies to validate their business ideas. Test your project with an MVP, collect feedback from your target audience, and launch a product-market fit solution.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Software Development for Startups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-4"
                            checked={isItemSelected('my-accordion-4')}
                            onClick={() => handleInputChange('my-accordion-4')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-4" ? 'text-[#99D31B]' : 'text-white'}`}>
                            04 Dedicated Development Teams
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Increase your time-to-market speed and save significant costs in the hiring process. Our pool of talents delivers fast and high-quality development services on demand. You can outsource entire projects or augment your existing team with our engineers.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Dedicated Software Development Team</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-5"
                            checked={isItemSelected('my-accordion-5')}
                            onClick={() => handleInputChange('my-accordion-5')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-5" ? 'text-[#99D31B]' : 'text-white'}`}>
                            05 Enterprise Software Development
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>We provide API integration, enterprise software development, mobility, digital transformation services, and more. Optimize your data management and operational efficiency with our intelligent solutions.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>Enterprise Software Development Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-6"
                            checked={isItemSelected('my-accordion-6')}
                            onClick={() => handleInputChange('my-accordion-6')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-6" ? 'text-[#99D31B]' : 'text-white'}`}>
                            06 IT Consulting
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Automate your operations and achieve business goals faster with a digital transformation approach Intellecsoft elaborates on strategic IT consulting to improve your software architecture and design performance-oriented tech innovations.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>IT Consulting Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-7"
                            checked={isItemSelected('my-accordion-7')}
                            onClick={() => handleInputChange('my-accordion-7')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-7" ? 'text-[#99D31B]' : 'text-white'}`}>
                            07 UI/UX Design
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Engage and retain your users with intuitive, captivating, and responsive design. We create user-centric interfaces to ensure improved customer experience.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>UI/UX Design Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-8"
                            checked={isItemSelected('my-accordion-8')}
                            onClick={() => handleInputChange('my-accordion-8')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-8" ? 'text-[#99D31B]' : 'text-white'}`}>
                            08 QA & Testing
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Our company executes both manual and automated quality assurance to deliver flawless solutions. Adjusting the best practices and the latest technologies, our company provides efficient performance and high-quality project implementation.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>QA & Software Testing Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-9"
                            checked={isItemSelected('my-accordion-9')}
                            onClick={() => handleInputChange('my-accordion-9')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-9" ? 'text-[#99D31B]' : 'text-white'}`}>
                            09 Software Architecture Solutions
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Our tech leads design software architecture to enable the maintainability, interoperability, security, and stable performance of your product.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>project & Software Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse collapse-plus">
                        <input
                            type="radio"
                            name="my-accordion-10"
                            checked={isItemSelected('my-accordion-10')}
                            onClick={() => handleInputChange('my-accordion-10')}
                        />

                        <div className={`${poppins.className} collapse-title text-xl font-semibold text-[24px] ${selectedItem === "my-accordion-10" ? 'text-[#99D31B]' : 'text-white'}`}>
                            10 DevOps Solutions
                        </div>
                        <div className={`${dm_sans.className} collapse-content text-white text-[16px]`}>
                            <p>Automate and optimize your IT processes with our DevOps services. Secure your business with CI/CD implementation, high-load-ready systems, disaster recovery services, and other technical remedies.</p>
                            <div className='flex gap-16 mt-4 items-center'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/shape/2.png" alt="" />
                                    <p className={`${dm_sans.className} text-[16px]`}>DevOps Services</p>
                                </div>
                            </div>
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