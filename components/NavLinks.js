import React, { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { name: "Contact", path: "/contact" },
  { name: "CURRENT PROJECTS", path: "/" },
  { name: "PAST PROJECTS", path: "/" },
  { name: "PUBLICATIONS", path: "/" }
]

const NavLinks = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  const handleMenuToggle = () => toggleMenuOpen(!menuOpen)

  return (
    <div className="nav-links">
      {width > 768 ? (
        <>
          {navLinks.map(link => (
            <Link href={link.path} key={link.name}>
              <a>{link.name}</a>
            </Link>
          ))}
        </>
      ) : (
        <>
          <button onClick={handleMenuToggle}>MENU</button>
          <MobileNavMenu menuOpen={menuOpen} handleClose={handleMenuToggle} />
        </>
      )}

      <style jsx>{`
        .nav-links {
          background-color: ${width > 450 ? "pink" : "green"};
        }

        a {
          color: black;
          text-decoration: none;
          font-family: "Arial";
          margin-right: 15px;
          pointer: cursor;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}

export default NavLinks

const MobileNavMenu = ({ menuOpen, handleClose }) => {
  // FIXME:
  useEffect(() => {
    const onEscPress = e => {
      // console.log("CUKDE", e)
      if (e.key == "Escape") handleClose()
    }
    window.document.addEventListener("onkeypress", e => onEscPress(e))
    // console.log(window.document.onkeypress)
    return () => {
      window.document.removeEventListener("onkeypress", onEscPress)
    }
  })
  // FIXME: link clicks should close menu if already on specified page
  return (
    <div className="mobile-nav">
      <button className="menu-close" onClick={handleClose}>
        X
      </button>
      <div className="logo">
        <Link href="/">
          <a>HIPUP</a>
        </Link>  
      </div>
      <div className="mobile-navlinks">
        {navLinks.map(link => (
          <Link href={link.path} key={link.name}>
            <a>{link.name}</a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .menu-close {
            border: none;
            background-color: transparent;
            float: right
          }
          .mobile-nav {
            display: ${menuOpen ? "inline" : "none"};
            position: absolute;
            top: 0;
            left: 0;
            background-color: #737373;
            color: white;
            height: 100vh;
            width: 100vw;
          }
          .mobile-navlinks {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  )
}
