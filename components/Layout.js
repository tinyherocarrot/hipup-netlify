import React from "react"
import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,500|Playfair+Display:700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div className="content">{children}</div>
    <Footer />

    <style jsx>{`
      .content {
        box-sizing: border-box;
        max-width: 100%;
      }
    `}</style>
    <style jsx global>{`
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
    `}</style>
  </div>
)

export default Layout
