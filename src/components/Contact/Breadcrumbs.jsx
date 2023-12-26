import React from 'react';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <div>
            <BreadcrumbsCard title={"Contact Us"} homePage={"Home"} homePageLink={"/"} presentPage={"Contact Us"} presentPageLink={"/contact"} />
        </div>
    );
};

export default Breadcrumbs;