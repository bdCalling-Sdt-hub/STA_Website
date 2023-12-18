import Services from '@/components/Home/Services';
import Testimonial from '@/components/Home/Testimonial';
import RootLayout from '@/components/Layouts/RootLayout';
import Achievement from '@/components/Services/Achievement';
import Breadcrumbs from '@/components/Services/Breadcrumbs';
import Choose from '@/components/Services/Choose';
import FreeConsulting from '@/components/Services/FreeConsulting';
import React from 'react';

const PortfolioPage = () => {
    return (
        <div>
            <Breadcrumbs />
            <Choose />
            <Services />
            <Achievement />
            <Testimonial />
            <FreeConsulting />
        </div>
    );
};


export default PortfolioPage;

PortfolioPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}