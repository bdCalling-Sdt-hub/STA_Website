import React from 'react';
// import BreadcrumbsCard from '../Common/BreadcrumbsCard';
import BreadcrumbsCardDetails from '../Common/BreadcrumbsCardDetails';

const BreadcrumbsDetails = () => {
    return (
        <BreadcrumbsCardDetails title={"Details Portfolio"} homePage={"Home"} homePageLink={"/"} presentPage={"Portfolio"} presentPageLink={"/portfolio"} detailsPage={"Details Portfolio"} />
    );
};

export default BreadcrumbsDetails;