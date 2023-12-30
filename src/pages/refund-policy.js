import RootLayout from '@/components/Layouts/RootLayout';
import Breadcrumbs from '@/components/RefundPolicy/Breadcrumbs';
import FreeConsulting from '@/components/RefundPolicy/FreeConsulting';
import RefundPolicyPage from '@/components/RefundPolicy/RefundPolicy';
import Head from 'next/head';
import React from 'react';

const RefundPolicy = () => {
    return (
        <div>
            <Head>
                <title>Refund Policy | Spark Tech</title>
            </Head>
            <Breadcrumbs />
            <RefundPolicyPage />
            <FreeConsulting />
        </div>
    );
};

export default RefundPolicy;
RefundPolicy.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};