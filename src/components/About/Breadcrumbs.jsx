import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"About Us"} homePage={"Home"} homePageLink={"/"} presentPage={"About"} presentPageLink={"/about"} />
    );
};

export default Breadcrumbs;