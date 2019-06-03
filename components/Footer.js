import React from "react"
import homeContent from "../data/homepage.json"

const Footer = () => {
  return (
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
          Public Health Institute <br />
          555 12th St, <br />
          Oakland, CA 94607 <br />
        </p>
      </address>

      <style jsx>
        {`
          .footer-container {
            background-color: grey;
            position: absolute;
            bottom: 0;
            padding: 2rem;
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
      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        html{
          height:100%:
          padding:0px;
          margin:0px;
          box-sizing: border-box;
        }
        body {
          position: relative;
          margin: 0;
          padding-bottom: 12rem;
          min-height: 100%;
        }
        
      `}</style>
    </footer>
  )
}

export default Footer
