import Link from "next/link";
import style from "./Breadcrumbs.about.module.css"
import { dm_sans, poppins } from "@/pages/_app";

const BreadcrumbsCard = ({ title, homePage, homePageLink, presentPage, presentPageLink }) => {
    return (
        <div className={`${style.bkImage}`}>
            <div className="text-center lg:mt-[60px] mt-[110px]">
                <p className={`${poppins.className} lg:text-[75px] text-[32px] text-white font-medium`}>{title}</p>
                <nav class="flex items-center justify-center" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <Link href={homePageLink} class={`${poppins.className} inline-flex items-center text-sm font-medium text-white hover:text-[#99D31B] dark:text-gray-400 dark:hover:text-white`}>
                                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                {homePage}
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href={presentPageLink} className={`${poppins.className} text-[18px] ms-1 text-sm font-medium text-white hover:text-[#99D31B] md:ms-2 dark:text-gray-400 dark:hover:text-white`}>{presentPage}</Link>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div>
                <img className="absolute lg:top-[100px] top-[120px] lg:left-[20px] lg:h-[92px] h-[40px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" />

                <img className="absolute lg:bottom-[500px] lg:right-[120px] bottom-[400px] right-[60px] lg:h-[48px] h-[17px] animate-round-rotate" src="/images/shape/3.png" alt="" />


                <img className="absolute lg:bottom-[500px] lg:right-[120px] bottom-[400px] right-[60px] lg:h-[142px] h-[51px] animate-round-rotate" src="/images/shape/5.png" alt="" />

                <img className="absolute lg:top-[150px] lg:right-[180px] top-[450px] right-[100px] animate-round-rotate360" src="/images/shape/6.png" alt="" />

                <img className="absolute lg:bottom-[400px] lg:left-[280px] bottom-[400px] left-[80px] lg:h-[142px] h-[64px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                <img className="absolute lg:bottom-[420px] lg:left-[160px] bottom-[420px] left-[60px] lg:animate-round-rotate360" src="/images/shape/6.png" alt="" />
                <img className="absolute bottom-[620px] right-[560px] lg:visible invisible animate-round-rotate360" src="/images/shape/6.png" alt="" />

                <img className="absolute lg:top-[150px] top-[150px] lg:left-[200px] left-[100px] lg:animate-round-rotate360" src="/images/shape/3.png" alt="" />


                <img className="absolute -top-[400px] -right-[300px] lg:visible hidden animate-round-rotate" src="/images/shape/8.png" alt="" />
                <img className="absolute -top-[450px] -left-[400px] lg:visible invisible animate-round-rotate inline-block" src="/images/shape/8.png" alt="" />
            </div>

            {/* <img className="absolute top-[80px] left-[880px] animate-round-rotate inline-block" src="/images/shape/4.png" alt="" /> */}
            {/* <img className="absolute bottom-[150px] right-[20px] animate-round-rotate inline-block" src="/images/shape/1.png" alt="" /> */}
            {/* <img className="absolute bottom-[200px] left-[980px] animate-round-rotate" src="/images/shape/7.png" alt="" /> */}
        </div>
    )
}

export default BreadcrumbsCard;