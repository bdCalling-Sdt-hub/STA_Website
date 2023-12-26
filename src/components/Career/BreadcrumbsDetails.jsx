import React from 'react';
import BreadcrumbsCard from '../Common/BreadcrumbsCard';

const BreadcrumbsDetails = () => {
    return (
        <div>
            <BreadcrumbsCard title={"Job Details"} homePage={"Home"} homePageLink={"/"} presentPage={"Career"} presentPageLink={"/career"} />
        </div>
    );
};

export default BreadcrumbsDetails;