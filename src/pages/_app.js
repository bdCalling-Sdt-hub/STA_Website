import "@/styles/globals.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Poppins, DM_Sans } from '@next/font/google'
import { useEffect } from "react";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return getLayout(
    <Component {...pageProps} />
  );
}
