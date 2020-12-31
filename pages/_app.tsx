/* eslint-disable react/jsx-props-no-spreading */
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import App from 'next/app';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const { projectSlugs = [] } = pageProps;
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <Component {...pageProps}></Component>,
    projectSlugs,
  );
}

export default MyApp;
