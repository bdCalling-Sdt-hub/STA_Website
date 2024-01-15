import RootLayout from '@/components/Layouts/RootLayout';
import CaseStaudy from '@/components/Portfolio/CaseStaudy';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const CaseStaudyHomePage = () => {

    const DaynamicCaseStaudy = dynamic(() => import('@/components/Portfolio/CaseStaudy'), { loading: () => <h1>Loading...........</h1> });

    const router = useRouter();
    const params = router.query.slug

    return (
        <div>
            <DaynamicCaseStaudy
                params={params}></DaynamicCaseStaudy>
        </div>
    );
};

export default CaseStaudyHomePage;

CaseStaudyHomePage.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>
}