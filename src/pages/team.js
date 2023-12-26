import FreeConsulting from "@/components/About/FreeConsulting";
import RootLayout from "@/components/Layouts/RootLayout";
import Breadcrumbs from "@/components/Team/Breadcrumbs";
import TeamList from "@/components/Team/TeamList";

const TeamPage = () => {
    return (
        <div>
            <Breadcrumbs />
            <TeamList />
            <FreeConsulting />
        </div>
    );
};

export default TeamPage;

TeamPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};