import Services from '@/components/Home/Services';
import TechStack from '@/components/Home/TechStack';
import Testimonial from '@/components/Home/Testimonial';
import RootLayout from '@/components/Layouts/RootLayout';
import Achievement from '@/components/Services/Achievement';
import Breadcrumbs from '@/components/Services/Breadcrumbs';
import Choose from '@/components/Services/Choose';
import FreeConsulting from '@/components/Services/FreeConsulting';
import Head from 'next/head';
import React from 'react';

const servicesPage = () => {
    return (
        <div>
            <Head>
                <title>Service | Spark Tech</title>
            </Head>
            <Breadcrumbs />
            <Choose />
            <Services />
            <TechStack />
            <Achievement />
            <Testimonial />
            <FreeConsulting />
        </div>
    );
};


export default servicesPage;

servicesPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}