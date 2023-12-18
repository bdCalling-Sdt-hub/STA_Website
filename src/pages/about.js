import About from "@/components/About/About";
import Achievement from "@/components/About/Achievement";
import Breadcrumbs from "@/components/About/Breadcrumbs";
import Experts from "@/components/About/Experts";
import FAQ from "@/components/About/FAQ";
import FreeConsulting from "@/components/About/FreeConsulting";
import OurClients from "@/components/About/OurClients";
import WhatBdCalling from "@/components/About/WhatBdCalling";
import Subscribe from "@/components/Common/Subscribe";
import Testimonial from "@/components/Home/Testimonial";
import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <About />
      <Achievement />
      <Testimonial />
      <FAQ />
      <OurClients />
      <FreeConsulting />
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
