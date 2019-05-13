import React from "react"
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Header className="page-container"/>
    {children}
    <Footer />

    <style jsx>{`
      .page-container {}
    `}</style>
    <style jsx global>{`
      body {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Layout