import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { dm_sans, poppins } from '@/pages/_app';

const TermsConditions = () => {
    return (
        <div>
            <div className='containe my-[150px]'>
                <div className='container text-white'>

                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>SparkTech.agency Terms & Conditions</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Please read these Terms & Conditions (collectively with our Privacy Policy below “Terms of Service”) fully and carefully before using www.Sparktech-usa.com (the “Site”) and the related services, features, content or applications offered by Sparktech Ltd. (“we”, “us” or “our”) (together with the Site, the “Services”). These Terms of Service set forth the legally binding terms and conditions for your use of the Site and the Services. By registering for and/or using the Services. in any manner, including but not limited to visiting or browsing the Site, you agree to these terms of service and all other operating rules, policies and procedures that may be published from time to time on the Site by us, each of which is incorporated by reference and each of which may be updated from time to time without notice to you.</p>
                        </div>
                    </div>

                    {/* Definitions: */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Definitions</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>“Service” is a service created and offered by Sparktech ltd. registered in the capital city of Bangladesh (the “Company”)</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>“Employees” refers to people or companies curated by the company to perform Tasks on Sparktech, as further described below.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>“Customer” refers to people or companies that sign up to Sparktech to outsource Tasks/Projects.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>A “Service” is defined to be a set piece of work, at a set price, with a set delivery time. Both the price to be paid by the Customer to bdCalling and the delivery time is stated in the applicable gig Order form provided by Sparktech (“Order”).</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>“Deliverables” refers to work performed by the Tasker as part of an Order, such as (but not limited to): designs, video files, voice files, word copy, intangible information such expert advice, spreadsheets, presentations etc.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${poppins.className} text-[22px] font-normal`}>All deliverables must be sent through the Sparktech platform.</p>
                        </div>
                    </div>

                    {/* General Use */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>General Use</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Once a Service is ordered the applicable price and delivery time will not change in that Order unless otherwise agreed.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>An Order is placed as soon as a customer purchases and pays Sparktech for the Task. The Task is then put in a queue by Sparktech and sent to relevant Taskers.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Each Order is taken on a first come first serve basis by available Taskers. A Task begins as soon as the first Tasker clicks on the “Participate” button.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Some Tasks may be performed by more than one Employee, as applicable.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Delivery of the Task may be limited to the Delivery time set on the Order form at the time of Order.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>A Task is complete only when a Customer accepts the applicable Task’s deliverables in its discretion.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Any rights of ownership or use of the deliverables are only transferred to the Customer when the Task is complete, in accordance with the terms of the applicable Order, if any.</p>
                        </div>
                        {/* <div cl  */}
                    </div>

                    {/* For Customers */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>For Customers</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Customers may post a Task, including the requirements, relevant time period for completion, and amounts to be paid to the service for the Task (“Order Payment”). Customer must make the Order Payment to us before the Task will be posted on the Services.; thereafter, once an Order is placed relevant Employees will be notified.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Once an Employee has accepted the Order and the Task begins, the Employee will have a set timescale to deliver the Task as specified in the Order form. If delivery is not complete by then, the Customer may decide whether the time period should be extended to the current Employee, or if the Task should be re-posted for another Employee to complete.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Once the applicable Task’s deliverables are submitted to the Customer, the Customer will have a choice to reasonably approve or request a revision.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>If a revision is reasonably requested it will go back to the Employee to resubmit the Deliverables.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>The Customer can request 5 reasonable revisions per Task. After that point, the Customer can re-route the Task back to the queue for a different Employee to take it on and provide feedback to the initial Employee.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Unrealistic prices, requested speed of delivery or withholding or delaying approval of deliverables, and the like, may lead to a Customer’s Order being rejected or a Customers removal from the system, in Sparktech sole discretion.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Customers can apply for weekly or monthly billing based on the volume of work they pass through Sparktech, as described on the Site.</p>
                        </div>

                    </div>

                    {/* For Employees */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>For Customers</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Sparktech is a curated marketplace and uses certain criteria to approve or reject applicants to perform Tasks on Sparktech. Applicants must have a valid Sparktech account. While we endeavor to use Employees that have appropriate skills for the relevant Tasks, we do not endorse, guarantee, verify professional licenses or accreditations, or otherwise accept liability with respect to the Employees or Deliverables.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Each Task will have a fixed “Offer Price” set by the system dynamically which be shown on the applicable Task Order Form. By accepting a Task, an Employee is accepting the applicable Offer Price.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>The Offer Price displayed to Employees on the Site is the applicable Employee’s net take-home fee which he will be paid for the applicable Tasks he completes that is accepted by the Customer (no service fees will be deducted from the offer price by us; our fee is deducted from the Order Payment paid by the Customer before the Offer Price is displayed).</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>An Employee’s “Asking Price” asset in his settings is that Employee’s desired net take-home fee for each applicable Task he is advertising for through the Services. The Site will consider this amount to calculate the final Offer Price to display to Employee’s for each applicable Task based on availability and demand.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Once an Employee takes on a Task, he will be required to deliver it in the timeframe set forth in the Order. Failure to do so will affect his score on Sparktech and future earnings. Unrealistic Asking Prices, slow speed of delivery, or poor quality of Deliverables, and the like, may also lead to limited Tasks being displayed to the Employee, or the Employee’s removal from the system, in Sparktech sole discretion.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>If a Customer rejects a Task (in its sole discretion) it will be sent back to the applicable Employee for revision for a total of up to 5 times. After the fifth time, or sooner in egregious circumstances, the Customer may choose to re-route the Task back to the queue for another Employee to take it on.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Payment is only due to an Employee once a Task is completed and accepted by the Customer. Payment is processed to Employees weekly for competed and accepted Tasks, at the end of each working week to the applicable account provide to Sparktech. When an Employees’ account will actually receive the Payments will depend on his selected Payment method and the applicable Payment Processor’s terms and conditions.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Employees have an assigned score displayed on the Site (“Score”) which is used to prioritize Tasks routed to them. Late delivery, non-delivery, or consistent non-response to routed Tasks will reduce that score; conversely, higher scores are assigned to those that respond fast and deliver on time and in accordance with the request.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Consistent non-delivery will lead to Employees being removed from Sparktech at the sole discretion of Sparktech.</p>
                        </div>

                    </div>

                    {/* Eligibility and Account */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Eligibility and Account</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You represent and warrant that you are at least 18 years of age. The right to access the Services. is revoked where these Terms of Service, The Privacy Policy, or use of the Services. is prohibited or limited, or to the extent offering, sale or provision of the Services. conflicts with any applicable law, rule or regulation. You are solely responsible for the activity that occurs on your Account, and for keeping your Account password secure.</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Content</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>User Content. All content added, created, uploaded, submitted, distributed, or posted to the Services. by users (collectively “User Content”), is the sole responsibility of the person who originated such User Content. You represent that all User Content provided by you is accurate, complete, up-to-date, and in compliance with all applicable laws, rules, and regulations. You acknowledge that all content accessed by you using the Services. is at your own risk and you will be solely responsible for any damage or loss to you or any other party resulting therefrom. We do not guarantee that any content you access on or through the Services. is or will continue to be accurate.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>License Grant. By submitting User Content through the Services., you hereby do and shall grant us a worldwide, non-exclusive, perpetual, royalty-free, fully paid, sublicensable and transferable license to use, edit, modify, truncate, aggregate, reproduce, distribute, prepare derivative works of, display, perform, and otherwise fully exploit the User Content in connection with the Site, the Services. and our (and our successors’ and assigns’) businesses, including without limitation for promoting and redistributing part or all of the Site or the Services. (and derivative works thereof) in any media formats and through any media channels (including, without limitation, third party websites and feeds), and including after the termination of your Account or the Services. You also hereby do and shall grant each user of the Site and/or the Services. a non-exclusive, perpetual license to access your User Content through the Site and/or the Services, and to use, edit, modify, reproduce, distribute, prepare derivative works of, display and perform such User Content, including after the termination of your account or the Services.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Availability of content. We do not guarantee that any Tasks or other content will be made available on the Site or through the Services. We reserve the right to but do not have any obligation to, remove, block, edit or modify any content in our sole discretion, at any time, without notice to you and for any reason or for no reason at all.</p>
                        </div>
                    </div>

                    {/* Rules of Conduct */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Rules of Conduct</p>
                        <div className='flex items-start gap-4 mt-[22px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>1.</p>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You shall not (and shall not permit any third party to) either (a) take any action or (b) upload, download, post, submit or otherwise distribute or facilitate distribution of any content on or through the service, including without limitation any User Content, that: infringes any third party right or violates any law or contractual duty you know is false, misleading, untruthful, unlawful, threatening, abusive, harassing, defamatory, fraudulent, pornographic, or is otherwise inappropriate as determined by us in our sole discretion; constitutes unauthorized or unsolicited advertising, junk or bulk e-mail (“spamming”); contains software viruses or any other harmful computer codes, files, or programs; includes anyone’s identification documents or sensitive financial information, or otherwise interferes with the Services..</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>2.</p>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You shall not (directly or indirectly):(i) decipher, decompile, disassemble, reverse engineer or otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the Services., except to the limited extent applicable laws specifically prohibit such restriction,(ii) modify, translate, or otherwise create derivative works of any part of the Services, or(iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive hereunder.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>3.</p>
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We also reserve the right to suspend or terminate accounts, withhold Payments, suspend an Order or a Task, or block any user’s access to Tasks or other features of the Services, in our sole discretion and without liability including, without limitation, in the event we have concerns about fraud, quality of Services, bad debt, misuse or abuse of our Services, or other violations of our policies and principles.</p>
                        </div>
                    </div>


                    {/* User Disputes */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>User Disputes</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We reserve the right, without any obligation, to intervene in or monitor disputes between our users. You agree to Co-Operate with and assist us in good faith, and to provide us with such information and take such actions as we may reasonably request, in connection with any disputes involving you. Although we may moderate content or disputes in our discretion, we have no authority to legally bind third parties, or force them to resolve complaints or disputes. Any efforts or statements made by us to intervene in or moderate disputes is superseded by this provision, which may not be modified, waived or released except by a written agreement, dated and signed by our Chief Executive Officer and dated and signed by the individual or entity to whom the modification, waiver or release is granted.</p>
                        </div>
                    </div>

                    {/* Third Party Services */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Third Party Servicess</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>The Services. may permit you to link to other websites, services. or resources on the internet, and other websites, services. or resources may contain links to the Services. When you access third party resources on the internet, you do so at your own risk. These other resources are not under our control, and you acknowledge that we are not responsible or liable for them. You acknowledge that we are not responsible for and shall have no liability with respect to the performance of the Tasks or the acts or omissions of the Employees or Customers.</p>
                        </div>
                    </div>

                    {/* Payments and Billing */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Payments and Billing</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We use a third-party payment processor (the “Payment Processor”) to bill Customers and pay Employees through payment accounts linked to your applicable Account on the Services. (your “Billing Account”). The processing of Payments will be subject to the terms, conditions and privacy policies of the Payment Processor in addition to this Agreement. We are not responsible for error or delays by the Payment Processor. By initiating a Task, you agree to pay us, through the Payment Processor, all charges at the prices stated for the applicable Order in accordance with the applicable Payment terms and you authorize us, through the Payment Processor, to charge your chosen Payment provider (your “Payment Method”). You agree to pay us when placing your Order, except when paying with a credit card when you will be charged when an Employee takes on your Task. You agree to make Payment using that selected Payment Method. We reserve the right to correct any errors or mistakes that it makes even if it has already requested or received payment.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Payment Method. The terms of your Payment will be based on your Payment Method and may be determined by agreements between you and the financial institution, credit card issuer or other providers of your chosen Payment Method. If we, through the Payment Processor, do not receive payment from you, you agree to pay all amounts due on your billing account upon demand. To terminate your Authorization or Change your Payment Method, go to your Settings Page. You agree that we may accumulate charges incurred and submit them as one or more aggregate charges during or at the end of each billing cycle.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Current Information Required. You must provide current, complete and accurate information for your Billing Account. You must promptly update all information to keep your billing account current, complete and accurate (such as a change in billing address, credit card number, or credit card expiration date), and you must promptly notify us or our Payment Processor if your Payment Method is canceled (e.g., for loss or theft) or if you become aware of a potential breach of security, such as the unauthorized disclosure or use of your User Name or Password. Changes to such information can be made at www.bdCalling-usa.com.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[30px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Reaffirmation of Authorization. Your non-termination or continued use the Services reaffirms that we are authorized to charge your Payment Method for Tasks you initiate. We may submit those charges for Payment and you will be responsible for such charges. This does not waive our right to seek Payment directly from you. Your charges may be payable in advance, in arrears, per usage, or as otherwise described when you initially selected to use the Services.</p>
                        </div>

                    </div>

                    {/* Termination */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Termination</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We may terminate your access to all or any part of the Services. at any time, with or without cause, which may result in the forfeiture and destruction of all information associated with your membership. If you wish to terminate your account, you may do so by following the instructions on the Site or through the Services. Any fees paid to us hereunder to us are non-refundable. All provisions of these Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, licenses of user content, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                        </div>
                    </div>

                    {/* Warranty Disclaimer */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Warranty Disclaimer</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You release us from all liability for your use of the Services. The Services. and content is provided “as is”, “as available” and without warranty of any kind, express or implied, including, but not limited to, the implied warranties of title, non-infringement, merchantability and fitness for a particular purpose, and any warranties implied by any course of performance or usage of trade, all of which are expressly disclaimed.</p>
                        </div>
                    </div>

                    {/* Indemnification */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Indemnification</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>You shall defend, indemnify, and hold harmless us from all liabilities, claims, and expenses, including reasonable attorneys’ fees that arise from or relate to your use or misuse of, or access to, the services, content, or otherwise from your User Content, violation of these terms of service, or acts and omissions arising from your account.</p>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Limitation of Liability</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>In no event shall we, nor our directors, employees, agents, partners, suppliers or content providers, be liable under contract, tort, strict liability, negligence or any other legal or equitable theory with respect to the Services.(i) For any lost profits, data loss, cost of procurement of substitute goods or Services., or special, indirect, incidental, punitive, compensatory or consequential damages of any kind whatsoever, substitute goods or Services. (however, arising),(ii) For any bugs, viruses, trojan horses, or the like (regardless of the source of origination),(iii) For any direct damages in excess of (in the aggregate) of the greater of (a) fees paid by you that are retained by us for the particular Task at issue or (b) $500.00, or(iv) Any matter beyond our reasonable control.</p>
                        </div>
                    </div>

                    {/* Governing Law and Jurisdiction; Arbitration */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Governing Law and Jurisdiction; Arbitration</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Except as otherwise set forth below in this section 15, these terms of service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflicts of law rules or the united nations convention on contracts for the international sale of goods, and the United States of America. Except as otherwise set forth below, you agree that any dispute arising from or relating to the subject matter of these terms of service shall be governed by the exclusive jurisdiction and venue of the state and federal courts of New York County, New York.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Arbitration. You agree that all disputes between you and us (whether or not such dispute involves a third party) with regard to your relationship with us, including without limitation disputes related to these terms of service, your use of the services., and/or rights of privacy and/or publicity, will be resolved by binding, individual arbitration under the American Arbitration Association’s rules for arbitration of consumer-related disputes and you and we hereby expressly waive trial by jury. Discovery and rights to appeal in arbitration are generally more limited than in a lawsuit, and other rights that you and we would have in court may not be available in arbitration. As an alternative, you may bring your claim in your local “small claims” court, if permitted by that small claims court’s rules and if within such court’s jurisdiction, unless such action is transferred, removed or appealed to a different court. You may bring claims only on your own behalf. Neither you nor we will participate in a class action or class-wide arbitration for any claims covered by this agreement to arbitrate. You are giving up your right to participate as a class representative or class member on any class claim you may have against us including any right to class arbitration or any consolidation of individual arbitrations. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person’s account, if we are a party to the proceeding. This dispute resolution provision will be governed by The Federal Arbitration Act and not by any state law concerning arbitration. In the event the American Arbitration Association is unwilling or unable to set a hearing date within one hundred and sixty (160) days of filing the case, then either we or you can elect to have the arbitration administered instead by the judicial arbitration and mediation services. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms of Service.</p>
                        </div>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>Severability. If the prohibition against class actions and other claims brought on behalf of third parties contained above are found to be unenforceable, then all of the preceding languages in this arbitration section will be null and void. This arbitration agreement will survive the termination of your relationship with us.</p>
                        </div>
                    </div>

                    {/* Modification */}
                    <div className='mt-[60px]' data-aos="fade-right">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Modification</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>We reserve the right, in our sole discretion, to modify or replace any of these Terms of Service, or change, suspend, limit access to or discontinue the Services. (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the site or by sending you to notice through the services, via e-mail or by another appropriate means of electronic communication. Your continued use of the Services. following notification of any changes to these terms of service constitutes acceptance of those changes.</p>
                        </div>
                    </div>

                    {/* Miscellaneous */}
                    <div className='mt-[60px]' data-aos="fade-left">
                        <p className={`${poppins.className} text-[45px] font-semibold`}>Miscellaneous</p>
                        <div className='flex items-center gap-4 mt-[22px]'>
                            {/* <img src="/images/shape/2.png" alt="" /> */}
                            <p className={`${dm_sans.className} text-[22px] font-normal`}>These terms of service are the entire agreement between you and us with respect to the services and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and us with respect to the services. If any provision of these terms of service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms of service will otherwise remain in full force and effect and enforceable. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. These terms of service are personal to you and are not assignable, transferable or sublicensable by you except with our prior written consent. We may assign, transfer or delegate any of our rights and obligations hereunder without consent. All Employees are independent contractors and no agency, partnership, joint venture, or employment relationship is created as a result of these terms of service and neither party has any authority of any kind to bind the other in any respect. Our failure to enforce any part of these terms of service shall not constitute a waiver of our right to later enforce that or any other part of these terms of service. In Order for any waiver to be binding, we must provide you with written notice of such waiver through one of our authorized representatives.</p>
                        </div>
                    </div>


                    {/* Shape */}
                    <div className=''>
                        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
                        <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[7150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[8150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[9150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                        <img className="absolute top-[10050px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

                        <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[6350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[7350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[8350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[9350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[10350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                        <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[6500px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[8500px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                        <img className="absolute top-[10500px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                        <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[7350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                        <img className="absolute top-[9350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />


                        <img className="absolute top-[3100px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[4350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[6350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[8350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                        <img className="absolute top-[10350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsConditions;