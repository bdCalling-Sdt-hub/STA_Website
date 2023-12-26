import { useRouter } from 'next/router';
import React from 'react';
import ServiceList from '../../../public/db/services.json'
import RootLayout from '@/components/Layouts/RootLayout';
import Offer from '@/components/Services/Offer';
import Deliverables from '@/components/Services/Deliverables';
import BreadcrumbsDetails from '@/components/Services/BreadcrumbsDetails';
import Achievement from '@/components/Services/Achievement';
import DesignProcess from '@/components/Services/DesignProcess';
import Industry from '@/components/Services/Industry';
import RelatedServices from '@/components/Services/RelatedServices';
import Testimonial from '@/components/Services/Testimonial';
import FreeConsulting from '@/components/Services/FreeConsulting';

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
            <Industry />
            <RelatedServices />
            <Testimonial />
            <FreeConsulting />

            <div className=''>
                {/* <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" /> */}
                {/* <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}
                <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />
                {/* <img className="absolute top-[6150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" /> */}

                <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[4350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                {/* <img className="absolute top-[5350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}

                <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                {/* <img className="absolute top-[2750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" /> */}
                <img className="absolute top-[4050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />
                <img className="absolute top-[5050px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

                <img className="absolute top-[550px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[2350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[3350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />
                <img className="absolute top-[5350px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />


                <img className="absolute top-[2800px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
                {/* <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                {/* <img className="absolute top-[4050px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
                {/* <img className="absolute top-[5350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" /> */}
            </div>
        </div>
    );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}