import TopHeading from "@/components/Common/TopHeading";
import Achievement from "@/components/Contact/Achievement";
import Breadcrumbs from "@/components/Contact/Breadcrumbs";
import FormSection from "@/components/Contact/FormSection";
import RootLayout from "@/components/Layouts/RootLayout";
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactPage = () => {
  const DynamicMap = dynamic(() => import("@/components/Contact/Map"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <div>
      <Head>
        <title>Contact | Spark Tech</title>
      </Head>
      <Breadcrumbs />
      <Achievement />
      <FormSection />
      <DynamicMap />

      <div className=''>
        <img className="absolute top-[1250px] left-[120px] animate-round-rotate360" src="/images/shape/3.png" alt="" />
        <img className="absolute top-[1150px] right-[120px] animate-round-rotate" src="/images/shape/4.png" alt="" />

        <img className="absolute top-[2350px] -left-[100px] mt-[100px] ms-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

        <img className="absolute top-[1750px] -right-[100px] mt-[100px] me-[200px] animate-round-rotate" src="/images/shape/11.png" alt="" />

        <img className="absolute top-[400px] -left-[100px] w-[300px] mt-[300px] ms-[100px]" src="/images/shape/9.png" alt="" />

        <img className="absolute top-[1350px] -right-[100px] w-[400px] mt-[300px] me-[100px]" src="/images/shape/10.png" alt="" />
      </div>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
