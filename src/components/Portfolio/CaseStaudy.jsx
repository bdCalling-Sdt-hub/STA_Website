import { useRouter } from 'next/router';
import React from 'react';
import PortfolioList from '../../../public/db/portfolio.json'

const CaseStaudy = () => {

    // const route = useRouter();
    // const iconTitle = route.query.id;
    // console.log(iconTitle)
    // const { portfolioList } = PortfolioList;
    // const portfolio = portfolioList?.find(portfolio => portfolio?.iconTitle?.toString() === iconTitle);
    // console.log(portfolio)

    const router = useRouter();
    const { data } = router.query;

    console.log(data.portfolio)

    return (
        <div>
            <h1>Another Page</h1>
            <p>Data from homepage: {data}</p>
        </div>
    );
};

export default CaseStaudy;