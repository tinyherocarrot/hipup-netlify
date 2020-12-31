import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
  Button,
} from 'reakit';

const NavLinks = ({ projectSlugs }) => {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const projectMenu = useMenuState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  const handleMenuToggle = () => toggleMenuOpen(!menuOpen);

  return (
    <div className="nav-links">
      {width > 768 ? (
        <nav>
          <Link href="/about" aria-label="About" passHref>
            <a className="page-link">About</a>
          </Link>
          <MenuButton as="a" className="page-link" {...projectMenu}>
            Projects
          </MenuButton>
          <Menu {...projectMenu} aria-label="Projects">
            {projectSlugs.map(({ sys: { id }, projectName, slug }) => (
              <MenuItem
                as="a"
                href={`/projects/${slug}`}
                key={id}
                {...projectMenu}
              >
                {projectName}
              </MenuItem>
            ))}
            <MenuSeparator {...projectMenu} />
            <MenuItem as="a" href="/past-projects" {...projectMenu}>Past Projects</MenuItem>
          </Menu>
          <Link href="/publications" aria-label="Publications" passHref>
            <a className="page-link">Publications</a>
          </Link>
          <Button>
            <Link href="/community" aria-label="Get Involved" passHref>
              <a className="page-link">Get Involved</a>
            </Link>
          </Button>
        </nav>
      ) : (
        <>
          <button onClick={handleMenuToggle}>
            <div className="menu__bar" />
            <div className="menu__bar" />
          </button>
          <MobileNavMenu menuOpen={menuOpen} handleClose={handleMenuToggle} />
        </>
      )}

      <style jsx>
        {`
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
      `}

      </style>
    </div>
  );
};

export default NavLinks;

const MobileNavMenu = ({ menuOpen, handleClose }) => {
  // FIXME:
  useEffect(() => {
    const onEscPress = (e) => {
      // console.log("CUKDE", e)
      if (e.key == 'Escape') handleClose();
    };
    window.document.addEventListener('onkeypress', (e) => onEscPress(e));
    // console.log(window.document.onkeypress)
    return () => {
      window.document.removeEventListener('onkeypress', onEscPress);
    };
  });
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
        {navLinks.map((link) => (
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
            font-size: 1.2rem;
          }
          .menu-close:hover {
            opacity: 0.6;
          }
          .mobile-nav {
            display: ${menuOpen ? 'flex' : 'none'};
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
  );
};
