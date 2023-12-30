import BreadcrumbsDetails from '@/components/Career/BreadcrumbsDetails';
import JobDetails from '@/components/Career/JobDetails';
import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';
import JobList from '../../../public/db/job.json'

const JobDetailsPage = () => {

    const route = useRouter()
    const id = route.query.id;

    const { jobList } = JobList;


    return (
        <div>

            <BreadcrumbsDetails />

            <JobDetails jobList={jobList} id={id} />

        </div>
    );
};

export default JobDetailsPage;

JobDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}