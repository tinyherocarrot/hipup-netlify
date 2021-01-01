import React from 'react';
import homeContent from '../data/homepage.json';
// TODO: refactor to get staticProps

const Footer = () => (
  <footer className="footer-container">
    <div>
      <img
        src={homeContent[0].fields.phiLogo.fields.file.url}
        alt="PHI Logo"
        className="phi-logo"
      />
    </div>
    <address>
      <p>
        Public Health Institute
        {' '}
        <br />
        555 12th St,
        {' '}
        <br />
        Oakland, CA 94607
        {' '}
        <br />
      </p>
    </address>

    <style jsx>
      {`
          .footer-container {
            background: rgba(113, 165, 214, 1) 100%;
            position: absolute;
            bottom: 0;
            padding: 0 1rem;
            box-sizing: border-box;
            height: auto;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          address {
            text-align: right;
            font-style: normal;
          }
          .phi-logo {
            background: transparent !important;
            max-height: 100px;
          }
        `}
    </style>
  </footer>
);

export default Footer;
