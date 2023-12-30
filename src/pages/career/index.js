import Achievement from '@/components/Career/Achievement';
import Breadcrumbs from '@/components/Career/Breadcrumbs';
import Choose from '@/components/Career/Choose';
import FreeConsulting from '@/components/Career/FreeConsulting';
import JobOpening from '@/components/Career/JobOpening';
import Services from '@/components/Career/Services';
import SubmitDetails from '@/components/Career/SubmitDetails';
import TeamMate from '@/components/Career/TeamMate';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const CareerPage = () => {
    return (
        <div>
            <Head>
                <title>Career | Spark Tech</title>
            </Head>
            <Breadcrumbs />
            <Choose />
            <Services />
            <Achievement />
            <TeamMate />
            <JobOpening />
            <SubmitDetails />
            <FreeConsulting />
        </div>
    );
};


export default CareerPage;

CareerPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}