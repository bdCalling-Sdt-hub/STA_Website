import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Portfolio"} homePage={"Home"} homePageLink={"/"} presentPage={"Portfolio"} presentPageLink={"/portfolio"} />
    );
};

export default Breadcrumbs;