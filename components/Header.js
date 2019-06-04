import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

import homeContent from "../data/homepage.json"

const NavLinks = dynamic(() => import("./NavLinks"), {
  ssr: false
})

const Header = () => (
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
    <NavLinks />

    <style jsx>
      {`
        .header-container {
          padding: 2.2rem;
          width: 100%;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-container {
          margin-left: 1rem;
          cursor: pointer;
        }
        .hipup-logo {
          max-width: 140px;
          margin: 1rem 0 0 0 ;
        }
      `}
    </style>
  </div>
)

export default Header
