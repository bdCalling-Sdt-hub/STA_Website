import RootLayout from '@/components/Layouts/RootLayout';
import Breadcrumbs from '@/components/TermsAndConditions/Breadcrumbs';
import FreeConsulting from '@/components/TermsAndConditions/FreeConsulting';
import TermsConditions from '@/components/TermsAndConditions/TermsConditions';
import Head from 'next/head';
import React from 'react';

const termsAndConditions = () => {
    return (
        <div>
            <Head>
                <title>Terms & Conditions | Spark Tech</title>
            </Head>
            <Breadcrumbs />
            <TermsConditions />
            <FreeConsulting />
        </div>
    );
};

export default termsAndConditions;
termsAndConditions.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};