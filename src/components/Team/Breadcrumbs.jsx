import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Team"} homePage={"Home"} homePageLink={"/"} presentPage={"Team"} presentPageLink={"/team"} />
    );
};

export default Breadcrumbs;