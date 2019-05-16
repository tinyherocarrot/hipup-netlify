import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic'

const NavLinks = dynamic(
  () => import('./NavLinks'),
  {
    ssr: false
  }
)

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <Link href="/">
        <a>HIPUP</a>
      </Link>  
    </div>
    <NavLinks/>

    <style jsx>{`
      .header-container {
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        margin-left: 1rem
      }
    `}
    </style>
  </div>
);

export default Header;
