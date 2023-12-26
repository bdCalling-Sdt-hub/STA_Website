import React from 'react';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Privacy Policy"} homePage={"Home"} homePageLink={"/"} presentPage={"Privacy Policy"} presentPageLink={"/team"} />
    );
};

export default Breadcrumbs;