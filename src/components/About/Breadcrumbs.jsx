import React from 'react';
import BreadcrumbsCard from './BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"About Us"} homePage={"Home"} homePageLink={"/"} presentPage={"About"} presentPageLink={"/about"} />
    );
};

export default Breadcrumbs;