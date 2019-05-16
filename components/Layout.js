import React from "react"
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />

    <style jsx>{`
      .page-container {
      }
    `}</style>
    <style jsx global>{`
      body {
        text-align: center;
      }
      main {
        margin: 0 8rem;
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