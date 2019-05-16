import React from "react"
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="content">
      {children}
    </div>
    <Footer />

    <style jsx>{`
      .content {
        box-sizing: border-box;
        max-width: 100%;
      }
    `}</style>
    <style jsx global>{`
    h1 {
      text-align: center;
    }
      main {
        max-width: 900px;
        text-align: center;
        margin: 0 auto;
      }

      @media only screen and (max-width: 768px) {
        main {
          margin: 0 1rem;
        }
      }

      html {
        height:100%; 
        padding:0px;
        margin:0px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Layout