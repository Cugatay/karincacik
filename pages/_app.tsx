import React, { useEffect } from 'react';
import '../styles/globals.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Aos from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
