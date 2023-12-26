import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <div className='containe my-[150px]'>
                <div className='container text-white'>

                    {/* Introduction  */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Introduction</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Sparktech.agency-usa.com values the privacy and security of the information seriously that you share with us through www.Sparktech-usa.com. We also want you must feel comfortable using our website. It is important that you understand how we collect, use, and maintain your information. This Privacy Policy deals with personally identifiable information (referred to as “Data” below) that may be collected by us on our site. This Policy does not apply to other entities that we do not own or control or persons that are not our employees, agents or within our control.</p>
                        </div>
                    </div>

                    {/* Types of Information We Collect: */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Types of Information We Collect</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[34px] font-semibold`}>Personal Information</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>It includes your name, addresses information, personal e-mail address and URL, telephone number, account username and password, credit/debit card numbers and associated billing addresses and expiration dates, account numbers, as well as other, similar information. Such information is only collected from you if you voluntarily submit it to us.</p>
                        </div>
                    </div>

                    {/* Non-Personal Information */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Non-Personal Information</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Like most websites, we gather statistical and other analytical information collected on an aggregate basis of all visitors to our website. This Non-Personal Data comprises information that cannot be used to identify or contact you, such as demographic information regarding, for example, user IP addresses where they have been clipped or anonymised, browser types and other anonymous statistical data involving the use of our website.</p>
                        </div>
                    </div>

                    {/* Use of Information */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Use of Information</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>bdCalling-usa.com may use and disclose information as described in this document. In addition to the uses described in this document, we may use information for purposes that include order fulfillment and administration, product surveys, billing and audits, email newsletters and other, similar uses. We only collect, use, and disclose personal information or non-personal information for purposes that are reasonable in the circumstances. We use only fair and lawful means to collect information. We reserve the right to use or disclose aggregated information and business contact information in ways that we think are appropriate.</p>
                        </div>
                    </div>

                    {/* Children */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Children</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We do not allow persons who are ages thirteen or younger to become members of this site. If you’re under age 13, do not use personal information with us.</p>
                        </div>
                    </div>

                    {/* Other Web Sites Links */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Other Web Sites Links</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>When you click on a link on this website that takes you to a website operated by another company, you will be subjected to that company’s website privacy policies.</p>
                        </div>
                    </div>

                    {/* Contact information */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Contact information</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>If you have any questions about this policy or our site, please feel free to contact us using the info@bdcalling.com email address.</p>
                        </div>
                    </div>

                    {/* Correcting/Updating personal information */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Correcting/Updating personal information</p>
                        <div className='flex items-start gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You are free to update your information at any time directly through our Site.</p>
                        </div>
                    </div>


                    {/* Shape */}
                    <div className=''>
                        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                        <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        {/* <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}

                        <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        {/* <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                        <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        {/* <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                        {/* <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                        <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        {/* <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}


                        {/* <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                        <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        {/* <img className="absolute top-[4350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;