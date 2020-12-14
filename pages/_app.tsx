/* eslint-disable react/jsx-props-no-spreading */
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import App from 'next/app';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
