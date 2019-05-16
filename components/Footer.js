import React from "react"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>PHI LOGO</div>
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
            padding: 1rem;
            height: auto;
            width: 100%;
            display: flex;
            justify-content: space-between;
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
          padding-bottom: 8rem;
          min-height: 100%;
        }
      `}</style>
    </footer>
  )
}

export default Footer