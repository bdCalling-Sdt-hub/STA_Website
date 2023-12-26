import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';

const RefundPolicyPage = () => {
    return (
        <div>
            <div className='containe my-[150px]'>
                <div className='container text-white'>

                    {/* Introduction  */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <div className='flex items-center gap-4'>
                            <p className={`${dm_sans.className} text-[20px] font-normal`}>At Sparktech, we strive to make our customers 100% satisfied with the services they’ve purchased from us. If you’re having trouble with Sparktech service or believe it is not what you ordered, and/or you’re feeling frustrated, then please contact our customer support to report about the low-quality services and our team will assist you as soon as possible.</p>
                        </div>
                        <p className={`${poppins.className} text-[30px] font-semibold mt-[22px]`}>No returns/refunds will be offered for any purchases except if the service you’ve purchased is:</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[20px] font-normal`}>Completely irrelevant and 100% mistakes at our end. And you’ve asked for a revision, but you didn’t get any response in 72h (business days only). And/or our main service description was fully misleading. – Then, you do have the option to request a refund.</p>
                        </div>
                    </div>

                    {/* Definitions: */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Definitions</p>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <p className={`${poppins.className} text-[20px] font-normal`}>You have changed your mind after an order submission/subscription. You bought a service by mistake, and the service was sent to you. The service(s) was bought by your employee or inmate from your PayPal account to which he/she had legal access. It has expired more than 7 days after we delivered you the service, and you even didn’t contact at Sparktech customer support. We don’t offer any refund for any gig that you buy/bought at a discounted price. The items you buy at a special price (e.g. promotions/discounts) will not be eligible for refunds.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <p className={`${poppins.className} text-[20px] font-normal`}>No refund will be offered for any gig (even if it was bought at a regular price) while any discount offer is running on our site. Your refund request will be evaluated after the discount offer/campaign ends.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <p className={`${poppins.className} text-[20px] font-normal`}>Sparktech offers a full or partial refund within 7 business days starting from the moment when the member makes the payment. In this case, Sparktech has the right to ask questions about the refund, and also, we have the right NOT to offer the refund if we see it reasonable.</p>
                        </div>
                    </div>

                    {/* Non-Personal Information */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[34px] font-semibold`}>Please also note that:</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You may cancel your account at any time. However, there are no refunds for cancellation. Refunds can take up to 14 days to reflect in your account.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>The above notice, also, applies to the license all of our Sign Up plans. Please contact us if you need further information.</p>
                        </div>
                    </div>



                    {/* Shape */}
                    <div className=''>
                        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                        <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        {/* <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}

                        <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        {/* <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                        {/* <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                        <img className="absolute top-[1550px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        {/* <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                        {/* <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                        <img className="absolute top-[50px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        {/* <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}
                        {/* <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" /> */}


                        {/* <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                        <img className="absolute top-[1200px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        {/* <img className="absolute top-[4350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RefundPolicyPage;