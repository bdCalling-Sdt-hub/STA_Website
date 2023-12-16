import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Event from "@/components/Home/Event";
import Exceptional from "@/components/Home/Exceptional";
import JoinUs from "@/components/Home/JoinUs";
import MidBanner from "@/components/Home/MidBanner";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import StudentSuccess from "@/components/Home/StudentSuccess";
import TeamMember from "@/components/Home/TeamMember";
import Testimonial from "@/components/Home/Testimonial";
import TotalSuccess from "@/components/Home/TotalSuccess";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <MidBanner />
      <Services />
      <Portfolio />
      <TeamMember />
      {/* <Courses />
      <Exceptional />
      <Event />
      <StudentSuccess />
      <Testimonial />
      <TotalSuccess />*/}
      <Testimonial />
      <JoinUs />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
