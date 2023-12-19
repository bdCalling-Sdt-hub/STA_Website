import "@/styles/globals.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return getLayout(<Component {...pageProps} />);
}
