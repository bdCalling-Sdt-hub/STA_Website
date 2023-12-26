// components/LocomotiveScrollWrapper.js
import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'path-to-your-locomotive-scroll.css'; // Import the styles

const LocomotiveScrollWrapper = ({ children }) => {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                // ... other Locomotive Scroll instance options
            }}
            watch={[
                // ... dependencies to watch (e.g., router.asPath for Next.js)
            ]}
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                {children}
            </main>
        </LocomotiveScrollProvider>
    );
};

export default LocomotiveScrollWrapper;
