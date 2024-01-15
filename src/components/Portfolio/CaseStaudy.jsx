'use-client'

import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PortfolioList from "../../../public/db/portfolio.json";

const CaseStaudy = ({ params }) => {
    const { portfolioList } = PortfolioList;


    let data;
    if (Array.isArray(params) && params.length >= 2) {
        const name = params[1];
        data = portfolioList.find(item => item?.projectInfo?.tag === name);
    }

    console.log(data)

    return (
        <div className='container my-5'>
            <img className='w-full' src={data?.caseStudy} alt='' />
        </div>
    );
};

export default CaseStaudy;


CaseStaudy.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>
}