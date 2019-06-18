import React, { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { name: "Community", path: "/community" }
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
              <a className="page-link">{link.name}</a>
            </Link>
          ))}
        </>
      ) : (
        <>
          
          <button onClick={handleMenuToggle}>
          <div className="menu__bar"/>
          <div className="menu__bar"/>
          </button>
          <MobileNavMenu menuOpen={menuOpen} handleClose={handleMenuToggle} />
        </>
      )}

      <style jsx>{`
        .page-link {
          color: black;
          padding: 0.6rem;
          margin-left: 2rem;
          pointer: cursor;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.5s, color 0.4s;
        }

        .page-link:hover {
          border-bottom: 2px solid rgba(75, 143, 204, 1);
          color: rgba(75, 143, 204, 1);
        }

        button { 
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          background: none;
        }
        .menu__bar {
          height: 0.2rem;
          width: 1.2rem;
          background-color: black;
          margin: 0.1rem
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
            <a onClick={handleClose}>{link.name}</a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .menu-close {
            border: none;
            background-color: transparent;
            cursor: pointer;
            float: right;
          }
          .menu-close:hover {
            opacity: 0.6;
          }
          .mobile-nav {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #737373;
            color: white;
            height: 100vh;
            width: 100vw;
            z-index: 9000;
            font-size: 1.5rem;
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
