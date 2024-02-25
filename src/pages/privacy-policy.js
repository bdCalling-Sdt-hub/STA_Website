import RootLayout from '@/components/Layouts/RootLayout';
import Breadcrumbs from '@/components/PrivacyPolicy/Breadcrumbs';
import FreeConsulting from '@/components/PrivacyPolicy/FreeConsulting';
import PrivacyPolicyPage from '@/components/PrivacyPolicy/PrivacyPolicy';
import Head from 'next/head';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div>
            <Head>
                <title>Privacy Policy | Sparktech Agency</title>
            </Head>
            <Breadcrumbs />
            <PrivacyPolicyPage />
            <FreeConsulting />
        </div>
    );
};

export default PrivacyPolicy;
PrivacyPolicy.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};