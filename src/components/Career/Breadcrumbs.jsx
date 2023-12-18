import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Career"} homePage={"Home"} homePageLink={"/"} presentPage={"Career"} presentPageLink={"/career"} />
    );
};

export default Breadcrumbs;