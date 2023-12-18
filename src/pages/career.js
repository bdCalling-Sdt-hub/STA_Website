import Breadcrumbs from '@/components/Career/Breadcrumbs';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const CareerPage = () => {
    return (
        <div>
            <Breadcrumbs />
            {/* <Choose />
            <Services />
            <Achievement />
            <Testimonial />
            <FreeConsulting /> */}
        </div>
    );
};


export default CareerPage;

CareerPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}