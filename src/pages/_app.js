import "@/styles/globals.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Poppins, DM_Sans } from '@next/font/google'
import { useEffect, useRef } from "react";
import CustomCursor from '../components/Common/AnimatedCursor';
import LocomotiveScrollWrapper from '../components/Common/LocomotiveScrollWrapper';



export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [])

  // return getLayout(
  //   <Component {...pageProps} />
  // );

  return (
    <>
      <CustomCursor />
      {getLayout(<Component {...pageProps} />)}
      {/* <LocomotiveScrollWrapper>
        {getLayout(<Component {...pageProps} />)}
      </LocomotiveScrollWrapper> */}
    </>
  );

  // return (
  //   <LocomotiveScrollProvider
  //     options={{
  //       smooth: true,
  //       // ... other Locomotive Scroll instance options
  //     }}
  //     watch={[
  //       // ... dependencies to watch (e.g., router.asPath for Next.js)
  //     ]}
  //     containerRef={containerRef}
  //   >
  //     <main data-scroll-container ref={containerRef}>
  //       <Component {...pageProps} />
  //     </main>
  //   </LocomotiveScrollProvider>
  // );

}
