import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCardDetails from '../Common/BreadcrumbsCardDetails';

const BreadcrumbsDetails = ({ service }) => {
    return (
        <BreadcrumbsCardDetails title={service.title} homePage={"Home"} homePageLink={"/"} presentPage={"Service"} presentPageLink={"/portfolio"} detailsPage={service.title} />
    );
};

export default BreadcrumbsDetails;