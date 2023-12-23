import { useRouter } from 'next/router';
import React from 'react';
import ServiceList from '../../../public/db/services.json'
import RootLayout from '@/components/Layouts/RootLayout';
import Offer from '@/components/Services/Offer';
import Deliverables from '@/components/Services/Deliverables';
import BreadcrumbsDetails from '@/components/Services/BreadcrumbsDetails';
import Achievement from '@/components/Services/Achievement';
import DesignProcess from '@/components/Services/DesignProcess';

const ServiceDetails = () => {
    const route = useRouter();
    const id = route.query.id;

    const { serviceList } = ServiceList;
    const service = serviceList.find(service => service.id.toString() === id);
    console.log(service)

    return (
        <div>
            <BreadcrumbsDetails service={service} />
            <Offer service={service}></Offer>
            <Deliverables />
            <DesignProcess />
            <Achievement></Achievement>
        </div>
    );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}