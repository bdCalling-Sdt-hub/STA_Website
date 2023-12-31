import React from 'react';
import BreadcrumbsCard from './BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <BreadcrumbsCard title={"Our Team"} subTitle={"SparkTech leadership team has a long history of success in content creation,"} subTitle1={"business management, and marketing."} homePage={"Home"} homePageLink={"/"} presentPage={"Team"} presentPageLink={"/team"} />

        // homePage = { "Home"} homePageLink = { "/"} presentPage = { "Team"} presentPageLink = { "/team"}
    );
};

export default Breadcrumbs;