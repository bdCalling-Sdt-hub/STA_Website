import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const Breadcrumbs = () => {
    return (
        <div>
            <BreadcrumbsCard title={"Career"} homePage={"Home"} homePageLink={"/"} presentPage={"Career"} presentPageLink={"/career"} />
        </div>
    );
};

export default Breadcrumbs;