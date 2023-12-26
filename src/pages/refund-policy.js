import RootLayout from '@/components/Layouts/RootLayout';
import Breadcrumbs from '@/components/RefundPolicy/Breadcrumbs';
import FreeConsulting from '@/components/RefundPolicy/FreeConsulting';
import RefundPolicyPage from '@/components/RefundPolicy/RefundPolicy';
import React from 'react';

const RefundPolicy = () => {
    return (
        <div>
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