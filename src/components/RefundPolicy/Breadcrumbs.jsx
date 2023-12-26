import React from 'react';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Refund Policy"} homePage={"Home"} homePageLink={"/"} presentPage={"Refund Policy"} presentPageLink={"/team"} />
    );
};

export default Breadcrumbs;