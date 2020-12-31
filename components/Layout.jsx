import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// import Header from './Header';

import Footer from './Footer';

import homeContent from '../data/homepage.json';

const NavLinks = dynamic(() => import('./NavLinks'), {
  ssr: false,
});

const Layout = ({ children, projectSlugs }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,500|Playfair+Display:700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <div className="header-container">
      <div className="logo-container">
        <Link href="/">
          <img
            src={homeContent[0].fields.hipupLogo.fields.file.url}
            alt="HIPUP"
            className="hipup-logo"
          />
        </Link>
      </div>
      <NavLinks projectSlugs={projectSlugs} />

    </div>
    <div className="content">{children}</div>
    <Footer />

    <style jsx>
      {`
      .content {
        box-sizing: border-box;
        max-width: 100%;
      }
    `}
    </style>
    <style jsx global>
      {`
      html {
        height: 100%;
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
      }
      body {
        font-family: "Noto Sans TC", sans-serif;
      }
      h1 {
        text-align: center;
      }
      h2, h3 {
        font-family: 'Playfair Display', serif;
      }
      .centered-margined {
        max-width: 800px;
        margin: 0 auto 6rem;
        padding 0 2rem;
      }
      a {
        text-decoration: none;
      }
      section {
        margin: 0 auto 6rem;
      }

      @media only screen and (max-width: 768px) {
        .centered-margined {
          margin: 0 1rem;
        }
      }

      .font-light {
        font-weight: lighter;
      }

       .header-container {
          padding: 2.2rem;
          width: 100%;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-bottom: solid 5px rgba(75, 143, 204, 0.8);
        }

        .logo-container {
          margin-left: 1rem;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .hipup-logo {
          max-width: 140px;
          margin: 1rem 0 0 0 ;
        }
    `}
    </style>
  </div>
);

export const getLayout = (page, projectSlugs) => (
  <Layout projectSlugs={projectSlugs}>{page}</Layout>
);

export default Layout;
