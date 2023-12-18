import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Services"} homePage={"Home"} homePageLink={"/"} presentPage={"Services"} presentPageLink={"/services"} />
    );
};

export default Breadcrumbs;