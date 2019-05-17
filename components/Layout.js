import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div>
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
      h2 {
        font-family: "Arapey", serif;
      }
      .centered-margined {
        max-width: 800px;
        text-align: center;
        margin: 0 auto;
      }

      section {
        margin: 0 auto 3rem;
      }

      @media only screen and (max-width: 768px) {
        .centered-margined {
          margin: 0 1rem;
        }
      }

      
    `}</style>
  </div>
)

export default Layout
