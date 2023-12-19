import Services from '@/components/Home/Services';
import Testimonial from '@/components/Home/Testimonial';
import RootLayout from '@/components/Layouts/RootLayout';
import Breadcrumbs from '@/components/Portfolio/Breadcrumbs';
import Portfolio from '@/components/Portfolio/Portfolio';
import Achievement from '@/components/Services/Achievement';
import Choose from '@/components/Services/Choose';
import FreeConsulting from '@/components/Services/FreeConsulting';
import React from 'react';

const PortfolioPage = () => {
    return (
        <div>
            <Breadcrumbs />
            <Portfolio />
            {/* <Choose />
            <Services />
            <Achievement />
            <Testimonial /> */}
            <FreeConsulting />
        </div>
    );
};


export default PortfolioPage;

PortfolioPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}