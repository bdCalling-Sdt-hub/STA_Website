import React from 'react';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Terms & Conditions"} homePage={"Home"} homePageLink={"/"} presentPage={"Terms & Conditions"} presentPageLink={"/team"} />
    );
};

export default Breadcrumbs;