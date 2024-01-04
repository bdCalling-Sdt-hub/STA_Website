"use client"

import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import Welcome from "@/shared/Welcome";
import React, { useEffect, useState } from 'react'

const RootLayout = ({ children }) => {

  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Delay the rendering of components by 5 seconds
    const timeoutId = setTimeout(() => {
      setShowComponents(true);
    }, 5000);

    // Cleanup function to clear the timeout in case the component unmounts
    return () => clearTimeout(timeoutId);

  }, []);

  return (
    <div>

      {showComponents == false ? <Welcome /> :
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      }

    </div>
  );
};

export default RootLayout;
